var $ = require('jquery');
var a = require('./area.js');

console.log(a.area(10))
console.log(a.perimeter(20));

$(document).ready(function(){
  var area, perimeter;
  var wrapper = $('#wrapper');
  area = $('<p />').text('Area: ' + a.area(10));
  perimeter = $('<p />').text('Perimeter: ' + a.perimeter(20));
  area.append(perimeter)
  wrapper.html(area);
});
