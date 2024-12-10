import textStyles from './textStyles';


const titleAndTextStyles = {
    base: {
        py: {base: 2, sm: 2, md: 3, lg: 4, xl: 4},
        gap: {base: 2, sm: 2, md: 3, lg: 4, xl: 4},
    },
    variants: {
        h1: { /** h1 */
            titleStyle: textStyles.variants.h1,
            textStyle: textStyles.variants.biggerText,
        },
        h3: { /** h3 */
            titleStyle: textStyles.variants.h3,
            textStyle: textStyles.variants.defaultText,
        },
        h4: {
            titleStyle: textStyles.variants.h4,
            textStyle: textStyles.variants.defaultText,
        },
        activeCard: {
            titleStyle: textStyles.variants.cardTitle,
            textStyle: textStyles.variants.cardDefaultText,
        },
        hiddenCard: {
            titleStyle: textStyles.variants.hiddenCardTitle,
            textStyle: textStyles.variants.hiddenCardDefaultText,
        },
        slogan: {
            titleStyle: textStyles.variants.slogan,
            textStyle: textStyles.variants.defaultText,
        }
    }
}

export default titleAndTextStyles;