import { Flipped, Flipper } from "react-flip-toolkit";
import ContentCard from "./ContentCard";
import React, {useState} from "react";
import { Box } from "@chakra-ui/react";

const FrontCard = ({toggleMoveCard}) => (
    <Flipped flipId="front">
        <Box onClick={toggleMoveCard}>
            <ContentCard
                text={"Card 1"}
                width={"100px"}
                height={"200px"}
                onClick={toggleMoveCard} />
        </Box>
    </Flipped>
);

const BackgroundCard = ({toggleMoveCard}) => (
    <Flipped flipId={"front"}>
        <Box onClick={toggleMoveCard}>
            <ContentCard
                text={"Card 2"}
                width={"50px"}
                height={"50px"}/>
        </Box>    
    </Flipped>
);

export default function CardContainer(){
    const [card, setCard] = useState(false);
    const toggleMoveCard = () => setCard(prevState => !prevState);

    return (
        <Flipper flipKey={card}>
            {card ?(
                <FrontCard toggleMoveCard={toggleMoveCard}/>
            ):(
                <BackgroundCard toggleMoveCard={toggleMoveCard}/>
            )}
        </Flipper>
    );
};