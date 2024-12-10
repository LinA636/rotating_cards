/** Same Principle as CardContainer, only that this one can contain more than 3 cards.
 * The first card will be shown the biggest on the left side, and each card to the right will become smaller and smaller
 * ! Whenever you click the third card, the cards move in blocks and not seprately from each other.
 * -> looses the look of circling
 */

import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import PerformanceCard from "../from other code/PerformanceCard";



export default function RotatingCardsContainer({cards}) {
  const [cardOrder, setCardOrder] = useState(cards);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardsLength = cards.length;
  const focusedCardSize = { width: 300, height: 400 };
  
  const calculateSize = (origSize, index, isFocusedCard) => {
    const multiplierWidth = isFocusedCard? 1.5 : Math.pow(0.8, index);
    const multiplierHeight = isFocusedCard? 1.2 : Math.pow(0.8, index);
    const width = Math.round(parseInt(origSize.width, 10) * multiplierWidth);
    const height = Math.round(parseInt(origSize.height, 10) * multiplierHeight);
    return { width: `${width}px`, height: `${height}px` };
  };

  const getCardSize = (origSize, index) => {
    return calculateSize(origSize, index, index === 0);
  };

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
      await new Promise(resolve => setTimeout(resolve, 480));
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
          const isFocusedCard = index == 0;
          const {width, height} = getCardSize(focusedCardSize, index);
          return (
            <Flipped 
              key={card.id} 
              flipId={card.id}>
              <Box 
                position={"relative"}
                transform={isFocusedCard ? '' : `translateX(${index * -40}px)`}
                zIndex={cardsLength - index}
                transition="all linear">
                <PerformanceCard
                  id={card.id}
                  title={card.title}
                  description={isFocusedCard ? card.description : undefined}
                  src={card.src}
                  color={card.color}
                  width={width}
                  height={height}
                  variant={index === 0 ? 'activeCard' : 'hiddenCard'}
                  toggleFunction={() => handleCardClick(card.id)}
                  cardIndex={card.id}/>
              </Box>
            </Flipped>
          );
        })}
      </Flex>
    </Flipper>
  );
}