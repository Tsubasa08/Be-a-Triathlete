$(function(){
$('.humbergarIcon').click(function(){
  $('.global-navigation').slideToggle();
  if($(this).hasClass('open')) {
    $(this).html('<i class="fas fa-bars fa-lg"></i>');
    $(this).removeClass('open');
  } else {
    $(this).html('<i class="fas fa-times fa-lg"></i>');
    $(this).addClass('open');
  }
});












});
