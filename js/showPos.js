$(document).ready(function(){
	
	$('.imgCell').click(function(){
		$('.maskfcs').fadeIn();
		var curId = $(this).index();
		
		$('.iNum').html(curId+1);
		
		var arr = [];
		$(this).parent().find('img').each(function(){
			arr.push($(this).attr('src'))
		});
		function getNew(k){
			var arrC = new Array(5);
			arrC = [k-2, k-1, k, k+1, k+2];
			for(var i=0; i<5; i++){
				var cur = arrC[i];
				if(cur < 0){
					arrC[i] = cur + 8;
				}else if(cur > 7){
					arrC[i] = cur - 8;
				}
			}
			return arrC;
		}
		
		$('.posAll').find('img').each(function(index){
			var num = getNew(curId)[index];
			$(this).attr('src',arr[num]);
			
		})
		
		$('.arrowL, img.pos_2').click(function(){
			
			$('.posAll').find('img').each(function(index){
				var num = getNew(curId-1)[index];
				$(this).attr('src',arr[num]);
				
			});
			
			
			curId = curId -1 >= 0? curId -1 : curId + 7;
			
			$('.iNum').html(curId+1);
		})
		
		$('.arrowR, img.pos_4').click(function(){
			
			$('.posAll').find('img').each(function(index){
				var num = getNew(curId+1)[index];
				$(this).attr('src',arr[num]);
				
			})
			curId = curId +1  <=7? curId + 1 : curId - 7;
			
			$('.iNum').html(curId+1);
		})
		
		$('.arrowC').click(function(){
			$('.maskfcs').fadeOut()
		})
		
	})
	
	
})
