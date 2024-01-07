import React from 'react';
import {Box} from "@mui/material";
import Elements from "../elements/Elements";

const Sidebar:React.FC = () => {
    return (
        <Box width={320} sx={{height:'calc(100vh - 60px)',borderRight:'1px solid #80808026'}}>
            <Box p={2}  bgcolor={"skyblue"} sx={{width:'100%'}}>
                Elements
            </Box>
            <Elements/>
        </Box>
    );
};

export default Sidebar;