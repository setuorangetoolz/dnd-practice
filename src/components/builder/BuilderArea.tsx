import React from 'react';
import {DragDropContext, Droppable} from "react-beautiful-dnd";

const BuilderArea = () => {
    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                        </div>
                        )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default BuilderArea;