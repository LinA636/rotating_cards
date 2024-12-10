import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import ContentCard from "./ContentCard";

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
      <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {focusedCard && (
            <ExpandedListItem
              index={focused}
              card={focusedCard}
              onClick={onClick}
            />
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${unfocusedCards.length}, 1fr)`, gap: '10px' }}>
          {unfocusedCards.map((card, index) => {
            return (
              <div key={card.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <ListItem index={index} card={card} onClick={onClick} />
              </div>
            );
          })}
        </div>
      </div>
    </Flipper>
  );
};

