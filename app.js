'use strict';

var shopsArray = [];
var storeOpTimes = ["6am", "7am", "8am", "9am", "10am", "11am", "12noon", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.totalDay = 0;
  this.salesResults = [];
  shopsArray.push(this);
}
console.log('object constructor created: ', Store);

Store.prototype.cookiesPerHour = function(){
return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
}

Store.prototype.cookiesPerDayArray = function() {
  //console.log('CookiesPerHour output: ', this.cookiesPerHour);
  for(var i = 6; i < 20; i++) {
    this.totalDay += this.cookiesPerHour();
    this.salesResults.push(this.cookiesPerHour());
    //console.log('HourlyLog for Day: ', this.salesResults)
  }
}



for(var k = 0; k < shopsArray.length; k++) {
  console.log(shopsArray[k].cookiesPerDayArray());
  shopsArray[k].cookiesPerDayArray();
}

var FirstNPike = new Store('FirstNPike', 23, 65, 6.3);
console.log('instatiation of FirstNPike: ', FirstNPike);
FirstNPike.cookiesPerDayArray();

var SeaTacAir = new Store('SeaTacAir', 3, 24, 1.2);
console.log('instatiation of SeaTacAir: ', SeaTacAir);
SeaTacAir.cookiesPerDayArray();

var SeattleC = new Store('SeattleC', 11, 38, 3.7);
console.log('instatiation of SeattleC: ', SeattleC);
SeattleC.cookiesPerDayArray();

var CapitolH = new Store('CapitolH', 20, 38, 2.3);
console.log('instatiation of CapitolH: ', CapitolH);
CapitolH.cookiesPerDayArray();

var Alki = new Store('Alki', 2, 16, 4.6);
console.log('instatiation of Alki: ', Alki);
Alki.cookiesPerDayArray();

console.log('ShopsArray is: ', shopsArray);

//create a table heading
  var createTbl = function() {
   var tblEl = document.getElementById('store-tbl');
   console.log('Got a position for a table at store-tbl!!!!');

   // creates a <table> element and a <tbody> element
   var tbl = document.createElement('table');
   var tblBody = document.createElement('tbody');
   console.log('Created tbl elt and tbody....here')

   var trEl = document.createElement('tr');  //create row1
   var tdEl = document.createElement('td');  //create cell1
   tdEl.textContent = '';
   trEl.appendChild(tdEl);
   for (var j = 0; j < 14; j++) {                 //j - column cells
     var tdEl = document.createElement('td');     //creating the cell
     console.log('Created table row '+i+' cell '+j)
     tdEl.textContent = storeOpTimes[j];               //populating the cell
     trEl.appendChild(tdEl);                      //appending cell to row
   }
   tblBody.appendChild(trEl);                     //appending row to body
 // }
 // tbl.appendChild(tblBody);                      //appending body to table
 // tblEl.appendChild(tbl);
   // tblBody.appendChild(trEl);
   tbl.appendChild(tblBody);                      //appending body to table
   tblEl.appendChild(tbl);
   

   // creating all cells
   for (var i = 0; i < 1; i++) {                   //i - rows
     console.log('creates a table row....looping')
     var trEl = document.createElement('tr');



     for (var j = 0; j < 15; j++) {                 //j - column cells
       var tdEl = document.createElement('td');     //creating the cell
       console.log('Created table row '+i+' cell '+j)
       tdEl.textContent = storeOpTimes[j];               //populating the cell
       trEl.appendChild(tdEl);                      //appending cell to row
     }
     tblBody.appendChild(trEl);                     //appending row to body
   }
   tbl.appendChild(tblBody);                      //appending body to table
   tblEl.appendChild(tbl);                        //appending tbl to table
   console.log('sets the border attribute of tbl to 2');
   tbl.setAttribute("border", "2");
 }


  createTbl();
