import React from 'react';
import { Box } from '@chakra-ui/react';
import RotatingCardContainer3Cards from './RotatingCardContainer3Cards';
import RotatingCardsContainerMoreThan3 from './RotatingCardsContainerMoreThan3';
import ClickContainerCards from './ClickContainerCards';
import { useIsSmallDevice } from './breakpoints';

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
}];

function App() {
  //const isSmallDevice = useIsSmallDevice('md');

  return (
    <Box align="center"
      width={"100vw"}>
        <ClickContainerCards cards={cards} />
    </Box>
  )
}

export default App
