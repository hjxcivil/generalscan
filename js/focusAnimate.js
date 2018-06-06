$(document).ready(function(){
	var Img1 = 'url(img/AD0Ig-H2BBACGAAg-qyfvgUo8KWAogUwgA84vAU.jpg)';
	var Img2 = 'url(img/AD0Ig-H2BBACGAAgh62fvgUoiZ36kgQwgA84vAU.jpg)';
	
	var i = false;
	var newImg;
	
	$('.iBox i').click(function(){
		
		$('.imgCont').fadeOut(1000,function(){
			var currentImg = $(this).css('background-image');
				newImg = i? Img1:Img2;
			
			$(this).css('background-image',newImg)}
		).fadeIn(1000)
		i = !i;
	});
	

//	$('.i_pre').click(function(){
//		$('.imgCont').append("<img class='fake' />");
//		$('.fake').attr('src','img/AD0Ig-H2BBACGAAg-qyfvgUo8KWAogUwgA84vAU.jpg');
//		$('.fake').css({width: '100%', height:'100%', position: 'absolute',left:'100%'})
////		alert($('.fake').attr('src'))
//		$('.imgCont').animate({left:'-=100%'},2000);
//		
//	})
	
})
