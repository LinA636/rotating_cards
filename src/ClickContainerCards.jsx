import React, { Component } from "react";
import ReactDOM from "react-dom";
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
},];

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
      <div className="listItem" onClick={() => onClick(index)}>
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
      <div className="expandedListItem" onClick={() => onClick(index)}>
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

class ClickContainerCards extends Component {
  state = { focused: null };
  onClick = index =>
    this.setState({
      focused: this.state.focused === index ? null : index
    });
  render() {
    const { cards } = this.props;
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null
          }
        }}
        decisionData={this.state.focused}
      >
        <ul className="list" style={{padding: 0 }}>
          {cards.map((card, index) => {
            return (
              <li key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    card={card}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem index={index} card={card} onClick={this.onClick} />
                )}
              </li>
            );
          })}
        </ul>
      </Flipper>
    );
  }
}

export default ClickContainerCards;
