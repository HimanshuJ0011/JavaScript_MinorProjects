let matchcount=0;
var clickCount = 0;
        
var storage = [];
var randA = [];
var randCount = 0;

$(document).ready(function() {
  randomNumber();
  flipToggle();

});

function flipToggle() {

  $('.flip-container').click(function() {
   
    $('.flipper', this).addClass('flipped');

    storage[clickCount] = $(this).attr('id');

    clickCount++;

   

    if (clickCount > 1) {

      if (storage[0] == storage[1]) {
        clickCount = 0;
        storage = [];
        matchcount++;
        console.log(matchcount);
      
        return false;
        
      }
       
      else {

        setTimeout(function() {

          $('#' + storage[0] + " .flipper").removeClass('flipped');
          $('#' + storage[1] + " .flipper").removeClass('flipped');

          clickCount = 0;
          storage = [];
          return false;
        }, 1000);

        //$('#'+storage[1] + '.flipper').removeClass('flipped');

      }

    }
  });

}

function randomNumber() {
  $('.flip-container').each(function(index) {
    var randNum = Math.floor((Math.random() * 16) + 1);

    while (jQuery.inArray(randNum, randA) !== -1) {
      randNum = Math.floor((Math.random() * 16) + 1);
    }
    randA.push(randNum);

    if (randNum > 8) {
      var calcNum = randNum - 8;
    } else {
      var calcNum = randNum;
    }
    $(this).attr('id', 'a' + calcNum);
    $('.back', this).html(calcNum);

  });

}