/* 左侧li的切换 */
(function(){
	var oLeft = document.getElementById('left');
	var aLi = oLeft.getElementsByTagName('li');
	var aA = oLeft.getElementsByTagName('a');

	for (var i = 0; i < aLi.length; i++) {

		aLi[i].index = i;
		aLi[i].onclick = function(){

			for (var i = 0; i < aLi.length; i++) {
				aLi[i].className = '';
			}
			this.className = 'active';

			// 让li背景图片的偏移量，随着子元素a的宽度来变换
			this.style.backgroundPosition = aA[this.index].offsetWidth+10+'px 5px';
		};
	}
})();
	
