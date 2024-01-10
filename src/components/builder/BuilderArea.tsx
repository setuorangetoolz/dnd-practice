import React, {useState} from 'react';
import {ItemInterface, ITEMS} from "./Items";
import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd";
import Elements from "../elements/Elements";


const BuilderArea = ({ items }: { items: ItemInterface[] }) => {
    return (
        <div>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <Elements items={items} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
        </div>
    );
};

export default BuilderArea;