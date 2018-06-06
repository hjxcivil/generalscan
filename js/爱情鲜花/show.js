$(document).ready(function(){
	$('.arrowC').click(function(e){
		$('.maskfcs').fadeOut();
	});
	$('.navBtn img').click(function(){
		var t = $(this);
		var i = $(this).index();
		var curU = t.attr('src');
		var curN = t.siblings().attr('src');
		$('.maskfcs').fadeIn();
		$('.maskMid').find('img').attr('src',curU);
		$('.maskL, .maskR').find('img').attr('src',curN);
		$('.iNum').html(i+1);
	});
	$('.maskL, .arrowL').click(function(){
		var oL = $('.maskL').find('img');
		var oS = oL.attr('src');
		
		var mI = $('.maskMid').find('img');
		var mS = mI.attr('src');
		
		var oR = $('.maskR').find('img');
		var orS = oR.attr('src');
		
		oR.hide();
		oL.animate({width:340,height:340,left:191,borderWidth:10},500).fadeOut(500,function(){
		oL.attr('src',mS);
		oR.attr('src',mS);
		oR.show();
		oL.css({width:300,height:300,left:0,borderWidth:5})
		}).fadeIn(500);
		
		mI.animate({width:300,height:300,left:432,borderWidth:5},500).fadeOut(500,function(){
			mI.attr('src',oS);
			mI.css({width:340,height:340,left:0,borderWidth:10})
		}).fadeIn(500,function(){
		});
		
		var inum = (mS == $('.navBtn img').first().attr('src'))? 2 : 1;
		$('.iNum').html(inum);
	});
	
	$('.maskR, .arrowR').click(function(){
		var oL = $('.maskL').find('img');
		var oS = oL.attr('src');
		
		var mI = $('.maskMid').find('img');
		var mS = mI.attr('src');
		
		var oR = $('.maskR').find('img');
		var orS = oR.attr('src');
		
		oL.hide();
		oR.animate({width:340,height:340,right:191,borderWidth:10},500).fadeOut(500,function(){
		oR.attr('src',mS);
		oL.attr('src',mS);
		oL.show();
		oR.css({width:300,height:300,right:0,borderWidth:5})
		}).fadeIn(500);
		
		mI.animate({width:300,height:300,left:-432,borderWidth:5},500).fadeOut(500,function(){
			mI.attr('src',orS);
			mI.css({width:340,height:340,left:0,borderWidth:10})
		}).fadeIn(500,function(){
		});
		
		var inum = (mS == $('.navBtn img').first().attr('src'))? 2 : 1;
		$('.iNum').html(inum);
	})
	

	
	
})
