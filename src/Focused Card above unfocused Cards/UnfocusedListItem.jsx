import { Flipped } from "react-flip-toolkit";
import PerformanceCard from "../from other code/PerformanceCard";

const createCardFlipId = index => `listItem-${index}`;

const shouldFlip = index => (prev, current) =>
    index === prev || index === current;

export default function UnfocusedListItem({ index, card, onClick }){
    return (
        <Flipped
            flipId={createCardFlipId(index)}
            stagger="card"
            shouldInvert={shouldFlip(index)}>

            <div className="listItem" onClick={() => onClick(index)}>
                <Flipped inverseFlipId={createCardFlipId(index)}>
                    <div className="listItemContent">
                        <PerformanceCard
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        src={card.src}
                        color={card.color}
                        width={'300'}
                        height={'400'}
                        variant={index === 0 ? 'activeCard' : 'hiddenCard'}
                        toggleFunction={() => onClick(index)}
                        cardIndex={card.id}
                        />
                    </div>
                </Flipped>
            </div>
        </Flipped>
    );
}
