import { Flipped } from "react-flip-toolkit";
import PerformanceCard from "../from other code/PerformanceCard";

const createCardFlipId = index => `listItem-${index}`;

export default function FocusedListItem({ index, card, onClick }){
    return (
        <Flipped
            flipId={createCardFlipId(index)}
            stagger="card"
            onStart={el => {
                setTimeout(() => {
                el.classList.add("animated-in");
                }, 400);
            }}>

            <div className="focusedListItem" onClick={() => onClick(index)}>
                <Flipped inverseFlipId={createCardFlipId(index)}>
                    <div className="focusedListItemContent">
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
                            cardIndex={card.id}/>
                    </div>
                </Flipped>
            </div>
        </Flipped>
    );
}