// ////////////////////////////////////
// var FirstNPike = {
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   salesResults: [],
//   totalDay: 0,
//   cookiesPerHour: function() {
//   return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
//   }
// }
// for(var i = 6; i < 21; i++) {
//   if(i < 13){
//     FirstNPike.totalDay += FirstNPike.cookiesPerHour();
//     FirstNPike.salesResults.push(FirstNPike.cookiesPerHour());
//   } else {
//     FirstNPike.totalDay += FirstNPike.cookiesPerHour();
//     FirstNPike.salesResults.push(FirstNPike.cookiesPerHour());
//   }
// }
// var startItem = document.getElementById("one");
// startItem.textContent = '6am: ' + FirstNPike.salesResults[0] + ' cookies';
// var startItem = document.getElementById("two");
// startItem.textContent = '7am: ' + FirstNPike.salesResults[1] + ' cookies';
// var startItem = document.getElementById("three");
// startItem.textContent = '8am: ' + FirstNPike.salesResults[2] + ' cookies';
// var startItem = document.getElementById("four");
// startItem.textContent = '9am: ' + FirstNPike.salesResults[3] + ' cookies';
// var startItem = document.getElementById("five");
// startItem.textContent = '10am: ' + FirstNPike.salesResults[4] + ' cookies';
// var startItem = document.getElementById("six");
// startItem.textContent = '11am: ' + FirstNPike.salesResults[5] + ' cookies';
// var startItem = document.getElementById("seven");
// startItem.textContent = '12am: ' + FirstNPike.salesResults[6] + ' cookies';
// var startItem = document.getElementById("eight");
// startItem.textContent = '1pm: ' + FirstNPike.salesResults[7] + ' cookies';
// var startItem = document.getElementById("nine");
// startItem.textContent = '2pm: ' + FirstNPike.salesResults[8] + ' cookies';
// var startItem = document.getElementById("ten");
// startItem.textContent = '3pm: ' + FirstNPike.salesResults[9] + ' cookies';
// var startItem = document.getElementById("eleven");
// startItem.textContent = '4pm: ' + FirstNPike.salesResults[10] + ' cookies';
// var startItem = document.getElementById("twelve");
// startItem.textContent = '5pm: ' + FirstNPike.salesResults[11] + ' cookies';
// var startItem = document.getElementById("thirteen");
// startItem.textContent = '6pm: ' + FirstNPike.salesResults[12] + ' cookies';
// var startItem = document.getElementById("fourteen");
// startItem.textContent = '7pm: ' + FirstNPike.salesResults[13] + ' cookies';
//
// var startItem = document.getElementById("total");
// startItem.textContent = 'Total: ' +FirstNPike.totalDay + ' cookies';
//
// var SeaTacAir = {
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   salesResults: [],
//   totalDay: 0,
//   cookiesPerHour: function() {
//   return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
//   }
// }
// for(var i = 6; i < 21; i++) {
//   if(i < 13){
//     SeaTacAir.totalDay += SeaTacAir.cookiesPerHour();
//     SeaTacAir.salesResults.push(SeaTacAir.cookiesPerHour());
//   } else {
//     SeaTacAir.totalDay += SeaTacAir.cookiesPerHour();
//     SeaTacAir.salesResults.push(SeaTacAir.cookiesPerHour());
//   }
// }
//
// var startItem = document.getElementById("oneSt");
// startItem.textContent = '6am: ' + SeaTacAir.salesResults[0] + ' cookies';
// var startItem = document.getElementById("twoSt");
// startItem.textContent = '7am: ' + SeaTacAir.salesResults[1] + ' cookies';
// var startItem = document.getElementById("threeSt");
// startItem.textContent = '8am: ' + SeaTacAir.salesResults[2] + ' cookies';
// var startItem = document.getElementById("fourSt");
// startItem.textContent = '9am: ' + SeaTacAir.salesResults[3] + ' cookies';
// var startItem = document.getElementById("fiveSt");
// startItem.textContent = '10am: ' + SeaTacAir.salesResults[4] + ' cookies';
// var startItem = document.getElementById("sixSt");
// startItem.textContent = '11am: ' + SeaTacAir.salesResults[5] + ' cookies';
// var startItem = document.getElementById("sevenSt");
// startItem.textContent = '12am: ' + SeaTacAir.salesResults[6] + ' cookies';
// var startItem = document.getElementById("eightSt");
// startItem.textContent = '1pm: ' + SeaTacAir.salesResults[7] + ' cookies';
// var startItem = document.getElementById("nineSt");
// startItem.textContent = '2pm: ' + SeaTacAir.salesResults[8] + ' cookies';
// var startItem = document.getElementById("tenSt");
// startItem.textContent = '3pm: ' + SeaTacAir.salesResults[9] + ' cookies';
// var startItem = document.getElementById("elevenSt");
// startItem.textContent = '4pm: ' + SeaTacAir.salesResults[10] + ' cookies';
// var startItem = document.getElementById("twelveSt");
// startItem.textContent = '5pm: ' + SeaTacAir.salesResults[11] + ' cookies';
// var startItem = document.getElementById("thirteenSt");
// startItem.textContent = '6pm: ' + SeaTacAir.salesResults[12] + ' cookies';
// var startItem = document.getElementById("fourteenSt");
// startItem.textContent = '7pm: ' + SeaTacAir.salesResults[13] + ' cookies';
//
// var startItem = document.getElementById("totalSt");
// startItem.textContent = 'Total: ' +SeaTacAir.totalDay + ' cookies';
//
// var SeattleC = {
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   salesResults: [],
//   totalDay: 0,
//   cookiesPerHour: function() {
//   return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
//   }
// }
// for(var i = 6; i < 21; i++) {
//   if(i < 13){
//     SeattleC.totalDay += SeattleC.cookiesPerHour();
//     SeattleC.salesResults.push(SeattleC.cookiesPerHour());
//   } else {
//     SeattleC.totalDay += SeattleC.cookiesPerHour();
//     SeattleC.salesResults.push(SeattleC.cookiesPerHour());
//   }
// }
//
// var startItem = document.getElementById("oneSc");
// startItem.textContent = '6am: ' + SeattleC.salesResults[0] + ' cookies';
// var startItem = document.getElementById("twoSc");
// startItem.textContent = '7am: ' + SeattleC.salesResults[1] + ' cookies';
// var startItem = document.getElementById("threeSc");
// startItem.textContent = '8am: ' + SeattleC.salesResults[2] + ' cookies';
// var startItem = document.getElementById("fourSc");
// startItem.textContent = '9am: ' + SeattleC.salesResults[3] + ' cookies';
// var startItem = document.getElementById("fiveSc");
// startItem.textContent = '10am: ' + SeattleC.salesResults[4] + ' cookies';
// var startItem = document.getElementById("sixSc");
// startItem.textContent = '11am: ' + SeattleC.salesResults[5] + ' cookies';
// var startItem = document.getElementById("sevenSc");
// startItem.textContent = '12am: ' + SeattleC.salesResults[6] + ' cookies';
// var startItem = document.getElementById("eightSc");
// startItem.textContent = '1pm: ' + SeattleC.salesResults[7] + ' cookies';
// var startItem = document.getElementById("nineSc");
// startItem.textContent = '2pm: ' + SeattleC.salesResults[8] + ' cookies';
// var startItem = document.getElementById("tenSc");
// startItem.textContent = '3pm: ' + SeattleC.salesResults[9] + ' cookies';
// var startItem = document.getElementById("elevenSc");
// startItem.textContent = '4pm: ' + SeattleC.salesResults[10] + ' cookies';
// var startItem = document.getElementById("twelveSc");
// startItem.textContent = '5pm: ' + SeattleC.salesResults[11] + ' cookies';
// var startItem = document.getElementById("thirteenSc");
// startItem.textContent = '6pm: ' + SeattleC.salesResults[12] + ' cookies';
// var startItem = document.getElementById("fourteenSc");
// startItem.textContent = '7pm: ' + SeattleC.salesResults[13] + ' cookies';
//
// var startItem = document.getElementById("totalSc");
// startItem.textContent = 'Total: ' +SeattleC.totalDay + ' cookies';
//
//
// var CapitolH = {
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   salesResults: [],
//   totalDay: 0,
//   cookiesPerHour: function() {
//   return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
//   }
// }
// for(var i = 6; i < 21; i++) {
//   if(i < 13){
//     CapitolH.totalDay += CapitolH.cookiesPerHour();
//     CapitolH.salesResults.push(CapitolH.cookiesPerHour());
//   } else {
//     CapitolH.totalDay += CapitolH.cookiesPerHour();
//     CapitolH.salesResults.push(CapitolH.cookiesPerHour());
//   }
// }
//
// var startItem = document.getElementById("oneCh");
// startItem.textContent = '6am: ' + CapitolH.salesResults[0] + ' cookies';
// var startItem = document.getElementById("twoCh");
// startItem.textContent = '7am: ' + CapitolH.salesResults[1] + ' cookies';
// var startItem = document.getElementById("threeCh");
// startItem.textContent = '8am: ' + CapitolH.salesResults[2] + ' cookies';
// var startItem = document.getElementById("fourCh");
// startItem.textContent = '9am: ' + CapitolH.salesResults[3] + ' cookies';
// var startItem = document.getElementById("fiveCh");
// startItem.textContent = '10am: ' + CapitolH.salesResults[4] + ' cookies';
// var startItem = document.getElementById("sixCh");
// startItem.textContent = '11am: ' + CapitolH.salesResults[5] + ' cookies';
// var startItem = document.getElementById("sevenCh");
// startItem.textContent = '12am: ' + CapitolH.salesResults[6] + ' cookies';
// var startItem = document.getElementById("eightCh");
// startItem.textContent = '1pm: ' + CapitolH.salesResults[7] + ' cookies';
// var startItem = document.getElementById("nineCh");
// startItem.textContent = '2pm: ' + CapitolH.salesResults[8] + ' cookies';
// var startItem = document.getElementById("tenCh");
// startItem.textContent = '3pm: ' + CapitolH.salesResults[9] + ' cookies';
// var startItem = document.getElementById("elevenCh");
// startItem.textContent = '4pm: ' + CapitolH.salesResults[10] + ' cookies';
// var startItem = document.getElementById("twelveCh");
// startItem.textContent = '5pm: ' + CapitolH.salesResults[11] + ' cookies';
// var startItem = document.getElementById("thirteenCh");
// startItem.textContent = '6pm: ' + CapitolH.salesResults[12] + ' cookies';
// var startItem = document.getElementById("fourteenCh");
// startItem.textContent = '7pm: ' + CapitolH.salesResults[13] + ' cookies';
//
// var startItem = document.getElementById("totalCh");
// startItem.textContent = 'Total: ' +CapitolH.totalDay + ' cookies';
//
//
// var Alki = {
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   salesResults: [],
//   totalDay: 0,
//   cookiesPerHour: function() {
//   return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
//   }
// }
// for(var i = 6; i < 21; i++) {
//   if(i < 13){
//     Alki.totalDay += Alki.cookiesPerHour();
//     Alki.salesResults.push(Alki.cookiesPerHour());
//   } else {
//     Alki.totalDay += Alki.cookiesPerHour();
//     Alki.salesResults.push(Alki.cookiesPerHour());
//   }
// }
//
// var startItem = document.getElementById("oneAl");
// startItem.textContent = '6am: ' + Alki.salesResults[0] + ' cookies';
// var startItem = document.getElementById("twoAl");
// startItem.textContent = '7am: ' + Alki.salesResults[1] + ' cookies';
// var startItem = document.getElementById("threeAl");
// startItem.textContent = '8am: ' + Alki.salesResults[2] + ' cookies';
// var startItem = document.getElementById("fourAl");
// startItem.textContent = '9am: ' + Alki.salesResults[3] + ' cookies';
// var startItem = document.getElementById("fiveAl");
// startItem.textContent = '10am: ' + Alki.salesResults[4] + ' cookies';
// var startItem = document.getElementById("sixAl");
// startItem.textContent = '11am: ' + Alki.salesResults[5] + ' cookies';
// var startItem = document.getElementById("sevenAl");
// startItem.textContent = '12am: ' + Alki.salesResults[6] + ' cookies';
// var startItem = document.getElementById("eightAl");
// startItem.textContent = '1pm: ' + Alki.salesResults[7] + ' cookies';
// var startItem = document.getElementById("nineAl");
// startItem.textContent = '2pm: ' + Alki.salesResults[8] + ' cookies';
// var startItem = document.getElementById("tenAl");
// startItem.textContent = '3pm: ' + Alki.salesResults[9] + ' cookies';
// var startItem = document.getElementById("elevenAl");
// startItem.textContent = '4pm: ' + Alki.salesResults[10] + ' cookies';
// var startItem = document.getElementById("twelveAl");
// startItem.textContent = '5pm: ' + Alki.salesResults[11] + ' cookies';
// var startItem = document.getElementById("thirteenAl");
// startItem.textContent = '6pm: ' + Alki.salesResults[12] + ' cookies';
// var startItem = document.getElementById("fourteenAl");
// startItem.textContent = '7pm: ' + Alki.salesResults[13] + ' cookies';
//
// var startItem = document.getElementById("totalAl");
// startItem.textContent = 'Total: ' +Alki.totalDay + ' cookies';
