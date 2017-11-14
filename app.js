// Object literal
var FirstNPike = {
  min: 23,
  max: 65,
  avg: 6.3,
  salesResults: [ ],
  cookiesPerHour: function() {
  return Math.round((Math.random() * ( this.max - this.min) + this.min * this.avg));
  }
}

total = 0;
for(var i = 6; i < 21; i++) {
  if(i < 13){
    document.write(i + 'am: ' + FirstNPike.cookiesPerHour() + ' cookies\n');
    total += total;
    FirstNPike.salesResults.push(FirstNPike.cookiesPerHour());
  } else {
    document.write(i + 'pm: ' + FirstNPike.cookiesPerHour() + ' cookies\n');
    total += total;
    FirstNPike.salesResults.push(FirstNPike.cookiesPerHour());
  }
}

  //document.write(total);

// console.log(this.cookiesPerHour());
// Console.log(SalmonCookies.cookiessPerHour());
