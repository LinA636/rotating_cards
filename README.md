# Rotating Cards
Using React, chakra-ui and react-flip-toolkit

to use this component you need to install [react-flip-toolkit](https://github.com/aholachek/react-flip-toolkit?tab=readme-ov-file#library-details):
$ npm install react-flip-toolkit

CardContainer: 
three cards are displayed. Two in the background and one in front centered of the other two.
When clicking one of the outer cards, all the cards rotate in a circle, so that the clicked card moves to the front.

![Screenshot 2024-10-29 082608](https://github.com/user-attachments/assets/e9242a07-f47a-438b-af32-ea3bbd5bd2f9)
![Screenshot 2024-10-29 082627](https://github.com/user-attachments/assets/eac037fc-55fe-4d63-a519-60ac0f77a519)


CardContainerMoreCards:
Same principle with more cards. And the active card is the biggest in the front to the left. each card further to the right gets smaller and more into the background.