import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
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
      <Flex justifyContent="center" 
        alignItems="center" 
        gap={6}
        position="relative">
            {reorderedCards.map((card) => {
                const isMiddle = (activeCard === card.id);

                // Define styles for the cards
                const cardStyles = {
                    opacity: isMiddle ? 1 : 0.5,
                    position: isMiddle ? "absolute" : "relative",
                    zIndex: isMiddle ? 2 : 1, // Middle card is in front
                    transform: isMiddle ? "scale(1)" : "scale(0.8)", // Scale down outer cards
                    transition: "transform 0.5s ease, opacity 0.5s ease",
                    margin: isMiddle ? "0" : "0 50px", // Add margin to make space for the middle card
                };

                return (
                    <Flipped key={card.id} 
                            flipId={card.id} 
                            spring={{
                                stiffness: 80,
                                damping: 20,
                                overshootClamping: true,
                        }}>
                        
                            <ContentCard
                                id={card.id}
                                text={card.text}
                                width={isMiddle ? "300px" : "300px"}
                                height={isMiddle ? "400px" : "400px"}
                                toggleFunction={() => toggleMoveCards(card.id)}
                                opacity={cardStyles.opacity}
                                position={cardStyles.position} // Position the cards absolutely within the Flex container
                                zIndex={cardStyles.zIndex}  // Bring the middle card forward
                                transform={cardStyles.transform} // Shrink and move outer cards
                                transition={cardStyles.transform}
                            />
                        
                    </Flipped>
                );
            })}
      </Flex>
    </Flipper>
  );
};
