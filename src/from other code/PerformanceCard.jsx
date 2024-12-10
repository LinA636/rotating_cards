/**Card displaying the service
 * Parameters:
 * title
 * description
 * src
 */

/** import from chakra-ui and react*/
import { Image, Card, CardHeader, CardBody} from '@chakra-ui/react'
import PropTypes from 'prop-types';
/** import own components */
import TitleAndText from './TitleAndText'; 
/** import texts */


const getCardHeaderHeight = (height, isFrontCard) => isFrontCard ? `calc(${height} * 0.24)` : `calc(${height} * 0.38)`;
const noOfLines = '2';

export default function PerformanceCard({id, title, description, src, color, width, height, toggleFunction, opacity, cardIndex}){
    const isFrontCard = cardIndex === 0;
    const headerHeight = getCardHeaderHeight(height, isFrontCard);
    const cardVariant = isFrontCard ? 'activeCard' : 'hiddenCard';
    
    return (
        <Card
            id={id}
            width={width}
            height={height}
            onClick={toggleFunction}
            opacity={opacity}
            
            direction={"column"}
            justify={"start"}
            align={"center"}
            overflow='hidden'
            variant='performanceCard'
            >
            <CardHeader 
                display={'flex'}
                direction={'column'}
                justify={'center'}
                alignItems={'center'}
                width={'100%'}
                height={headerHeight}
                background={color}
                >
                
                <TitleAndText 
                    title={title} 
                    variant={cardVariant}
                    noOfLines={noOfLines}/>
            </CardHeader>

            <CardBody
                flex={"1"} 
                overflow={"hidden"}
                width={"100%"}
                height={"100%"}
                
                display={isFrontCard ? 'grid' : ''}
                gridTemplateColumns={'2fr 3fr'}>

                { isFrontCard && (
                    <TitleAndText 
                    text={description} 
                    variant={cardVariant}
                    noOfLines={noOfLines}/>
                )}
                 
                <Image
                    objectFit='cover'
                    src={src}
                    width={"100%"}
                    height={"100%"}
                    alt="" // Indicates decorative image
                />
            </CardBody>
        </Card>
    );
}

PerformanceCard.propTypes = {                  
    id: PropTypes.number.isRequired, // card id
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    src: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired, 
    height: PropTypes.string.isRequired, 
    toggleFunction: PropTypes.func.isRequired, 
    opacity: PropTypes.number, // hidden card
    variant: PropTypes.string, // titleandtext variant
    cardIndex: PropTypes.number,
};