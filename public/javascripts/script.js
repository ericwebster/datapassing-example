$(document).ready(function(){
// Here we want to search the page for all links and iframes.
// we want to push them through the redirector but we want to preserve all data on URI's 
  $("a").each(function(){
    var href = $(this).attr("href");
    if(!href.indexOf("http")){
		var redirect = "/redirect/?uri=" + encodeURIComponent(href);    
	    $(this).attr("href", redirect);
    }
    
  })

  $("iframe").each(function(){
    var src = $(this).attr("src");
    if(!src.indexOf("http")){
	    var redirect = "/redirect/?uri=" + encodeURIComponent(src);    
	    $(this).attr("src", redirect);
	}
  })
  
})