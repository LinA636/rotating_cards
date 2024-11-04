import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Flipper, Flipped } from "react-flip-toolkit";


const listData = [...Array(7).keys()]; // dient als Basis für die Karten
const createCardFlipId = index => `listItem-${index}`; // eindeutige Flip-Id, die auf basis des Kartenindexes generiert wird

const shouldFlip = index => (prev, current) =>
  index === prev || index === current;


// Kartenkomponenten
// ListItem stellt standardmäßige Kartenansicht dar.
const ListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <div className="avatar" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={createCardFlipId(index)}
                >
                  <div />
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};
// zeigt die erweitere Ansicht der Karte an, wenn sie angeklickt wird
const ExpandedListItem = ({ index, onClick }) => {
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
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}
            >
              <div className="avatar avatarExpanded" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  delayUntil={createCardFlipId(index)}
                >
                  <div />
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {listData.slice(0, 3).map(i => (
                <div />
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

class GrowingCardsContainer extends Component {
    state = { focused: null };
    onClick = index =>
      this.setState({
        focused: this.state.focused === index ? null : index
      });
    render() {
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
          <ul className="list">
            {listData.map(index => {
              return (
                <li key={index}>
                  {index === this.state.focused ? (
                    <ExpandedListItem
                      index={this.state.focused}
                      onClick={this.onClick}
                    />
                  ) : (
                    <ListItem index={index} key={index} onClick={this.onClick} />
                  )}
                </li>
              );
            })}
          </ul>
        </Flipper>
      );
    }
  }

  export default GrowingCardsContainer; // Exporte die AnimatedList-Komponente