$(document).ready(function(){
    $('div').on("click",function(){
      $(this).toggleClass('flip')
      var firstCard = $(this).find("img.backCard");
      console.log(firstCard);
      var firstCardValue = $(this).val();
      console.log(firstCardValue)
    firstCard.attr("src", imageLibrary[firstCardValue])
    });



    var cardDeck = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];

    function shuffle(cardDeck){
      for(var j, x, i = cardDeck.length; i; j = Math.floor(Math.random() * i), x = cardDeck[--i], cardDeck[i] = cardDeck[j], cardDeck[j] = x);
      console.log(cardDeck);
    }
    shuffle(cardDeck);
    for (i = 0; i < cardDeck.length; i++) {
      $(".flip-container").eq(i).val(cardDeck[i]);
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
