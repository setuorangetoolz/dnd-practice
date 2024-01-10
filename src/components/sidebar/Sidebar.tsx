import React from 'react';
import {Box} from "@mui/material";
import {ItemInterface} from "../builder/Items";
import Elements from "../elements/Elements";

const Sidebar = ({ items }: { items: ItemInterface[] }) => {
    return (
        <Box width={320} sx={{height:'calc(100vh - 60px)',borderRight:'1px solid #80808026'}}>
            <Box p={2}  bgcolor={"skyblue"} sx={{width:'100%'}}>
                Elements
            </Box>
            <Elements items={items}/>
        </Box>
    );
};

export default Sidebar;