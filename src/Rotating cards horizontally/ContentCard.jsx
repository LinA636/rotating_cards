import { Text, Card,  CardBody } from '@chakra-ui/react'

export default function ContentCard({id, text, width, height, toggleFunction, opacity, fontSize}){
    return(
        <Card id={id}
            bg="black"
            color="white"
            width={width}
            height={height}
            onClick={toggleFunction}
            opacity={opacity}>
            <CardBody>
                <Text fontSize={fontSize}>{text}</Text>
            </CardBody>
        </Card>
    );
};