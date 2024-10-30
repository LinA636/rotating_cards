/** Same Principle as CardContainer, only that this one can contain more than 3 cards.
 * The first card will be shown the biggest on the left side, and each card to the right will become smaller and smaller
 */


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
    },{
        id: "4",
        text: "4",
    }];
const cardsLength = cards.length;

const frontCardSize = { width: 300, height: 400 };

export default function CardContainerMoreCards () {
  const [activeCard, setActiveCard] = useState('front');

  const toggleMoveCards = (id) => {
    setActiveCard(id);
  };

  // create Card order
  const getOrderedCards = () => {
    if (activeCard === null) return cards;

    const activeIndex = cards.findIndex((card) => card.id === activeCard);
    // Map through indices starting from activeIndex
    return cards.map((_, i) => cards[(activeIndex + i) % cardsLength]);
  };

  const reorderedCards = getOrderedCards();

  return (
    <Flipper flipKey={activeCard}>
      <Flex 
        justifyContent="center" 
        alignItems="center" 
        gap={5}
        position='relative'>
          {reorderedCards.map((card, index) => {
            const isActive = (index === 0);
            // Determine size based on position
            const opacity = index === 0 ? 1 : index === 1 ? 0.75 : 0.5;
            return (
              <Flipped 
                key={card.id} 
                flipId={card.id} 
                spring={{
                    stiffness: 80,
                    damping: 20,
                    overshootClamping: true,}} >
                <Box 
                  position={'relative'}
                  zIndex={isActive ? 2 : 1}
                  >
                    <ContentCard
                      id={card.id}
                      text={card.text}
                      width={frontCardSize.width/(index+1)}
                      height={frontCardSize.height/(index+1)}
                      toggleFunction={() => toggleMoveCards(card.id)}
                      opacity={opacity}
                      />
                </Box>
              </Flipped>
            );
        })}
      </Flex>
    </Flipper>
  );
};
