 /** The Card component is a multipart component and consists of the following parts:
 * A: container
 * B: header
 * C: body
 * D: footer 
 * */

/** import from chakra-ui and react*/
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)


const variants = {
  performanceCard: definePartsStyle({
    container: {
      boxShadow: '2xl',
      _hover: {
          opacity: 1,
          boxShadow: 'lg',
          transform: 'scale(1.05)',
      }
    },
    header: {
      px: {base: '0.75rem', sm: '1.25rem', lg: '2.5rem', '2xl': '2.5rem'}, // base: '12px', sm: '20px', lg: '40px', '2xl': '40px'
      py: {base: '0.75rem', sm: '0.75rem', lg: '1.25rem', '2xl': '1.25rem'}, // base: '12px', sm: '12px', lg: '20px', '2xl': '20px'
    },
    body: {
      p: '0',
      borderRadius: 0,
    },
    footer: {

    },
  }), 

  profileCard: definePartsStyle({
    container: {
      gap: '1.25rem', // 20px
      border:'none',
      m:'1.25rem', // 20px
      p:'0.25rem', // 4px

    },
    header: {
      p:'0',
      width: 'fit-content',

    },
    body: {
      display: 'flex',
      align: 'center',

    },
    footer: {

    },
  }),

  indexCard: definePartsStyle({
    container: {
      justify: 'center',
      align: 'center',
      gap: '0.5rem', // 4 = 8px
      border:'none',
      m:'1.25rem', // '20px'
      p:'0.75rem', // '12px'
      minH: { base: "30px", sm: "65px" },
      marginY: { base: "0.25rem", sm: "0.5rem" , lg: "1rem" },
    },
    header: {
      p:'0',
      color:'brand.golden',

    },
    body: {
      p:'0',
      display: 'flex',
      align: 'center',

    },
    footer: {

    },
  })
}

export const performanceCardDimensions = {
  width: {
    base: '80px',
    sm: '100px',
    md: '220px', 
    lg: '260px',
    xl: '300px',
  },
  height: {
    base: '101px',
    sm: '153px',
    md: '280px',
    lg: '331px',
    xl: '382px',
  },
  gap: {
    base: 0,
    sm: 0,
    md: 0.05,
    xl: 0.02,
  },
  translateFactorHiddenCards: {
    base: '5px',
    md: '15px',
    xl: '20px',

  },
  translateFactorCardBlock: {
    base: '15px',
    sm: '20px',
    md: '30px',
    lg: '45px',
    xl: '65px'
  },
};

export const cardTheme = defineMultiStyleConfig({ variants })