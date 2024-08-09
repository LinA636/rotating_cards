import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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
      <Flex justifyContent="center" alignItems="center" gap={6}>
        {reorderedCards.map((card) => (
          <Flipped key={card.id} flipId={card.id} 
            spring={{
                stiffness: 80,
                damping: 20,
                overshootClamping: true,
            }} >
            <div >
              <ContentCard
                id={card.id}
                text={card.text}
                width={activeCard === card.id ? "300px" : "200px"}
                height={activeCard === card.id ? "400px" : "300px"}
                toggleFunction={() => toggleMoveCards(card.id)}
                opacity={activeCard === card.id ? 1 : 0.5}
              />
            </div>
          </Flipped>
        ))}
      </Flex>
    </Flipper>
  );
};
