import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import ContentCard from "./ContentCard";
import { Flex, Grid } from "@chakra-ui/react";

const createCardFlipId = index => `listItem-${index}`;

const shouldFlip = index => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, card, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)} style={{ display: 'inline-block', margin: '0 10px', zIndex: 1 }}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <ContentCard
              id={card.id}
              text={card.text}
              width={300}
              height={400}
              toggleFunction={() => onClick(index)}
              fontSize={30}
            />
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, card, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={el => {
        setTimeout(() => {
          el.classList.add("animated-in");
        }, 400);
      }}
    >
      <div className="expandedListItem" onClick={() => onClick(index)} style={{ zIndex: 10 }}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="expandedListItemContent">
            <ContentCard
              id={card.id}
              text={card.text}
              width={600}
              height={800}
              toggleFunction={() => onClick(index)}
              fontSize={60}
            />
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

export default function ClickContainerCard ({ cards }) {
  const [focused, setFocused] = useState(0); // Set the first card as focused by default

  const onClick = index => {
    setFocused(index);
  };

  const focusedCard = focused !== null ? cards[focused] : null;
  const unfocusedCards = cards.filter((_, index) => index !== focused);

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
            gap = '20px'
            width='auto'
            justifyContent='start'
            gridTemplateAreas={`"header header header" "content1 content2 content3"`}>
        
        <Flex gridArea='header' justifyContent='center' alignItems='center'>
          {focusedCard && (
            <ExpandedListItem
              index={focused}
              card={focusedCard}
              onClick={onClick}
            />
          )}
        </Flex>

          {unfocusedCards.map((card, index) => {
            return (
              <Flex key={card.id} justifyContent='center'>
                <ListItem index={index} card={card} onClick={onClick} />
              </Flex>
            );
          })}
      </Grid>
    </Flipper>
  );
};

