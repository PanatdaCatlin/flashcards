$(function() {
  $(".clickable").click(function (){
    $(this).children("h5").toggle();
    $(this).children("p").toggle();
  });
});
