'use strict';

var shopsArray = [];
var storeOpTimes = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// The header row and footer row are each created in their own stand-alone function
// Duplicate code has been removed and DRY principles are evident
// Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

var headerRow = function() {
  var tableElt = document.getElementById('store-tbl');
  var tRowHeaderElt = document.createElement('tr');
  var cellOneElt = document.createElement('td');
  tRowHeaderElt.appendChild(cellOneElt);
  cellOneElt.textContent = '';
  for (var j = 0; j < storeOpTimes.length; j++) {
    var opTimeCellElt = document.createElement('td');
    opTimeCellElt.textContent = storeOpTimes[j];
    tRowHeaderElt.appendChild(opTimeCellElt);
  }
  var cellTotElt = document.createElement('td');
  cellTotElt.textContent = 'Total';
  tRowHeaderElt.appendChild(cellTotElt);
  tableElt.appendChild(tRowHeaderElt);
};

headerRow();



function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.totalDay = 0;
  this.salesResults = [];
  shopsArray.push(this);
  this.cookiesPerDayArray();
  this.render();
}
console.log('object constructor created: ', Store);

Store.prototype.cookiesPerHour = function(){
  return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
};

Store.prototype.cookiesPerDayArray = function() {
  //console.log('CookiesPerHour output: ', this.cookiesPerHour);
  for(var i = 6; i < 20; i++) {
    this.totalDay += this.cookiesPerHour();
    this.salesResults.push(this.cookiesPerHour());
    //console.log('HourlyLog for Day: ', this.salesResults)
  }
};
// Good use of a constructor function; style and syntax are correctly implemented
// Each cookie stand location should have a separate render() method that creates and appends //its row to the table
Store.prototype.render = function (){
  var tableElt = document.getElementById('store-tbl');
  var tRowElt = document.createElement('tr');
  var cellElt = document.createElement('td');
  tRowElt.appendChild(cellElt);
  cellElt.textContent = (this.name);
  for (var i = 0; i < storeOpTimes.length; i++) {
    var infoCells = document.createElement('td');
    infoCells.textContent = this.salesResults[i];
    tRowElt.appendChild(infoCells);
  }
  var totCell = document.createElement('td');
  totCell.textContent = this.totalDay;
  tRowElt.appendChild(totCell);
  tableElt.appendChild(tRowElt);
};

var FirstNPike = new Store('FirstNPike', 23, 65, 6.3);
console.log('instatiation of FirstNPike: ', FirstNPike);

var SeaTacAir = new Store('SeaTacAir', 3, 24, 1.2);
console.log('instatiation of SeaTacAir: ', SeaTacAir);

var SeattleC = new Store('SeattleC', 11, 38, 3.7);
console.log('instatiation of SeattleC: ', SeattleC);

var CapitolH = new Store('CapitolH', 20, 38, 2.3);
console.log('instatiation of CapitolH: ', CapitolH);

var Alki = new Store('Alki', 2, 16, 4.6);
console.log('instatiation of Alki: ', Alki);

console.log('ShopsArray is: ', shopsArray);
