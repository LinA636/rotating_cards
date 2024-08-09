import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import ContentCard from "./ContentCard";

const cards = [{
        id: "left",
        text: "Card left",
    },{
        id: "front",
        text: "Card front",
    },{
        id: "right",
        text: "Card right",
    }];


export default function Container2 () {
  const [activeCard, setActiveCard] = useState('front');

  const toggleMoveCards = (id) => {
    setActiveCard(id);
  };

  // create Card order
  const getOrderedCards = () => {
    if (activeCard === null) return cards;

    const activeIndex = cards.findIndex((card) => card.id === activeCard);
    const reorderedCards = [
      cards[(activeIndex + 1) % 3], // card before the active card
      cards[activeIndex],           // active card
      cards[(activeIndex + 2) % 3], // card after the active card
    ]

    return reorderedCards;
  };

  const reorderedCards = getOrderedCards();

  return (
    <Flipper flipKey={activeCard}>
      <Flex 
        justifyContent="space-evenly" 
        alignItems="center" 
        gap={100}
        position='relative'>
          {reorderedCards.map((card) => {
            const isMiddle = (activeCard === card.id);
            return (
              <Flipped key={card.id} flipId={card.id} 
                spring={{
                    stiffness: 80,
                    damping: 20,
                    overshootClamping: true,
                }} >
                <Box 
                  position={isMiddle? 'absolute' : 'relative'}
                  zIndex={isMiddle ? 2 : 1}
                  >
                    <ContentCard
                      id={card.id}
                      text={card.text}
                      width={isMiddle ? "300px" : "200px"}
                      height={isMiddle ? "400px" : "300px"}
                      toggleFunction={() => toggleMoveCards(card.id)}
                      opacity={isMiddle ? 1 : 0.5}
                      />
                </Box>
              </Flipped>
            );
        })}
      </Flex>
    </Flipper>
  );
};
