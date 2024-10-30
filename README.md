# Rotating Cards
Using React, chakra-ui and react-flip-toolkit

to use this component you need to install [react-flip-toolkit](https://github.com/aholachek/react-flip-toolkit?tab=readme-ov-file#library-details):
$ npm install react-flip-toolkit

CardContainer: 
three cards are displayed. Two in the background and one in front centered of the other two.
When clicking one of the outer cards, all the cards rotate in a circle, so that the clicked card moves to the front.

CardContainerMoreCards:
Same principle with more cards. And the active card is the biggest in the front to the left. each card further to the right gets smaller and more into the background.