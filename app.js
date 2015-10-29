



var sandra = new Housewife({name: "Sandra", age: 38, kids: "2 kids", points: 20, image: "http://hate.it/site/assets/files/4464/kim-kardashian2.710x0d0x0.jpg" });
var patricia = new Housewife({name: "Patricia", age: 40, kids: "4 kids", points: 15, image: "http://www.prettydesigns.com/wp-content/uploads/2013/11/Paris-Hilton-Hairstyles-Lovely-Side-parted-Medium-Haircut.jpg"});
var janet = new Housewife({name: "Janet", age: 34, kids: "6 kids", job: "secretary", points:15, image: "http://img.thesun.co.uk/aidemitlum/archive/01747/BRITNEY-SPEARS-MAI_1747542a.jpg"});

var pizza = new WhatsForDinner({name:"pizza!", temp: "warm", howold: "fresh", points: 25});
var leftovers = new WhatsForDinner({name: "yucky leftovers", temp:" cold of course", howold:"kinda old...", points: -10});
var vegetables = new WhatsForDinner ({name: "vegetables..", points: 5});

var vacuum = new HouseHoldWeapon({name: "Dirt Devil", points: 15});
var rumba = new HouseHoldWeapon({name: "roomba", points: 35});
var swiffer = new HouseHoldWeapon({name: "swiffer wet jet", points: 20});
var oldmop = new HouseHoldWeapon({name: "smelly hair-ridden mop",points: -15});

var vodka = new DrinkOfChoice({name: "shots of vodka",points: 20});
var wine = new DrinkOfChoice({name: "wine drunk",points: 5});
var water = new DrinkOfChoice({name: "water....",points: -10});
var cosmo = new DrinkOfChoice({name: "white girl bitch drink",points: 15});

var becky = new Nanny({name: "Hot Becky", points: 10});
var crystal = new Nanny({name: "ex-stripper Crystal", points: 6});
var jane = new Nanny({name: "Plain Jane", points: 2});

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
 $(".housewives").append(housewifeTemplate(this));
  if (this.points < 5) {
    console.log("BITCH DEAD");
  }
}

function WhatsForDinner(options) {
  this.name = options.name || "mystery meat";
  this.temp = options.temperature || "luke-warm";
  this.howold = options.howold || "moldy";
  this.points = options.points || 5;
  this.usetoFeed = function(housewife) {
    return (housewife.points = (housewife.points + this.points));

  };

}


function HouseHoldWeapon(options){
  this.name = options.name || "broom";
  this.points = options.points || 10;
  this.usetoClean = function(housewife) {
    return (housewife.points = (housewife.points + this.points));
  };
}

function DrinkOfChoice(options){
  this.name = options.name || "EverClear";
  this.points = options.points || 0;
  this.drinktoForget = function(housewife) {
  (housewife.points = (housewife.points + this.points));
    if (housewife.points > 50) {
      console.log('you doin okay');
    }
    return housewife.points;
  };

}

function Nanny(options) {
  this.name = options.name || "Girl Next Door";
  this.points = options.points || "Better watch your husband around that one";



  this.useHotness = function(housewife) {
    housewife.points = (housewife.points - this.points);
    if(housewife.points < 10) {
      console.log('bitch dead');}
return housewife.points;
  };
}



Housewife.dailyagenda = function(food, drink) {
    if( vodka.name === "shots of vodka" || wine.name === "wine drunk")
      {return ("Forget all of your problems!");}
     else { return ("Even alcohol can't solve all of your problems.");}
};

// function playAgain() {
//   if (housewife.points > 50) {
//     console.log('you doin okay');
//   }
// }

$('.page1').on('click', 'button',function(){
  $('.page1').addClass('hidden');
  $('.page2').removeClass('hidden');
});

// page 2

$('.page2').on('click', '.demo-card-image ', function (){
$('.page2').addClass('hidden');
  $('.page3').removeClass('hidden');
});
// $(".slidein").slide(1000).delay(1000).show();

//page 3


// $('.food').append()
