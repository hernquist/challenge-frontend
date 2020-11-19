import { useState, useEffect } from "react";
import { modulePropTypes } from "../../constant/proptypes";
import noop from "lodash/noop";
import { readRoute } from "../../lib/read-route";
import {
  OrderingTitle,
  OrderArrow,
  Container,
  MobileArrow,
  DragWrapper,
  Card,
  List,
} from "./styles";
import { Button } from "../../styles/common";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import get from "lodash/get";
import Recap from "../recap";
import { GREATER_THAN, LESS_THAN } from "../../constant";
import { checkOrder } from "../../lib/check-order";
import { getRandomInt } from "../../lib/get-random-int";
import { isMobile } from "../../lib/is-mobile";
import { Numerator, Denominator } from "../cards/styles";
import { getNumerator, getDenominator } from "../../lib/get-numerator";

const Ordering = ({
  module,
  asPath,
  error,
  loading,
  clearError,
  savePracticeHandler,
}) => {
  const content = get(module, "content");
  const numberOfTurns = get(module, "numberOfTurns");
  const { topic, engagement, level, assessment } = readRoute(asPath);

  const getItems = () => {
    const list = get(content, `[${numberOfAttempts}].list`, []);
    const count = list.length;
    return Array.from({ length: count }, (_, i) => i)
      .map((i) => ({
        id: `item-${i}`,
        content: list[i],
      }))
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  const setRandomOrder = () => (getRandomInt(2) ? GREATER_THAN : LESS_THAN);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // useState
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [order, setOrder] = useState(setRandomOrder());
  const [roundOver, setRoundOver] = useState(false);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);
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

  const onDragEnd = (result) => {
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
    const { isTrue } = items.reduce(checkOrder(order), {
      isTrue: true,
      prev: null,
    });

    const newNumberOfCorrect = numberOfCorrect + isTrue;
    const newNumberOfAttempts = numberOfAttempts + 1;

    const round = {
      list: items,
      order,
      correct: isTrue,
      numberOfAttempts: newNumberOfAttempts,
      numberOfCorrect: newNumberOfCorrect,
    };

    setNumberOfCorrect(newNumberOfCorrect);
    setNumberOfAttempts(newNumberOfAttempts);
    setOrder(setRandomOrder());
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

  const direction = isMobile() ? "vertical" : "horizontal";
  const orderTitle =
    order === GREATER_THAN
      ? "From least to greatest"
      : "From greatest to least";

  return roundOver ? (
    <Recap
      gameHistory={gameHistory}
      numberOfCorrect={numberOfCorrect}
      numberOfAttempts={numberOfAttempts}
      reset={reset}
    />
  ) : (
    <Container>
      {loading && <h1>Loading...</h1>}

      <OrderingTitle>
        {orderTitle}
        <OrderArrow>{order === GREATER_THAN ? "\u2197" : "\u2198"}</OrderArrow>
      </OrderingTitle>
      <DragWrapper>
        <MobileArrow>
          {order === GREATER_THAN ? "\u2193" : "\u2191"}
        </MobileArrow>
        <div style={{ margin: "0 3rem" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction={direction}>
              {(provided, snapshot) => (
                <List
                  ref={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                  {...provided.droppableProps}
                >
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          style={{ ...provided.draggableProps.style }}
                        >
                          <Numerator style={{ padding: "0.1rem" }}>
                            {getNumerator(item.content)}
                          </Numerator>
                          <Denominator style={{ padding: "0.1rem" }}>
                            {getDenominator(item.content)}
                          </Denominator>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </DragWrapper>
      <Button onClick={handleClick}>ANSWER</Button>
    </Container>
  );
};

Ordering.propTypes = modulePropTypes;
Ordering.defaultProps = {
  clearError: noop,
  savePracticeHandler: noop,
};

export default Ordering;
