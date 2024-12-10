import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import PerformanceCard from "../from other code/PerformanceCard";

const [frontCardHeight, backCardHeight] = ['400px', '300px'];
const [frontCardWidth, backCardWidth] = ['300px', '200px'];


export default function RotatingCardContainer3Cards ({cards}) {
  const [activeCard, setActiveCard] = useState(0);

  if (cards.length !== 3) {
    throw new Error('This component only works with 3 cards');
  }

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
              <Flipped 
                key={card.id} 
                flipId={card.id} 
                spring={{
                    stiffness: 80,
                    damping: 20,
                    overshootClamping: true,}} >
                <Box 
                  position={isMiddle? 'absolute' : 'relative'}
                  zIndex={isMiddle ? 2 : 1}>
                    <PerformanceCard
                      id={card.id}
                      title={card.title}
                      description={isMiddle ? card.description : undefined}
                      src={card.src}
                      color={card.color}
                      width={isMiddle ? frontCardWidth : backCardWidth}
                      height={isMiddle ? frontCardHeight: backCardHeight}
                      variant={isMiddle ? 'activeCard' : 'hiddenCard'}
                      toggleFunction={() => toggleMoveCards(card.id)}
                      cardIndex={card.id}/>
                </Box>
              </Flipped>
            );
        })}
      </Flex>
    </Flipper>
  );
};
