



var sandra = new Housewife({name: "Sandra", age: 38, kids: "2 kids", points: 10, image: "http://hate.it/site/assets/files/4464/kim-kardashian2.710x0d0x0.jpg" });
var patricia = new Housewife({name: "Patricia", age: 40, kids: "4 kids", points: 10, job: "Mary-Kay sales rep", image: "http://www.prettydesigns.com/wp-content/uploads/2013/11/Paris-Hilton-Hairstyles-Lovely-Side-parted-Medium-Haircut.jpg"});
var janet = new Housewife({name: "Janet", age: 34, kids: "6 kids", job: "secretary", points:10, image: "http://img.thesun.co.uk/aidemitlum/archive/01747/BRITNEY-SPEARS-MAI_1747542a.jpg"});

var pizza = new WhatsForDinner({name: "pizza", title:"pizza!", temp: "warm", howold: "fresh", points: 25, image: "http://cache.boston.com/bonzai-fba/Original_Photo/2011/11/23/pizza__1322067494_5957.jpg"});
var leftovers = new WhatsForDinner({name: "leftovers", title: "leftovers", temp:" cold of course", howold:"kinda old...", points: -10 , image: "http://hartfc.digitalreachopm.netdna-cdn.com/wp-content/uploads/2015/08/leftovers-can-lead-to-food-waste.jpg?55b424"});
var vegetables = new WhatsForDinner ({name: "veg", title: "vegetables", points: 5, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5LIY3DeoJOBj3C9Lg1fso4nsTl2aR4nqcBtRrtD12YhtmrzvH"});

var vacuum = new HouseHoldWeapon({name: "vacuum", title: "vacuum", points: 15, image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlEr7ZpjNwCB3qGn2nrZVzmxEb-9yod4SjkAPXIqr5nw10sYzr"});
var swiffer = new HouseHoldWeapon({name: "swiffer",  title: "Swiffer", points: 20, image:"http://www.adweek.com/agencyspy/files/2011/11/swiffer1-300x300.jpg"});
var oldmop = new HouseHoldWeapon({name: "mop", title: "smelly mop",points: -15, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9YdnWE1UhM0CZk5uDJfouGdGIQXDlGGyAEYz3KlVaT7yUcQq"});

var vodka = new DrinkOfChoice({name: "tequila", title: "tequila shots!",points: 20, image: "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/fn2/video/876/493/tequila_640.jpg?ve=1&tl=1"});
var wine = new DrinkOfChoice({name: "wine", title: "pinot grigio",points: 5, image: "http://captaincrab.org/wp-content/uploads/2015/06/pinot.jpg"});
var cosmo = new DrinkOfChoice({name: "cosmo", title: "basic bitch drink",points: 15, image: "http://bestlowcaloriecocktails.com/wp-content/uploads/2015/05/5434949056_788b0b4450_b.jpg"});
var water = new DrinkOfChoice({name: "water", title: "water",points: -10, image: "http://www.hobidix.com/wp-content/uploads/4/4-engrossing-water-glass-buy-online-water-grass-hill-go-karting-water-glass-goes-on-which-side-blue-water-glass-grande-prairie-does-water-glass-go-table-setting-glass-water-features-garden-wher.jpg"});


var becky = new Nanny({name: "becky",title: "Hot Becky", points: 10, image: "http://i684.photobucket.com/albums/vv207/BeckSpeck/pretty-girl-alexis-dziena_1024x768.jpg"});
var crystal = new Nanny({name: "crystal", title: "ex-stripper Crystal", points: 6, image: "https://cbsla.files.wordpress.com/2011/03/53250786.jpg"});
var martha = new Nanny({name: "martha",title: "Martha", points: 2, image: "http://img3.wikia.nocookie.net/__cb20131102071400/americanhorrorstory/de/images/b/ba/American-horror-story-moira-669.gif"});

// var counter = [] ;
//
// var addPoints = function(item) {
//   counter.push(item.points);
//   var total = math.sum(item.points);
// };

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

  this.drinktoForget = function(housewife) {
  (housewife.points = (housewife.points + this.points));
    if (housewife.points > 50) {
      console.log('you doin okay');
    }
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
    if(housewife.points < 10) {
      console.log('bitch dead');}
return housewife.points;
  };
}



// Housewife.dailyagenda = function(food, drink) {
//     if( vodka.name === "shots of vodka" || wine.name === "wine drunk")
//       {return ("Forget all of your problems!");}
//      else { return ("Even alcohol can't solve all of your problems.");}
// };



$('.page1').on('click', 'button',function(){
  $('.page1').addClass('hidden');
  $('.page2').removeClass('hidden');
});

// page 2

$('#Sandra').on('click', function (){             //housewives clicks
  $(this).siblings().toggleClass('hidden');

});
$('#Patricia').on('click', function (){
  $(this).siblings().toggleClass('hidden');

});
$('#Janet').on('click', function (){
  $(this).siblings().toggleClass('hidden');

});

$('#pizza').on('click', function (){
  $(this).siblings().toggleClass('hidden');    //food clicks

});
$('#leftovers').on('click', function (){
  $(this).siblings().toggleClass('hidden');

});
$('#veg').on('click', function (){
  $(this).siblings().toggleClass('hidden');

});

$('#vacuum').on('click', function (){
  $(this).siblings().toggleClass('hidden');         //weapon clicks

});
$('#swiffer').on('click', function (){
  $(this).siblings().toggleClass('hidden');

});
$('#mop').on('click', function (){
  $(this).siblings().toggleClass('hidden');

});



$('.page2').on('click', '.nextpage', function (){     // to to go next page
$('.page2').addClass('hidden');
  $('.page3').removeClass('hidden');
});


//page 3
$('#becky').on('click', function (){     // nanny clicks
$('#crystal').addClass('hidden');
  $('#martha').addClass('hidden');
});
$('#crystal').on('click', function (){
$('#becky').addClass('hidden');
  $('#martha').addClass('hidden');
});
$('#martha').on('click', function (){
$('#crystal').addClass('hidden');
  $('#becky').addClass('hidden');
});

$('#cosmo').on('click', function (){     // alchohol clicks
$('#wine').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#water').addClass('hidden');

});
$('#wine').on('click', function (){
$('#cosmo').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#water').addClass('hidden');

});
$('#water').on('click', function (){
$('#wine').addClass('hidden');
  $('#tequila').addClass('hidden');
  $('#cosmo').addClass('hidden');

});
$('#tequila').on('click', function (){
$('#wine').addClass('hidden');
  $('#water').addClass('hidden');
  $('#cosmo').addClass('hidden');

});


// $('.food').append()
