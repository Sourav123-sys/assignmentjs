function FeetToMile(feet){
    mile=feet/5280;
    return mile;
}


var fivemile=FeetToMile(5);
console.log(fivemile);
var tenmile=FeetToMile(10);
console.log(tenmile);

function woodCalculator (chair, table, bed){
    var chairCount = chair  * 1 ;
    var tableCount = table  * 3;
    var bedCount  = bed * 5;
    var totalWood = (chairCount + tableCount + bedCount);
    return totalWood;
}
var  amountOFwood = woodCalculator(20, 25, 10);
console.log(amountOFwood);


function bricCalculator(bricCount){
    var firstToTenFloor =  15  * 10 * 1000;
    var elevenToTwentyFloor = 12  * 10 * 1000;
    var twentyoneToOver =10  * 10 * 1000;
    var totalBric = firstToTenFloor + elevenToTwentyFloor + twentyoneToOver;

    return totalBric;

}
var totalBricAmount = bricCalculator(30);
console.log(totalBricAmount);


function tinyFriend(friends) {
    var smallestName = friends[0];
    for (var i = 0; i < friends.length; i++) {
      var currentName = friends[i];
      if (currentName > smallestName) {
        smallestName = currentName;
      }
    }
    return smallestName;
  }
  var smallName = tinyFriend(["promi", "sajib","amaira","sourav"]);
  console.log(smallName);