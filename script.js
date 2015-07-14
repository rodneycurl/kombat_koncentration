$(document).ready(function(){
 checkingArray = [];
    var numFlipped = 0;
    $('div div').on("click",function(){
      if (!$(this).hasClass('flip')){
        $(this).addClass('flip')
        pickedCard = $(this).find("img.frontCard");
        CardValue = $(this).val();
        console.log(CardValue);
        pickedCard.attr("src", imageLibrary[CardValue])
        checkingArray.push($(this))
        console.log(checkingArray);
        numFlipped++;
        card1 = checkingArray[0];
        card2 = checkingArray[1];
      }
      else {
        console.log("already picked!")
      }
      cardMatching();
      cardNotMatching();
    })

function cardNotMatching(){
  if (numFlipped === 2){
    if(card1.val() != card2.val()) {
      setTimeout (
      function(){
      numFlipped = 0;
      $("div div").removeClass("flip");
      console.log(card1)
      card1.children().eq(0).attr("src", "images/Mortal_Kombat_Logo.png");
      card2.children().eq(0).attr("src", "images/Mortal_Kombat_Logo.png");
      checkingArray = [];
    },
    750);
    }
  }
}
function cardMatching(){
  if (numFlipped === 2){
    if(card1.val() === card2.val()){
    console.log("match")
    numFlipped = 0;
    checkingArray = [];
    }
  }
}

    var cardDeck = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];

    function shuffle(cardDeck){
      for(var j, x, i = cardDeck.length; i; j = Math.floor(Math.random() * i), x = cardDeck[--i], cardDeck[i] = cardDeck[j], cardDeck[j] = x);
      console.log(cardDeck);
    }
    shuffle(cardDeck);
    for (i = 0; i < cardDeck.length; i++) {
      $('div div').eq(i).val(cardDeck[i]);
    }
    var imageLibrary = {
      1: "images/ermac.png",
      2: "images/jax.png",
      3: "images/johnny_cage.png",
      4: "images/kano.png",
      5: "images/kenshi.png",
      6: "images/liu_kang.png",
      7: "images/quan_chi.png",
      8: "images/radien.png",
      9: "images/reptile.png",
      10: "images/scorpion.png",
      11: "images/sonya_blade.png",
      12: "images/sub_zero.png"
    }

    $("#reset").on("click", function (){
      $('div div').removeClass("flip");
      $("img.frontCard").attr("src", "images/Mortal_Kombat_Logo.png");
      shuffle(cardDeck);
      for (i = 0; i < cardDeck.length; i++) {
        $('div div').eq(i).val(cardDeck[i]);
      }
    });

    $("#background").on("click", function(){
      $("body").toggleClass("newBackground");
    });

});
