import { extendTheme } from "@chakra-ui/react"

/** config */
import { breakpoints } from "./from other code/theme/breakpoints";
import colors from './from other code/theme/colors';

/** textstyles */
import textStyles from "./from other code/theme/textStyles";

/** components */
import { cardTheme } from "./from other code/theme/card";

const theme = extendTheme({ 
  colors,
  components: {
    Text: textStyles,
    Card: cardTheme,
  },
  breakpoints,
    
})


export default theme;