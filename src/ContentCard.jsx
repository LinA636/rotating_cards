import { Text, Card,  CardBody } from '@chakra-ui/react'

export default function ContentCard({text}){
    return(
        <Card bg="black"
            color="white"
            width={"100px"}>
            <CardBody>
                <Text>{text}</Text>
            </CardBody>
        </Card>
    );
};