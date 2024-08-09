import { Text, Card,  CardBody } from '@chakra-ui/react'
import './card.css'

export default function ContentCard({id, text, width, height, toggleFunction, opacity, position, zIndex, transform, transition}){
    return(
        <Card id={id}
            bg="black"
            color="white"
            width={width}
            height={height}
            onClick={toggleFunction}
            opacity={opacity}
            style={{
                zIndex: zIndex,
                transform: transform,
                position: position,
                transition: transition,
                transformStyle: 'preserve-3d',
            }}
            >
            <CardBody>
                <Text>{text}</Text>
            </CardBody>
        </Card>
    );
};