import React from 'react';
import {Paper, Stack} from "@mui/material";
import {Draggable} from "react-beautiful-dnd";

interface ItemInterface {
    items: { name: string, id: string }[];
}

const items: ItemInterface = {
    items: [
        { name: 'Text', id: '1' },
        { name: 'Button', id: '2' },
    ],
};

const Elements = () => {
    return (
        <Stack spacing={1} p={2}>
            {items.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <Paper variant={"outlined"} sx={{p: 2, textAlign: 'center'}}>Text</Paper>
                        </div>
                    )}
                </Draggable>
                ))}
        </Stack>
    );
};

export default Elements;