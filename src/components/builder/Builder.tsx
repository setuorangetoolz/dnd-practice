import React from 'react';
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Builder:React.FC = () => {
    return (
        <div>
           <Navbar/>
            <Sidebar/>
        </div>
    );
};

export default Builder;