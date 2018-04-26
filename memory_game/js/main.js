 var cards = [
 {
 rank : "queen",
 suit : "hearts",
 cardImage : "img/queen-of-hearts.png"
 },
 {
 rank : "queen",
 suit : "diamonds",
 cardImage : "img/queen-of-diamonds.png"
 },
 {
 rank : "king",
 suit : "hearts",
 cardImage : "img/king-of-hearts.png"
 },
 {
 rank : "king",
 suit : "diamonds",
 cardImage : "img/king-of-diamonds.png"
 }
];
 var cardsInPlay = []
 var checkForMatch = function(){ 
 	cardImage.setAttribute('src', cardImage[i])
 	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
  } else {
console.log("Sorry, try again.");
  };
};
 var flipCard = function(){
     var cardId = this.getAttribute(cards)
 	cardsInPlay.push(cards[cardId].rank);
    
 	/*console.log("User flipped" + cards[0].rank);
 	console.log(cards[0].cardImage);
 	console.log(cards[0].suit);
 	checkForMatch()*/
 };

 var createBoard = function(){
 	for(var i = 0; i < cards.length; i++){
       var cardElement = document.createElement('img');
       cardElement.setAttribute('src', 'img/back.png');
       cardElement.setAttribute('cards',[i]);
       cardElement.addEventListener('click',flipCard)
       document.getElementById('game-board').appendChild(cardElement)
 	};
 };
 
	if(cardsInPlay.length === 2){
 		if(cardsInPlay[0]=== cardsInPlay[2]){
 		alert('You found a match')
 	   }else{
 		alert('Sorry try again later')
 	};	
 };


createBoard();
 	
