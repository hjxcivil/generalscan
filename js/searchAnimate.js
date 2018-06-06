$(document).ready(function(){
	$('.item_img, .imgCell').hover(function(){
		$(this).find('i').stop().fadeToggle(500)
	})	
})

