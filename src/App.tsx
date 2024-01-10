import React from 'react';
import './App.css';
import Builder from "./components/builder/Builder";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const App=()=> {
  return (
      <DndProvider backend={HTML5Backend}>
      <Builder/>
      </DndProvider>
  );
}

export default App;
