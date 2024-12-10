import React, { useState } from "react";
import { Flipper } from "react-flip-toolkit";
import { Flex, Grid } from "@chakra-ui/react";
import FocusedListItem from "./FocusedListItem";
import UnfocusedListItem from "./UnfocusedListItem";


export default function ClickContainerCard({ cards }) {
  const [focused, setFocused] = useState(0); // Set the first card as focused by default

  const onClick = index => {
    setFocused(index);
  };

  const focusedCard = focused !== null ? cards[focused] : null;
  const unfocusedCards = cards.filter((_, index) => index !== focused);

  console.log('focusedCard', focusedCard);
  console.log('unfocusedCards', unfocusedCards);
  return (
    <Flipper
      flipKey={focused}
      className="staggered-list-content"
      spring="gentle"
      staggerConfig={{
        card: {
          reverse: focused !== null
        }
      }}
      decisionData={focused}
    >
      <Grid gridTemplateRows={'1fr 1fr'} 
            gridTemplateColumns={'1fr 1fr 1fr'}
            gap='20px'
            width='auto'
            justifyContent='start'
            gridTemplateAreas={`"header header header" "content1 content2 content3"`}>
        
        <Flex gridArea='header' justifyContent='center' alignItems='center'>
          {focusedCard && (
            <FocusedListItem
              index={focused}
              card={focusedCard}
              onClick={onClick}
            />
          )}
        </Flex>

        {unfocusedCards.map((card, index) => {
          return (
            <Flex key={card.id} justifyContent='center'>
              <UnfocusedListItem 
                index={index} 
                card={card} 
                onClick={onClick} />
            </Flex>
          );
        })}
      </Grid>
    </Flipper>
  );
};

