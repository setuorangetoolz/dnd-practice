import React from 'react';
import {Stack} from "@mui/material";
import {ItemInterface} from "../builder/Items";


const Elements = ({ items }: { items: ItemInterface[] }) => {
    return (
        <Stack spacing={1} p={2}>
            {/*{items.map((item, index) => (*/}
            {/*    <Draggable key={item.id} draggableId={item.id} index={index}>*/}
            {/*        {(provided, snapshot) => (*/}
            {/*            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}*/}
            {/*                ref={provided.innerRef}*/}
            {/*                {...provided.draggableProps}*/}
            {/*                {...provided.dragHandleProps}*/}
            {/*                style={{ ...getItemStyle(snapshot.isDragging, provided.draggableProps.style) }}*/}
            {/*            >*/}
            {/*                /!*<Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>*!/*/}
            {/*                    {item.content}*/}
            {/*                </Paper>*/}
            {/*            // </div>*/}
            {/*        )}*/}
            {/*    </Draggable>*/}
            {/*))}*/}
        </Stack>
    );
};

export default Elements;