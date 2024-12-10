import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import PerformanceCard from "../from other code/PerformanceCard";

const [focusedCardHeight, unfocusedCardHeight] = ['400px', '300px'];
const [focusedCardWidth, unsfocusedCardWidth] = ['300px', '200px'];


export default function RotatingCardContainer3Cards ({cards}) {
  const [focused, setFocused] = useState(0);

  if (cards.length !== 3) {
    throw new Error('This component only works with 3 cards');
  }

  const toggleMoveCards = (id) => {
    setFocused(id);
  };

  // create Card order
  const getOrderedCards = () => {
    if (focused === null) return cards;

    const focusedCardIndex = cards.findIndex((card) => card.id === focused);
    const reorderedCards = [
      cards[(focusedCardIndex + 1) % 3], // card before the active card
      cards[focusedCardIndex],           // active card
      cards[(focusedCardIndex + 2) % 3], // card after the active card
    ]

    return reorderedCards;
  };

  const reorderedCards = getOrderedCards();

  return (
    <Flipper flipKey={focused}>
      <Flex 
        justifyContent="space-evenly" 
        alignItems="center" 
        gap={100}
        position='relative'>
          {reorderedCards.map((card) => {
            const isFocused = (focused === card.id);
            return (
              <Flipped 
                key={card.id} 
                flipId={card.id} 
                spring={{
                    stiffness: 80,
                    damping: 20,
                    overshootClamping: true,}} >
                <Box 
                  position={isFocused? 'absolute' : 'relative'}
                  zIndex={isFocused ? 2 : 1}>
                    <PerformanceCard
                      id={card.id}
                      title={card.title}
                      description={isFocused ? card.description : undefined}
                      src={card.src}
                      color={card.color}
                      width={isFocused ? focusedCardWidth : unsfocusedCardWidth}
                      height={isFocused ? focusedCardHeight: unfocusedCardHeight}
                      variant={isFocused ? 'activeCard' : 'hiddenCard'}
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
