var resetButton = document.getElementById('reset-button');
resetButton.onclick = reloadPage;

function reloadPage(){
   window.location.reload();
}

var clicks = 0;
var player;
var sandra = new Housewife({name: "Sandra", age: 38, kids: "2 kids", points: 0, image: "http://hate.it/site/assets/files/4464/kim-kardashian2.710x0d0x0.jpg" });
var patricia = new Housewife({name: "Patricia", age: 47, kids: "1 kid", points: 0, job: "Mary-Kay sales rep", image: "http://hellogiggles.hellogiggles.netdna-cdn.com/wp-content/uploads/2014/06/23/picture-of-amy-poehler-as-mrs-george-in-mean-girls.jpg"});
var janet = new Housewife({name: "Janet", age: 30, kids: "6 kids", job: "secretary", points: 0, image: "http://i.dailymail.co.uk/i/pix/2010/04/28/article-1269642-09552748000005DC-674_224x300.jpg"});

var pizza = new WhatsForDinner({name: "pizza", title:"pizza!", temp: "warm", howold: "fresh", points: 15, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png", image2:"http://cdn.shopify.com/s/files/1/0080/8372/products/tattly_julia_rothman_pizza_slice_web_design_01_grande.jpg?v=1402611182"});
var leftovers = new WhatsForDinner({name: "leftovers", title: "leftovers", temp:" cold of course", howold:"kinda old...", points: -5 , image2:"http://s3.amazonaws.com/media.wbur.org/wordpress/11/files/2013/11/1129_thanksgiving-leftovers.jpg",image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var vegetables = new WhatsForDinner ({name: "veg", title: "vegetables", points: 5, image2:"http://www.hospitalityinfocentre.co.uk/Fruit%20&%20Veg/Vegetables/Pictures/vegetables[1].jpg",image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

var vacuum = new HouseHoldWeapon({name: "vacuum", title: "vacuum", points: 10, image2:"http://ace.imageg.net/graphics/product_images/pACE3-1486057enh-z8.jpg",image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var swiffer = new HouseHoldWeapon({name: "swiffer",  title: "Swiffer", points: 15,image2:"http://ghk.h-cdn.co/assets/cm/15/11/1280x1280/5500965c4ec75-ghk-swiffer-wet-jet-wood-floor-cleaner-s2-9730590.jpg", image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var mop = new HouseHoldWeapon({name: "mop", title: "smelly mop",points: -5,image2:"http://i.kinja-img.com/gawker-media/image/upload/s--m7xt5wmT--/19btfx6ps7zgrjpg.jpg", image:"http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

var tequila = new DrinkOfChoice({name: "tequila", title: "tequila shots!",points: 10, image2:"http://a57.foxnews.com/global.fncstatic.com/static/managed/img/fn2/video/876/493/tequila_640.jpg?ve=1&tl=1", image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var wine = new DrinkOfChoice({name: "wine", title: "pinot grigio",points: 10,image2:"http://captaincrab.org/wp-content/uploads/2015/06/pinot.jpg", image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var cosmo = new DrinkOfChoice({name: "cosmo", title: "basic bitch drink",points: 5,image2:"http://bestlowcaloriecocktails.com/wp-content/uploads/2015/05/5434949056_788b0b4450_b.jpg",
                                                                                  image: "http:www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var water = new DrinkOfChoice({name: "water", title: "water",points: -5, image2:"http://www.hobidix.com/wp-content/uploads/4/4-engrossing-water-glass-buy-online-water-grass-hill-go-karting-water-glass-goes-on-which-side-blue-water-glass-grande-prairie-does-water-glass-go-table-setting-glass-water-features-garden-wher.jpg",
                                                                          image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});


var becky = new Nanny({name: "becky",title: "Hot Becky", points: -8, image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png", image2: "http://i684.photobucket.com/albums/vv207/BeckSpeck/pretty-girl-alexis-dziena_1024x768.jpg" });
var crystal = new Nanny({name: "crystal", title: "ex-stripper Crystal", points: -6,image2:"https://cbsla.files.wordpress.com/2011/03/53250786.jpg",
                                                                                  image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});
var martha = new Nanny({name: "martha",title: "Martha", points: -2, image2:"http://img3.wikia.nocookie.net/__cb20131102071400/americanhorrorstory/de/images/b/ba/American-horror-story-moira-669.gif",
                                                                    image: "http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-hi.png"});

//var goodoutcome = new OutCome ({title: "good outcome", content:"this is good", image: " "});
//var badoutcome = new OutCome ({title: "bad outcome", image: " ", content: "Bummer! You lose your pharmaceutical prescription. Better luck next time."});
//

$('body').on('click', '.demo-card-image', function(){
  $(this).children('img').first().hide();
  $(this).children('.hidden').removeClass('hidden');
});

// when clicks === 5 ....
$('body').on('click', '.demo-card-image',function(){
  var nameAttr = $(this).attr('id').toLowerCase();
  console.log(info[nameAttr]);
  var item = eval(nameAttr);
  player.points += item.points;
  console.log(player.points);
  $(this).siblings('.demo-card-image').addClass('hidden');
  $(this).parent().append(info[nameAttr]);
  myGlobal = $(this);
});

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
  this.image2 = options.image2;
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
  this.image2 = options.image2;

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
  this.image2 = options.image2;

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
    housewife.points = (housewife.points + this.points);
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
$('#Sandra').on('click', function (){
  player = sandra;
});
$('#Patricia').on('click', function (){
    player= patricia;
});
$('#Janet').on('click', function (){
    player= janet;
});
$('.page2').on('click', '#nextpage', function (){     // to to go next page
$('.page2').addClass('hidden');
  $('.page3').removeClass('hidden');
});

                        // click button for total points
$('.points').on('click', function (){

$('.totalpoints').html(parseInt(player.points));

});
