import React from 'react';
import { Box } from '@chakra-ui/react';
import RotatingCardContainer3Cards from './RotatingCardContainer3Cards';
import RotatingCardsContainerMoreThan3 from './RotatingCardsContainerMoreThan3';
import ClickContainerCards from './ClickContainerCards';
import { useIsSmallDevice } from './breakpoints';

const cardProps = [{
  title: "Wind",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod , sed do eiusmod , consectetur adipiscing elit, sed do eiusmod , sed do eiusmod    .`,
  src:'/public/wind-turbine.jpg',
  color: '#B88700',
  },{
      title: "PV",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.`,
      src: '/public/wind-turbine.jpg',
      color: '#B88700',
  },{
      title: "Pilotprojekte",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.`,
      src: '/public/wind-turbine.jpg',
      color: '#B88700',
  }, {
      title: "Test",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.`,
      src: '/public/wind-turbine.jpg',
      color: '#B88700',
  },
]

function App() {
  //const isSmallDevice = useIsSmallDevice('md');

  const cards = Object.entries(cardProps).map(([, { title, description, src, color }], index) => ({
    id: index,
    title,
    description,
    src,
    color,
  }));

  return (
    <Box align="center"
      width={"100vw"}>
        <ClickContainerCards cards={cards} />
    </Box>
  )
}

export default App
