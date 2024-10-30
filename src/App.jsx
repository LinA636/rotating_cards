import React from 'react';
import { Box } from '@chakra-ui/react';
import RotatingCardContainer3Cards from './RotatingCardContainer3Cards';
import RotatingCardsContainerMoreThan3 from './RotatingCardsContainerMoreThan3';

function App() {
  return (
    <Box align="center"
      width={"100vw"}>
      <RotatingCardsContainerMoreThan3/>
    </Box>
  )
}

export default App
