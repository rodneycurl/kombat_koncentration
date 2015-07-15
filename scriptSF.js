$(document).ready(function(){
//set the document so that it is ready for JQuery
checkingArray = [];
//set checking array as a global variable so that multiple functions can access it
var numFlipped = 0;
//set click counter to 0 to track clicks
$('div div').on("click",function(){
//on click I am targeting the div front inside my div flip container
  if (!$(this).hasClass('flip')){
//checking to see that the div I clicked does not also have the class flip
    $(this).addClass('flip')
//since class flip is not there I add class flip
      pickedCard = $(this).find("img.frontCard");
//set a variable that equals the img part of my div front
      CardValue = $(this).val();
//set a variable that gets the value of the card
      console.log(CardValue);
      pickedCard.attr("src", imageLibrary[CardValue])
//take the image from my library and iterate it over the card to add a new image
      checkingArray.push($(this))
//push the card I selected with all of its properties into an array for comparison
      numFlipped++;
//increase the counter
      card1 = checkingArray[0];
//set the first card selected as first number in the array
      card2 = checkingArray[1];
//set the second card selected as the second number in the array
}
  else {
      console.log("already picked!")
//if the card already contains the class flip it should not change
}
      cardMatching();
      cardNotMatching();
//set up two functions to determine is a card is matching or is not matching and calling these functions
})

function cardNotMatching(){
  if (numFlipped === 2){
    if(card1.val() != card2.val()) {
//setting up nested if statements to determine if the counter is two meaning two values are in the array and the compared values do not equal each other
      setTimeout (
//set a timeout function to reset the cards if the match is not made set it to a half second
      function(){
      numFlipped = 0;
//if no match I reset the counter
      $("div div").removeClass("flip");
//I removed the added class
      card1.children().eq(0).attr("src", "imagesSF/Street_Fighter_Logo.jpg");
//I change the image that is shown back to the orginial image in the HTML this occurs by targeting the child within the div I am selecting since that child has the image in it and the div is not the image
      card2.children().eq(0).attr("src", "imagesSF/Street_Fighter_Logo.jpg");
//I change the image for the second card as well
      checkingArray = [];
//The array is emptied in order to start the array over when new clicks occur
    },
    500);
    }
  }
}
function cardMatching(){
  if (numFlipped === 2){
    if(card1.val() === card2.val()){
//if the cards are matched this function will run and both new images will still be shown
    console.log("match!")
    numFlipped = 0;
//the counter is set back to 0
    checkingArray = [];
//the array is emptied to start the array over for new clicks to occur
    }
  }
}

    var cardDeck = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
//set up a deck which assigns each image into two places
  function shuffle(cardDeck){
    for(var j, x, i = cardDeck.length; i; j = Math.floor(Math.random() * i), x = cardDeck[--i], cardDeck[i] = cardDeck[j], cardDeck[j] = x);
    console.log(cardDeck);
}
//shuffle function allows for deck randomization each time the page is loaded
    shuffle(cardDeck);
//call for the deck to be shuffled which arranges the arrays values randomly
  for (i = 0; i < cardDeck.length; i++) {
      $('div div').eq(i).val(cardDeck[i]);
}
//create a look that iterates the random values throughout the div front
    var imageLibrary = {
      1: "imagesSF/cammy.jpeg",
      2: "imagesSF/chun_li.jpeg",
      3: "imagesSF/dan.jpeg",
      4: "imagesSF/ken.jpg",
      5: "imagesSF/ryu.jpeg"
    }
//images correspond to the random values assigned in the div front
    $("#reset").on("click", function (){
      $('div div').removeClass("flip");
      $("img.frontCard").attr("src", "imagesSF/Street_Fighter_Logo.jpg");
      shuffle(cardDeck);
      for (i = 0; i < cardDeck.length; i++) {
        $('div div').eq(i).val(cardDeck[i]);
      }
    });
//creates an on click element that reshuffles the deck and resets all of the logos to their originial state while also removing the class flip which clears the board and puts new images in
    $("#background").on("click", function(){
      $("body").toggleClass("newBackground");
    });
//set an on click toggle function that allows different backgrounds to be used in the game
    $("#deck").on('click', function(){
     window.location = "index.html";
    });
});
