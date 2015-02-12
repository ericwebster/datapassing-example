$(document).ready(function(){

  $("iframe").each(function(){
    var src = "/redirect/?url=" + $(this).attr("src");
    $(this).attr("src", src);
  })
  
})