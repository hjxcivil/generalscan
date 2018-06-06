$(document).ready(function(){
	$('.itemCell').click(function(){
		$('.shopArea').show();
		$('.shopNum').val(1);
		aChange($(this).index());
		
	$('.iClose').click(function(){
		$('.shopArea').hide();
	})
		
	$('.up').click(function(){
	  var num = parseInt($('.shopNum').val());
	  num = num+1;
	  $('.shopNum').val(num);
	  
	  
	})
	
	$('.down').click(function(){
	  var num = parseInt($('.shopNum').val());
	  num = num- 1 >1 ?num -1:1;
	  $('.shopNum').val(num)
	})
	});
		
		$('.shopThumb img').click(function(){
		aChange($(this).index());
	});
	
	$('.shopThumb img').each(function(){
		$(this).attr('id',$(this).index());
	})
	
	$('.prev').click(function(){
		aChange(getNew(-1))	
		})
	
	$('.next').click(function(){
		aChange(getNew(1))	
		})
	
	function getNew(offset){
		var curImg = $('.shopThumb img.addOn');
		var curId = parseInt(curImg.attr('id'));
		var newId = curId + offset;
		var maxId = curImg.siblings(':last').attr('id');
		if(newId < 0){
			newId = maxId;
		}else if(newId > maxId){
			newId = 0
		}
		return newId
	}
	
	
	function aChange(k){
		$('.shopImg img').attr('src',$('.itemCell img').eq(k).attr('src'));
		$('.shopTit a').html($('.itemCell').find('.item_text a').eq(k).text());
		$('.shopThumb img').eq(k).addClass('addOn').siblings().removeClass('addOn');
	}
	
	
	
	
	
	
})
