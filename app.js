// Object literal
var FirstNPike = {
  min: 23,
  max: 65,
  avg: 6.3,
  salesResults: [ ],
  totalDay: 0,
  cookiesPerHour: function() {
  return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
  }
}

for(var i = 6; i < 21; i++) {
  if(i < 13){
    //document.write(i + 'am: ' + FirstNPike.cookiesPerHour() + ' cookies\n');
    FirstNPike.totalDay += FirstNPike.cookiesPerHour();
    FirstNPike.salesResults.push(FirstNPike.cookiesPerHour());
  } else {
    //document.write(i + 'pm: ' + FirstNPike.cookiesPerHour() + ' cookies\n');
    FirstNPike.totalDay += FirstNPike.cookiesPerHour();
    FirstNPike.salesResults.push(FirstNPike.cookiesPerHour());
  }
}
document.write(FirstNPike.totalDay);

  //document.write(total);

// console.log(this.cookiesPerHour());
// Console.log(SalmonCookies.cookiessPerHour());
