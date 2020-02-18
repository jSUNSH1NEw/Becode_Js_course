/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa',
    curvedLines: false,
    density: 7500,

  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});