import { useState, useEffect } from "react";
import { modulePropTypes } from "../../constant/proptypes";
import noop from "lodash/noop";
import { readRoute } from "../../lib/read-route";
import { OrderingCard } from "./styles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import get from "lodash/get";
import Recap from "../recap";
import { checkOrder } from "../../lib/check-order";

const Ordering = ({
  module,
  asPath,
  error,
  loading,
  clearError,
  savePracticeHandler,
}) => {
  const grid = 8;
  // state
  const content = get(module, "content");
  const numberOfTurns = get(module, "numberOfTurns");
  const { topic, engagement, level, assessment } = readRoute(asPath);

  console.log(topic, engagement, level, assessment);

  const getItems = () => {
    const list = get(content, `[${numberOfAttempts}].list`, []);
    const count = list.length;
    return Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k}`,
      content: list[k],
    }));
  };

  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [roundOver, setRoundOver] = useState(false);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const [items, setItems] = useState(getItems());
  const [gameHistory, updateGameHistory] = useState([]);

  useEffect(() => {
    if (numberOfAttempts === 0) {
      setRoundOver(false);
    }
    if (numberOfAttempts >= numberOfTurns) {
      setRoundOver(true);
    } else {
      setItems(getItems());
    }
  }, [numberOfAttempts]);

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    padding: grid,
    overflow: "auto",
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  };

  const handleClick = () => {
    const { isTrue } = items.reduce(checkOrder, { isTrue: true, prev: null });

    const newNumberOfCorrect = numberOfCorrect + isTrue;
    const newNumberOfAttempts = numberOfAttempts + 1;

    const round = {
      list: items,
      correct: isTrue,
      numberOfAttempts: newNumberOfAttempts,
      numberOfCorrect: newNumberOfCorrect,
    };

    setNumberOfCorrect(newNumberOfCorrect);
    setNumberOfAttempts(newNumberOfAttempts);
    updateGameHistory([...gameHistory, round]);
  };

  const reset = () => {
    setNumberOfAttempts(0);
    setNumberOfCorrect(0);
    updateGameHistory([]);
  };

  useEffect(() => {
    if (roundOver) {
      savePracticeHandler({
        practice: {
          completedOn: new Date(),
          topic,
          engagement,
          level: Number(level),
          totalQuestion: numberOfAttempts,
          totalCorrect: numberOfCorrect,
          score: numberOfCorrect / numberOfAttempts,
          assessmentType: assessment,
        },
      });
    }
  }, [roundOver]);

  if (!!error.message) {
    return (
      <Error
        visible={true}
        message={error.message}
        buttonMessage="CONTINUE"
        clearError={clearError}
      />
    );
  }

  return roundOver ? (
    <Recap
      gameHistory={gameHistory}
      numberOfCorrect={numberOfCorrect}
      numberOfAttempts={numberOfAttempts}
      reset={reset}
    />
  ) : (
    <div>
      {loading && <h1>Loading...</h1>}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div onClick={handleClick}>CHECK</div>
    </div>
  );
};

Ordering.propTypes = modulePropTypes;
Ordering.defaultProps = {
  clearError: noop,
  savePracticeHandler: noop,
};

export default Ordering;
