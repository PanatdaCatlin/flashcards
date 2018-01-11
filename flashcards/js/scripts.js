$(function() {
  $(".clickable").click(function (){
    $(this).find(".front").toggle();
    $(this).find(".back").toggle();
  });
});
