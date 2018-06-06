$(document).ready(function(){
	$('.tabList').find('li').mouseover(function(){
		$(this).addClass('select').siblings().removeClass('select');
		$('div.item_box > div').hide().eq($(this).index()).show();
	})
})
