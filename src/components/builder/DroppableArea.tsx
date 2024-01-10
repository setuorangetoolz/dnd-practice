import React, {useState} from 'react';
import {useDrop} from "react-dnd";
import {ItemTypes} from "./DraggableCard";

interface DroppableAreaProps {
    onDrop: () => void;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ onDrop}) => {
    const [dropCount, setDropCount] = useState(0);

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: () => {
            onDrop();
            setDropCount((count) => count + 1);
            console.log(`id: ${dropCount}`)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const backgroundColor = isOver ? 'lightgreen' : 'white';

    return (
        <div ref={drop} style={{ padding: '10px', border: '1px solid black', backgroundColor }}>
            {Array.from({length:dropCount}).map((_, index) => (
                <h1 key={index}>Hello</h1>
            ))}
            {dropCount === 0 && <p>Drop the card here</p>}
        </div>
    );
};

export default DroppableArea;