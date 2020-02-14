
// SPAN FANTIC FOR H1 FIRST WORD
  window.onload = function() {

$(document).ready(function(){
 $('.h1').each(function(){
  let title = $(this);
  title.html( title.text().replace(/(^\w+)/,'<span>$1</span>') );
 });
});

// HAMBURGER MENU
	$(document).ready(function(){
		$('.hamburger-icon').click(function(){
			$('.hamburger-menu').toggle("show");
			$('.hamburger-menu').css('display' , 'block');
		});
	
		$('.close').click(function(){
			$('.hamburger-menu').remove("show");
	
		});
	})
  };
  

