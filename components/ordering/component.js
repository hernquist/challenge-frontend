import { useState } from "react";
import { modulePropTypes } from "../../constant/proptypes";
import noop from "lodash/noop";
import { readRoute } from "../../lib/read-route";
import { OrderingCard } from "./styles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import get from "lodash/get";

const Ordering = ({
  module,
  asPath,
  error,
  loading,
  clearError,
  savePracticeHandler,
}) => {
  // state
  const content = get(module, "content");
  const numberOfTurns = get(module, "numberOfTurns", 5);
  const { topic, engagement, level, assessment } = readRoute(asPath);
  console.log(topic, engagement, level, assessment);
  console.log(content);

  // fake data generator
  const getItems = (count) => {
    const list = get(content, "[0].list", []);
    console.log("list", list);
    return Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k}`,
      content: list[k],
    }));
  };

  const grid = 8;

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const [items, setItems] = useState(getItems(6));

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

  return (
    <div>
      {/* <div style={{ display: "flex", flexDirection: "row", margin: "1rem" }}>
        {activeList.map((number) => (
          <OrderingCard>{number}</OrderingCard>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "row", margin: "1rem" }}>
        {emptyList.map((number) => (
          <OrderingCard>{number}</OrderingCard>
        ))}
      </div> */}

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

      <div>CHECK</div>
    </div>
  );
};

Ordering.propTypes = modulePropTypes;
Ordering.defaultProps = {
  clearError: noop,
  savePracticeHandler: noop,
};

export default Ordering;
