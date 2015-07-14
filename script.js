$(document).ready(function(){
 var checkingArray = [];
    var numFlipped = 0;
    $('div div').on("click",function(){
      if (!$(this).hasClass('flip')){
        $(this).addClass('flip')
        pickedCard = $(this).find("img.frontCard");
        CardValue = $(this).val();
        console.log(CardValue);
        pickedCard.attr("src", imageLibrary[CardValue])
        checkingArray.push(CardValue)
        console.log(checkingArray);
        numFlipped++;
        console.log(numFlipped)
      }
      else {
        console.log("already picked!")
      }
      cardMatching();
    })


function cardMatching(){
  if (numFlipped === 2 && checkingArray[0] === checkingArray[1]) {
    console.log("match")
  }
  else{
    console.log("not yet")
  }
}
//   if (CardValue === $("div.flip-container.flip").val())
//   console.log("match made")
//   // pickedCard.hide();
//   // pickedCard1.hide();
// }
// // else {
// //   pickedCard.removeClass('flip');
// //   pickedCard1.removeClass('flip');
// // }
// // };
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
      $('.flip-container').removeClass("flip");
    });

    $("#background").on("click", function(){
      $("body").css("background", "url(images/MK_background_coliseum.jpg)");
    });

});
