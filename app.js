// var resetButton = document.getElementbyId('resetButton');
// resetButton.onclick= reloadPage;
//
// function reloadPage(){
//    window.location.reload();
// }




var clicks = 0;
var player;
var sandra = new Housewife({name: "Sandra", age: 38, kids: "2 kids", points: 10, image: "http://hate.it/site/assets/files/4464/kim-kardashian2.710x0d0x0.jpg" });
var patricia = new Housewife({name: "Patricia", age: 47, kids: "1 kid", points: 10, job: "Mary-Kay sales rep", image: "http://hellogiggles.hellogiggles.netdna-cdn.com/wp-content/uploads/2014/06/23/picture-of-amy-poehler-as-mrs-george-in-mean-girls.jpg"});
var janet = new Housewife({name: "Janet", age: 30, kids: "6 kids", job: "secretary", points:10, image: "http://i.dailymail.co.uk/i/pix/2010/04/28/article-1269642-09552748000005DC-674_224x300.jpg"});

var pizza = new WhatsForDinner({name: "pizza", title:"pizza!", temp: "warm", howold: "fresh", points: 25, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var leftovers = new WhatsForDinner({name: "leftovers", title: "leftovers", temp:" cold of course", howold:"kinda old...", points: -10 , image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var vegetables = new WhatsForDinner ({name: "veg", title: "Healthy greens", points: 5, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

var vacuum = new HouseHoldWeapon({name: "vacuum", title: "vacuum", points: 15, image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var swiffer = new HouseHoldWeapon({name: "swiffer",  title: "Swiffer", points: 20, image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var mop = new HouseHoldWeapon({name: "mop", title: "mop",points: -15, image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

var tequila = new DrinkOfChoice({name: "tequila", title: "tequila shots!",points: 20, image: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/fn2/video/876/493/tequila_640.jpg?ve=1&tl=1"});
var wine = new DrinkOfChoice({name: "wine", title: "pinot grigio",points: 5, image: "http://captaincrab.org/wp-content/uploads/2015/06/pinot.jpg"});
var cosmo = new DrinkOfChoice({name: "cosmo", title: "basic bitch drink",points: 15, image: "http://bestlowcaloriecocktails.com/wp-content/uploads/2015/05/5434949056_788b0b4450_b.jpg"});
var water = new DrinkOfChoice({name: "water", title: "water",points: -10, image: "http://www.hobidix.com/wp-content/uploads/4/4-engrossing-water-glass-buy-online-water-grass-hill-go-karting-water-glass-goes-on-which-side-blue-water-glass-grande-prairie-does-water-glass-go-table-setting-glass-water-features-garden-wher.jpg"});


var becky = new Nanny({name: "becky",title: "Hot Becky", points: 10, image: "http://i684.photobucket.com/albums/vv207/BeckSpeck/pretty-girl-alexis-dziena_1024x768.jpg"});
var crystal = new Nanny({name: "crystal", title: "ex-stripper Crystal", points: 6, image: "https://cbsla.files.wordpress.com/2011/03/53250786.jpg"});
var martha = new Nanny({name: "martha",title: "Martha", points: 2, image: "http://img3.wikia.nocookie.net/__cb20131102071400/americanhorrorstory/de/images/b/ba/American-horror-story-moira-669.gif"});


$('body').on('click', '.demo-card-image', function(){
  clicks++;
} );

// when clicks ===5 ....


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
  $("#nanny").append(nannyTemplate(this));

  this.useHotness = function(housewife) {
    housewife.points = (housewife.points - this.points);
    if(housewife.points < 5) {
      console.log('BITCH DEAD');}
return housewife.points;
  };
}





$('.page1').on('click', 'button',function(){
  $('.page1').addClass('hidden');
  $('.page2').removeClass('hidden');
});

// page 2

$('#Sandra').on('click', function (){          //housewives clicks
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
  player.points += pizza.points;              //food clicks

});
$('#leftovers').on('click', function (){
  $('#veg').addClass('hidden');
  $('#pizza').addClass('hidden');
  player.points += leftovers.points;
});
$('#veg').on('click', function (){
  $('#pizza').addClass('hidden');
  $('#leftovers').addClass('hidden');
  player.points += vegetables.points;
});

$('#vacuum').on('click', function (){
  $(this).siblings().toggleClass('hidden');         //weapon clicks
  player.points += vacuum.points;

});
$('#swiffer').on('click', function (){
  $(this).siblings().toggleClass('hidden');
  player.points += swiffer.points;

});
$('#mop').on('click', function (){
  $(this).siblings().toggleClass('hidden');
  player.points += mop.points;

});



$('.page2').on('click', '.nextpage', function (){     // to to go next page
$('.page2').addClass('hidden');
  $('.page3').removeClass('hidden');
});


//page 3
$('#becky').on('click', function (){     // nanny clicks
$('#crystal').addClass('hidden');
  $('#martha').addClass('hidden');
  player.points -= becky.points;


});
$('#crystal').on('click', function (){
$('#becky').addClass('hidden');
  $('#martha').addClass('hidden');
player.points -= crystal.points;

});
$('#martha').on('click', function (){
$('#crystal').addClass('hidden');
  $('#becky').addClass('hidden');
  player.points -= martha.points;

});

$('#cosmo').on('click', function (){     // alchohol clicks
$('#wine').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#water').addClass('hidden');
  player.points += cosmo.points;


});
$('#wine').on('click', function (){
$('#cosmo').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#water').addClass('hidden');
  player.points += wine.points;

});
$('#water').on('click', function (){
$('#wine').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#cosmo').addClass('hidden');
  player.points += water.points;

});
$('#tequila').on('click', function (){
$('#wine').addClass('hidden');
  $('#water').addClass('hidden');
  $('#cosmo').addClass('hidden');
  $('.play').removeClass('hidden');
  player.points += tequila.points;

});

                        // click button for total points
$('.points').on('click', function (){
  // var finalpoints ;
  //  if (player.points <= 30) {
  //   return finalpoints === "You're not very good at this";
  // }
$('.totalpoints').html(parseInt(player.points));

});


$('.points').on('click', function(){
  $('.play').removeClass('hidden');
});

$('.playagain').on('click', function (){
  $('.page1').removeClass('hidden');
  $('.page2').addClass('hidden');
  $('.page3').toggleClass('hidden');
});
