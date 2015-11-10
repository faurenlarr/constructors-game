// $(document).ready(function () {

var housewifeTemplate = _.template($("#housewifeTmpl").html());
var foodTemplate = _.template($("#foodTmpl").html());
var weaponTemplate = _.template($("#weaponTmpl").html());
var nannyTemplate = _.template($("#nannyTmpl").html());
var drinkTemplate = _.template($("#drinkTmpl").html());
// var outcomeTemplate = _.template($("#outcomeTmpl").html());
var info = {
  sandra: "OMG, great choice!  Sandra is a 38 year old home-maker who has 2 beautiful, honor roll children.  She enjoys Pilates and baking gluten free cookies for PTA meetings.  Sometimes she spends too much money on her pets' pedicures. ",

  janet: "Janet is a 30 year old secretary with 6 kids.  She spends most nights drinking, and ignoring everyone around her.  One of her favorite pastimes is plastic surgery. She frequently gets into unnecessary phone arguments with her mother-in-law.",

  patricia: "Patricia is a 47 year old, Mary-Kay rep.  She has one child who is going off to college next year.Patricia worries about having an empty nest soon and in order to ease her nerves about the ordeal, she neurotically cleans her house and binge eats macaroni and cheese in her spare time.  She also enjoys frequent botox injections and hosting jewelry trunk shows.",

  pizza: "Hooray! You have chosen to order pizza! You have made your kids really happy. You earn 15 points!",
  veg: "Yikes, you chose vegetables. Your kids aren't very pleased with your decision. You only earn 5 points.",
  leftovers: "Yuck, you chose leftovers, which have been in the fridge for quite a while. You lose 5 points.",

  vacuum : "You chose the vacuum! You earn 10 points.",
  swiffer: "Good choice on the Swiffer. Now you can clean ALL DAY LONG and have so much fun doing it. You earn 15 points.",
  mop: "Oops! You picked the smelly old hair ridden mop. That's just nasty. You lose 5 points.",

  becky: "Uh oh. You chose Hot Becky. She is your typical girl next-door. She may seem innocent at first, but I wouldn't want her hanging around my house with my husband...You lose 8 points.",
  crystal: "You chose ex-stripper Crystal. Good luck with that one...You lose 6 points.",
  martha: "You chose ol' one eyed Martha. No worries there! Although, your kids aren't very fond of her. You lose 2 points.",

  tequila: "Everyone loves a good tequila shot. Your motto these days is the drunker, the better... But maybe you should cool it around the kids. You earn 10 points",
  wine: "Gotta have your glass of pinot grigio. Good choice. Especially because it's like totally lower in calories than red wine....so they say... You earn 10 points",
  water: "Ew. How dare you choose water. Now you're just going to be sober and miserable. You lose 5 points",
  cosmo: "How cliche of you to choose a cosmo. Or should we say, 'Basic Bitch Drink' Just try not to start drinking them at noon like you usually do. You earn 5 points"
};
