var flight = require('./flight');
var pdxlar = {
    number: 1,
    origin: 'PDX',
    destination: 'LAX',
}

var pl = flight(pdxlar);

console.log(pl.getInfo());

var vmn = {
    number: 2,
    origin: 'WMN',
    destination: 'LAX',
}

var wmn = flight(vmn);

console.log(wmn.getInfo());