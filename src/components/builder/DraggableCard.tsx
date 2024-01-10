import React from 'react';
import {useDrag} from "react-dnd";

export enum ItemTypes {
    CARD = 'card',
}

interface DraggableCardProps {
    id: string;
    text: React.ReactNode;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ id, text }) => {
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.CARD,
        item: { id },
        collect: (monitor) => ({
                isDragging: monitor.isDragging(),
        }),
    });
    // const [{ isDragging }, drag] = useDrag({
    //     type: ItemTypes.CARD,
    //     item: { id },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // });

    return <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>{text}</div>;
};

export default DraggableCard;