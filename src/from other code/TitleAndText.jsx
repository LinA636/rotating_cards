/*Creates a component consiting of a title and a text.
Both being transferred as parameters.
Title and Text are centered.
You can specify the textMaxWidth of the component 
variant defines the different textStyle that should be applied.
If TitleAndText is part of a Flex-Parent, you can set flex=1 for equal space taking.
noOfLines lets you define how many lines of the text should be shown.*/

/** import from chakra-ui and react*/
import { Heading, Text, Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types';
/** import own components */
import useMakeTextBold from './useMakeTextBold';
/** import styles */
import titleAndTextStyles from './theme/titleAndText';

export default function TitleAndText({
  as = 'h3', 
  title, 
  text, 
  textAlign = 'center', 
  textMaxWidth, 
  textMinHeight, 
  noOfLines, 
  variant = 'h3', 
  flex, 
  flexAlign = 'center'
}) {
  const { base: baseStyles, variants } = titleAndTextStyles;
  const variantStyles = variants[variant];
  const scale = variantStyles.scale || 1;

  const boldedText = useMakeTextBold(text);

  return (
    <Flex 
      className="titleAndText"
      flex={flex}
      direction="column" 
      align={flexAlign}
      justify="center"
      width="100%"
      height="fit-content"
      {...baseStyles}
    >
      {title && (
        <Heading
          as={as}
          textAlign={textAlign}
          transform={`scale(${scale})`}
          transition="transform 0.3s ease"
          {...variantStyles.titleStyle}
        >
          {title}
        </Heading>
      )}
      {text && (
        <Text 
          textAlign={textAlign}
          minH={textMinHeight}
          maxW={textMaxWidth}
          w={'100%'}
          whiteSpace="pre-wrap"
          noOfLines={noOfLines}
          overflow="hidden"  
          textOverflow="ellipsis" 
          transform={`scale(${scale})`}
          transition="transform 0.3s ease"
          {...variantStyles.textStyle}
        >
          {boldedText}
        </Text>
      )}
    </Flex>
  );
}

TitleAndText.propTypes = {
  as: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  textMinHeight: PropTypes.string,
  textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  textMaxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  noOfLines: PropTypes.string,
  variant: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};