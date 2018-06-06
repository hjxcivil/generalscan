window.onload = function(){
	var buttons = document.getElementById('show_button').getElementsByTagName('li');
	var box = document.getElementById('effect_box');
	var items = box.getElementsByClassName('item');
	for(var i=0; i<buttons.length;i++){
		 buttons[i].index = i;
		 buttons[i].onmouseover = function(){
			for(var j=0; j<items.length; j++){
				buttons[j].className = '';
				items[j].style.display = 'none'
			};
			this.className = 'select';
			items[this.index].style.display = 'block';
		}
	};
}

