import colors from "./colors";

const FONT_WEIGHT = {
    BOLD: 'bold',
    SEMI: 600,
    NORMAL: 'normal',
};

const generateFontSize = (base, sm, md, lg, xl, xxl) => ({
    base, sm, md, lg, xl, '2xl': xxl
});

const generateTextStyle = (fontSize, fontWeight, color) => ({
    fontSize, fontWeight, color
});

export const headingSizes = {
    h1: { fontSize: "3rem" }, // 48px
    h2: { fontSize: "2.25rem" }, // 36px
    h3: { fontSize: "1.875rem" }, // 30px
    h4: { fontSize: "1.5rem" },// 24px
    h5: { fontSize: "1.25rem" }, // 20px
    h6: { fontSize: "1.125rem" }, // 18px
};

export const textStyles = {
    variants: {
        // logo styles
        h1: generateTextStyle(generateFontSize('3rem', '3rem', '3.75rem', '4.375rem', '4.375rem', '5rem'), FONT_WEIGHT.BOLD),
        h1_watthoch: generateTextStyle(generateFontSize('3rem', '3rem', '3.75rem', '4.375rem', '4.375rem', '5rem'), FONT_WEIGHT.BOLD, colors.brand.midnightGreen[400]),
        h1_2: generateTextStyle(generateFontSize('3rem', '3rem', '3.75rem', '4.375rem', '4.375rem', '5rem'), FONT_WEIGHT.BOLD, colors.brand.golden),
        slogan: generateTextStyle(generateFontSize('1.875rem', '1.875rem', '2.5rem', '2.5rem', '2.5rem', '2.5rem'), FONT_WEIGHT.BOLD, colors.brand.midnightGreen[400]),
        // link styles
        link: generateTextStyle(generateFontSize('1rem', '1rem', '1.125rem', '1.5rem', '1.875rem', '1.875rem'), FONT_WEIGHT.NORMAL),
        // title styles
        h2: generateTextStyle(generateFontSize('2.25rem', '2.25rem', '3.125rem', '3.75rem', '3.75rem', '4.375rem'), FONT_WEIGHT.BOLD),
        h3: generateTextStyle(generateFontSize('1.875rem', '1.875rem', '2.5rem', '3.125rem', '3.125rem', '3.75rem'), FONT_WEIGHT.SEMI),
        h4: generateTextStyle(generateFontSize('1.5rem', '1.5rem', '1.875rem', '1.875rem', '2.5rem', '3.125rem'), FONT_WEIGHT.SEMI),
        // body text styles
        biggerText: generateTextStyle(generateFontSize('1.125rem', '1.25rem', '1.5rem', '1.5rem', '1.5rem', '1.5rem'), FONT_WEIGHT.NORMAL),
        defaultText: generateTextStyle(generateFontSize('1rem', '1.125rem', '1.125rem', '1.25rem', '1.25rem', '1.25rem'), FONT_WEIGHT.NORMAL),
        smallerText: generateTextStyle(generateFontSize('0.875rem', '1rem', '1rem', '0.75rem', '0.75rem', '1rem'), FONT_WEIGHT.NORMAL),
        boldColoredText: generateTextStyle(generateFontSize('1rem', '1.125rem', '1.125rem', '1.25rem', '1.25rem', '1.25rem'), FONT_WEIGHT.SEMI, 'brand.golden'),
        // card styles
        cardTitle: generateTextStyle(generateFontSize('1.25rem', '1.5rem', null, '1.875rem', null, '2.5rem'), FONT_WEIGHT.SEMI),
        cardDefaultText: generateTextStyle(generateFontSize('1rem', '1.125rem', '1.125rem', '1.25rem', '1.25rem', '1.25rem'), FONT_WEIGHT.NORMAL),
        hiddenCardTitle: generateTextStyle(generateFontSize('1.125rem', '1rem', '1.25rem', '1.5rem', '1.5rem', '1.5rem'), FONT_WEIGHT.SEMI),
        hiddenCardDefaultText: generateTextStyle(generateFontSize('0.875rem', '0.875rem', '1rem', '1.125rem', '1.125rem', '1.125rem'), FONT_WEIGHT.NORMAL),
        // index number styles
        indexNumber: generateTextStyle(generateFontSize('1.5rem', '1.875rem', null, '2.5rem', null, '3.125rem'), FONT_WEIGHT.SEMI, null, '2.4rem'),
        // accordion text styles
        questions: generateTextStyle(generateFontSize('1.25rem', '1.5rem', '1.875rem', '1.875rem', '2.5rem', '2.5rem'), FONT_WEIGHT.NORMAL),
        bulletPoints: generateTextStyle(generateFontSize('1rem', '1.125rem', '1.125rem', '1.25rem', '1.25rem', '1.25rem'), FONT_WEIGHT.NORMAL),
    },
};

export default textStyles;