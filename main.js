
// exercise 3:
// $('.color-change').click(function() {
//     $('.box').toggleClass('red');
// });

//doesn't work:
// $('color-change').click(colorChange());
//
// function colorChange() {
//   $('.box').toggleClass('red');
// }


// exercise 4:

$('#green').hover(function() {
  $('.box').toggleClass('box-green')
})

$('#red').hover(function() {
  $('.box').toggleClass('box-red')
})

$('#blue').hover(function() {
  $('.box').toggleClass('box-blue')
})

$('#orange').hover(function() {
  $('.box').toggleClass('box-orange')
})

$('#grey').hover(function() {
  $('.box').toggleClass('box-grey')
})
