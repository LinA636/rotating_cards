/** Same Principle as CardContainer, only that this one can contain more than 3 cards.
 * The first card will be shown the biggest on the left side, and each card to the right will become smaller and smaller
 * ! Whenever you click the third card, the cards move in blocks and not seprately from each other.
 * -> looses the look of circling
 */


import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import ContentCard from "./ContentCard";

const cards = [{
    id: 1,
    text: "Card left",
},{
    id: 2,
    text: "Card front",
},{
    id: 3,
    text: "Card right",
},{
    id: 4,
    text: "4",
},{
  id: 5,
  text: "5",
}];

const cardsLength = cards.length;
const frontCardSize = { width: 300, height: 400 };

export default function RotatingCardsContainer() {
  const [cardOrder, setCardOrder] = useState(cards);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateOneStep = () => {
    setCardOrder(prev => [...prev.slice(1), prev[0]]);
  };

  const handleCardClick = async (id) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Berechne, wie oft rotiert werden muss
    const targetIndex = cardOrder.findIndex(card => card.id === id);
    
    // Führe die Rotationen sequentiell aus
    for (let i = 0; i < targetIndex; i++) {
      rotateOneStep();
      // Warte auf die Animation
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    setIsAnimating(false);
  };

  return (
    <Flipper 
      flipKey={cardOrder.map(card => card.id).join(',')}
      spring={{ stiffness: 80, damping: 20 }}>
      <Flex 
        justifyContent="center" 
        alignItems="center" 
        gap={5}
        position="relative">
        {cardOrder.map((card, index) => {
          const isActive = index === 0;
          const opacity = isActive ? 1 : index === 1 ? 0.75 : 0.5;

          return (
            <Flipped 
              key={card.id} 
              flipId={card.id}>
              <Box 
                position="relative"
                zIndex={cardsLength - index}
                transition="all linear">
                <ContentCard
                  id={card.id}
                  text={card.text}
                  width={frontCardSize.width/(index + 1)}
                  height={frontCardSize.height/(index + 1)}
                  toggleFunction={() => handleCardClick(card.id)}
                  fontSize={frontCardSize.width / (index + 1) * 0.1} 
                />
              </Box>
            </Flipped>
          );
        })}
      </Flex>
    </Flipper>
  );
}