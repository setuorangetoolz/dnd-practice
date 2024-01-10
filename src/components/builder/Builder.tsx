import React, {useState} from 'react';
import Navbar from "../navbar/Navbar";
import {Stack} from "@mui/material";
// import {DragDropContext} from "react-beautiful-dnd";
import {ItemInterface, ITEMS} from "./Items";
import DraggableCard from "./DraggableCard";
import DroppableArea from "./DroppableArea";

const Builder:React.FC = () => {
    const [items, setItems] = useState<ItemInterface[]>(ITEMS);
    const handleDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);
        setItems(newItems);
    };

    const handleDrop = () => {
        console.log(`Dropped item`);

    };

    return (
        <div>
           <Navbar/>
            {/*<DragDropContext onDragEnd={handleDragEnd}>*/}
                <Stack direction={"row"}>
                    {/*<Sidebar items={ITEMS}/>*/}
                    {/*<BuilderArea items={ITEMS}/>*/}
                    <div>
                        <DraggableCard id="1" text={"h1"}/>
                        <DroppableArea onDrop={handleDrop}/>
                    </div>
                </Stack>
            {/*</DragDropContext>*/}

        </div>
    );
};

export default Builder;