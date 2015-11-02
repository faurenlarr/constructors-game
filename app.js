// var resetButton = document.getElementbyId('resetButton');
// resetButton.onclick= reloadPage;
//
// function reloadPage(){
//    window.location.reload();
// }


$(document).ready(function(){


var clicks = 0;
var player;
var sandra = new Housewife({name: "Sandra", age: 38, kids: "2 kids", points: 10, image: "http://hate.it/site/assets/files/4464/kim-kardashian2.710x0d0x0.jpg" });
var patricia = new Housewife({name: "Patricia", age: 47, kids: "1 kid", points: 10, job: "Mary-Kay sales rep", image: "http://hellogiggles.hellogiggles.netdna-cdn.com/wp-content/uploads/2014/06/23/picture-of-amy-poehler-as-mrs-george-in-mean-girls.jpg"});
var janet = new Housewife({name: "Janet", age: 30, kids: "6 kids", job: "secretary", points:10, image: "http://i.dailymail.co.uk/i/pix/2010/04/28/article-1269642-09552748000005DC-674_224x300.jpg"});

var pizza = new WhatsForDinner({name: "pizza", title:"pizza!", temp: "warm", howold: "fresh", points: 15, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var leftovers = new WhatsForDinner({name: "leftovers", title: "leftovers", temp:" cold of course", howold:"kinda old...", points: -5 , image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var vegetables = new WhatsForDinner ({name: "veg", title: "Healthy greens", points: 5, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

var vacuum = new HouseHoldWeapon({name: "vacuum", title: "vacuum", points: 10, image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var swiffer = new HouseHoldWeapon({name: "swiffer",  title: "Swiffer", points: 15, image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var mop = new HouseHoldWeapon({name: "mop", title: "smelly mop",points: -5, image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

var tequila = new DrinkOfChoice({name: "tequila", title: "tequila shots!",points: 10, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var wine = new DrinkOfChoice({name: "wine", title: "pinot grigio",points: 10, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var cosmo = new DrinkOfChoice({name: "cosmo", title: "basic bitch drink",points: 5, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var water = new DrinkOfChoice({name: "water", title: "water",points: -5, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});


var becky = new Nanny({name: "becky",title: "Hot Becky", points: 8, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png", image2: "http://i684.photobucket.com/albums/vv207/BeckSpeck/pretty-girl-alexis-dziena_1024x768.jpg" });
var crystal = new Nanny({name: "crystal", title: "ex-stripper Crystal", points: 6, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var martha = new Nanny({name: "martha",title: "Martha", points: 2, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

//var goodoutcome = new OutCome ({title: "good outcome", content:"this is good", image: " "});
//var badoutcome = new OutCome ({title: "bad outcome", image: " ", content: "Bummer! You lose your pharmaceutical prescription. Better luck next time."});
//

$('body').on('click', '.demo-card-image', function(){
  clicks++;
} );

// when clicks === 5 ....



function Housewife(options) {
  this.name = options.name || "middle-aged housewife";
  this.age = options.age || "old as shit";
  this.kids = options.kids || "2 kids";
  this.job = options.job || "home-maker";
  this.points = options.points || 0;
  this.image = options.image ;
 $("#people").append(housewifeTemplate(this));
  if (this.points < 5) {
    console.log("BITCH DEAD");
  }
}

function WhatsForDinner(options) {
  this.name = options.name || "mystery meat";
  this.temp = options.temperature || "luke-warm";
  this.howold = options.howold || "moldy";
  this.points = options.points || 5;
  this.image = options.image;
  this.title = options.title;
  $("#food").append(foodTemplate(this));
  if (this.points < 5) {
    console.log("BITCH DEAD");
  }
  this.usetoFeed = function(housewife) {
    return (housewife.points = (housewife.points + this.points));

  };


}


function HouseHoldWeapon(options){
  this.name = options.name || "broom";
  this.points = options.points || 10;
  this.image = options.image;
  this.title = options.title;
  $("#weapon").append(weaponTemplate(this));
  if (this.points < 5) {
    console.log("BITCH DEAD");
  }
  this.usetoClean = function(housewife) {
    return (housewife.points = (housewife.points + this.points));
  };
}

function DrinkOfChoice(options){
  this.name = options.name || "EverClear";
  this.points = options.points || 0;
  this.title = options.title;
  this.image = options.image;
  $("#drink").append(drinkTemplate(this));
  if (this.points < 5) {
    console.log("BITCH DEAD");
  }
  this.drinktoForget = function(housewife) {
  (housewife.points = (housewife.points + this.points));
    // if (housewife.points > 50) {
    //   console.log('you doin okay');
    // }
    return housewife.points;
  };

}

function Nanny(options) {
  this.name = options.name;
  this.title = options.title || "Girl Next Door";
  this.image = options.image;
  this.points = options.points || 10;
  this.image2= options.image2;
  $("#nanny").append(nannyTemplate(this));

  this.useHotness = function(housewife) {
    housewife.points = (housewife.points - this.points);
    if(housewife.points < 5) {
      console.log('BITCH DEAD');}
return housewife.points;
  };
}



$('.page1').on('click', 'button',function(){
  $('.infopage').removeClass('hidden');
  $('.page1').addClass('hidden');
  $('.page2').addClass('hidden');
});

$('.start').on('click', function (){
$('.infopage').addClass('hidden');
$('.page2').removeClass('hidden');
$('.page3').addClass('hidden');

});
// $('.playagain').on('click', function (){
//   $('.page1').removeClass('hidden');
//   $('.page2').addClass('hidden');
//   $('.page3').addClass('hidden');
// });

// page 2

$('#Sandra').on('click', function (){       //housewives clicks
$('#Patricia').addClass('hidden');
$('#Janet').addClass('hidden');
  player = sandra;
  $('.info').append(sandrainfo);

});
$('#Patricia').on('click', function (){
  $('#Sandra').addClass('hidden');
  $('#Janet').addClass('hidden');
    player= patricia;
    $('.info').append(patriciainfo);

});
$('#Janet').on('click', function (){
  $('#Sandra').addClass('hidden');
  $('#Patricia').addClass('hidden');
    player= janet;
    $('.info').append(janetinfo);
});

$('#pizza').on('click', function (){
  $('#veg').addClass('hidden');
  $('#leftovers').addClass('hidden');
  player.points += pizza.points;
  $("#food").append(pizzainfo);       //food clicks

});
$('#leftovers').on('click', function (){
  $('#veg').addClass('hidden');
  $('#pizza').addClass('hidden');
  player.points += leftovers.points;
  $("#food").append(leftoversinfo);
});
$('#veg').on('click', function (){
  $('#pizza').addClass('hidden');
  $('#leftovers').addClass('hidden');
  player.points += vegetables.points;
  $("#food").append(veginfo);
});

$('#vacuum').on('click', function (){
  $('#mop').addClass('hidden');
  $('#swiffer').addClass('hidden');   //weapon clicks
  player.points += vacuum.points;
    $("#weapon").append(vacuuminfo);

});
$('#swiffer').on('click', function (){
  $('#mop').addClass('hidden');
  $('#vacuum').addClass('hidden');
  player.points += swiffer.points;
    $("#weapon").append(swifferinfo);
});
$('#mop').on('click', function (){
  $('#swiffer').addClass('hidden');
  $('#vacuum').addClass('hidden');
  player.points += mop.points;
    $("#weapon").append(mopinfo);
});


//
$('.page2').on('click', '#nextpage', function (){     // to to go next page
$('.page2').addClass('hidden');
  $('.page3').removeClass('hidden');
});


//page 3
$('#becky').on('click', function (){     // nanny clicks
$('#crystal').addClass('hidden');
  $('#martha').addClass('hidden');
  player.points -= becky.points;
  $("#nanny").append(beckyinfo);
  // $('#becky').html(becky.image2);
  // $("#becky").append(nannyTemplate(image2));
});
$('#crystal').on('click', function (){
$('#becky').addClass('hidden');
  $('#martha').addClass('hidden');
player.points -= crystal.points;
  $("#nanny").append(crystalinfo);
});

$('#martha').on('click', function (){
$('#crystal').addClass('hidden');
  $('#becky').addClass('hidden');
  player.points -= martha.points;
  $("#nanny").append(marthainfo);
});

$('#cosmo').on('click', function (){     // alchohol clicks
$('#wine').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#water').addClass('hidden');
  player.points += cosmo.points;
  $("#drink").append(cosmoinfo);

});
$('#wine').on('click', function (){
$('#cosmo').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#water').addClass('hidden');
  player.points += wine.points;
  $("#drink").append(wineinfo);
});
$('#water').on('click', function (){
$('#wine').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#cosmo').addClass('hidden');
  player.points += water.points;
  $("#drink").append(waterinfo);
});
$('#tequila').on('click', function (){
$('#wine').addClass('hidden');
  $('#water').addClass('hidden');
  $('#cosmo').addClass('hidden');
  $('.play').removeClass('hidden');
  player.points += tequila.points;
  $("#drink").append(tequilainfo);
});

                        // click button for total points
$('.points').on('click', function (){

$('.totalpoints').html(parseInt(player.points));

});


// $('.points').on('click', function(){
//   $('.play').removeClass('hidden');
//
// });

//outcome
// function OutCome(options) {
// this.title = options.title || "Try again";
// this.image = options.image;
// this.content = options.content;
// $(".page3").append(outcomeTemplate(this));
// var totalpoints = function () {
//   if(player.points < 10) {
//  return badoutcome;
// } else if (player.points > 50) {
//  return goodoutcome;
// } else { return middleoutcome;}};
// }
});
