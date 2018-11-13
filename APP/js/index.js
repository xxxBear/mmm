$(function () { 
  $("#get_more").on("click",function () { 
    $(this).nextAll().toggle();
   });
 });