import React from 'react';
import { Grid } from '@chakra-ui/react';
import RotatingCardContainer3Cards from './Rotating cards horizontally/RotatingCardContainer3Cards';
import RotatingCardsContainerMoreThan3 from './Rotating cards horizontally/RotatingCardsContainerMoreThan3';
import ClickContainerCards from './Focused Card above unfocused Cards/ClickContainerCards';
import { useIsSmallDevice } from './from other code/theme/breakpoints';

const cardProps = [{
  title: "Wind",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod , sed do eiusmod , consectetur adipiscing elit, sed do eiusmod , sed do eiusmod    .`,
  src:'/public/wind-turbine.jpg',
  color: 'brand.midnightGreen.400',
  },{
      title: "PV",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.`,
      src: '/public/wind-turbine.jpg',
      color: 'brand.golden',
  },{
      title: "Pilotprojekte",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.`,
      src: '/public/wind-turbine.jpg',
      color: 'brand.sage',
  }, {
      title: "Test",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.`,
      src: '/public/wind-turbine.jpg',
      color: 'brand.sage',
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
    <Grid align="center" gap={'50px'}
      width={"100vw"}>
        <ClickContainerCards cards={cards} />
        <RotatingCardsContainerMoreThan3 cards={cards} />
        <RotatingCardContainer3Cards cards={cards} />
    </Grid>
  )
}

export default App
