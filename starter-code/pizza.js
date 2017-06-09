// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $('.btn-pepperonni').click(function() {
    $('.pep').toggle();
    $('.panel.price ul li:nth-child(1)').fadeToggle(300);
  });
  $('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle();
    $('.panel.price ul li:nth-child(3)').fadeToggle(300);
  });
  $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle();
    $('.panel.price ul li:nth-child(2)').fadeToggle(300);
  });
  $('.btn-sauce').click(function() {
    $('.sauce').toggleClass('sauce-white');
    $('.panel.price ul li:nth-child(4)').fadeToggle(300);
  });
  $('.btn-crust').click(function() {
    $('.crust').toggleClass('crust-gluten-free');
    $('.panel.price ul li:nth-child(5)').fadeToggle(300);
  });
  $('.btn').click(function() {
      $(this).toggleClass('active');
  });
});
