import { Text, Card,  CardBody } from '@chakra-ui/react'

export default function ContentCard({text, width, height, toggleFunction}){
    return(
        <Card bg="black"
            color="white"
            width={width}
            height={height}
            onClick={toggleFunction}>
            <CardBody>
                <Text>{text}</Text>
            </CardBody>
        </Card>
    );
};