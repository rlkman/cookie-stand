'use strict';

var shopsArray = [];
var storeOpTimes = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.totalDay = 0;
  this.salesResults = [];
  shopsArray.push(this);
  this.cookiesPerDayArray();
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

var FirstNPike = new Store('FirstNPike', 23, 65, 6.3);
console.log('instatiation of FirstNPike: ', FirstNPike);
//FirstNPike.cookiesPerDayArray();

var SeaTacAir = new Store('SeaTacAir', 3, 24, 1.2);
console.log('instatiation of SeaTacAir: ', SeaTacAir);
//SeaTacAir.cookiesPerDayArray();

var SeattleC = new Store('SeattleC', 11, 38, 3.7);
console.log('instatiation of SeattleC: ', SeattleC);
//SeattleC.cookiesPerDayArray();

var CapitolH = new Store('CapitolH', 20, 38, 2.3);
console.log('instatiation of CapitolH: ', CapitolH);
//CapitolH.cookiesPerDayArray();

var Alki = new Store('Alki', 2, 16, 4.6);
console.log('instatiation of Alki: ', Alki);
//Alki.cookiesPerDayArray();

console.log('ShopsArray is: ', shopsArray);

//Scott's code
function createTable() {
  var tableEl = document.getElementById('store-tbl');
  var header = createTableHead();
  var body = createTableBody();
  tableEl.appendChild(header);
  tableEl.appendChild(body);
}

function createTableHead() {
  var theadEl = document.createElement('thead');
  var headRow = createTableRow('', storeOpTimes, 'Totals');
  theadEl.appendChild(headRow);
  return theadEl;
}

function createTableBody() {
  var tbodyEl = document.createElement('tbody');

  for(var k = 0; k < shopsArray.length; k++) {
    var bodyRow = createTableRow(shopsArray[k].name, shopsArray[k].salesResults, shopsArray[k].totalDay);
    tbodyEl.appendChild(bodyRow);
  }
  return tbodyEl;
}

function createTableRow(verticalHeader, dataPoints, verticalFooter) {
  var trEl = document.createElement('tr');
  var tdElOne = document.createElement('td');
  tdElOne.textContent = verticalHeader;
  trEl.appendChild(tdElOne);

  for(var j = 0; j < dataPoints.length; j++) {
    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = dataPoints[j];
    trEl.appendChild(tdElTwo);
  }

  var tdElThree = document.createElement('td');
  tdElThree.textContent = verticalFooter;
  trEl.appendChild(tdElThree);

  return trEl;
}
//Scott's code
createTable();
