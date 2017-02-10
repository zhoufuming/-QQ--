/* 轮播图的切换 */

(function(){

	var circleLi = $('#circle').children,
	sliderPics = {'src':['images/indexImg/sliderpic1.jpg','images/indexImg/sliderpic2.jpg','images/indexImg/sliderpic3.jpg','images/indexImg/sliderpic4.jpg','images/indexImg/sliderpic5.jpg'],'href':['#','#','#','#','#'],'title':['QQ召集令','QQ在线','企业QQ管理','企业QQ社区','客户感言']},
	num = leader = target = 0,
	Pictimer = Thrtimer = null;

	for (var i = 0; i < sliderPics.src.length; i++) {
		$('#sliderPic').innerHTML += '<li><a href="'+sliderPics.href[i]+' title="'+sliderPics.title[i]+'"><img src="'+sliderPics.src[i]+'" alt="pic"></a></li>';
		$('#circle').innerHTML += '<li>' + [ i + 1 ] + '</li>';
	}

	var sliderWidth = $('#slider').clientWidth;
	circleLi[num].className='active';
	// 初始化完成

	// 鼠标移入切换
	for (var i = 0; i < sliderPics.src.length; i++) {
		circleLi[i].index = i;

		circleLi[i].onmouseover = function(){
			var that = this;

			clearTimeout(Thrtimer);
			Thrtimer = setTimeout(function(){
				for (var i = 0; i < sliderPics.src.length; i++) {
					circleLi[i].className = '';
				}
				that.className = 'active';
				num = that.index;
				target = -that.index*sliderWidth;
			},300);
			
		};
	}

	autoSlider();

	// 鼠标移入定时器停止,移开恢复
	$('#slider').onmouseover = function(){
		clearInterval(Pictimer);
	};
	$('#slider').onmouseout = function(){
		autoSlider();
	};

	setInterval(function(){
			leader = leader + (target-leader)/8;
			$('#sliderPic').style.left = leader + 'px';
		},30);

	// 图片定时滑动
	function autoSlider(){
		Pictimer = setInterval(function(){	
			num++;
			if (num >= sliderPics.src.length) {
				num=0;
				leader = -sliderWidth;
			}

			target = -num*sliderWidth;

			for (var i = 0; i < sliderPics.src.length; i++) {
				circleLi[i].className = '';
			}

			circleLi[num].className = 'active';			
		},2500);
	}
})();
	
/* 头部广告盒子切换 */
(function(){
	var aA = $('#adFull').getElementsByTagName('a');
	var oSpan = $('#adFull').getElementsByTagName('span')[0];
	var adTabTimer = null;

	setTimeout(function(){adTab()},5000);
	aA[1].onclick = adTab;
	
	function adTab(){
		clearTimeout(adTabTimer);
		aA[1].style.display = 'none';
		doMove(document.body,'backgroundPositionY',50,40);
		
		doMove($('#adFull'),'height',50,40,function(){

			oSpan.style.display = 'block';
			$('#adFull').style.cssText = 'height:40px;background:url(images/indexImg/indexAdFullBg1.jpg) repeat-x;';
			$('#adFull').children[0].style.cssText = 'height:40px;background:url(images/indexImg/indexAdFull2.jpg);';
			aA[0].style.cssText = 'top: 2px;left: 950px;height: 37px; width: 123px;';
		});		
	}
})();
	
/* 底部幻灯片 */
(function(){
	var silderUl =  $('#leftList4').children[1];
	var silderarr = {'src':['images/indexImg/user_s_1.jpg','images/indexImg/user_s_2.jpg','images/indexImg/user_s_3.jpg','images/indexImg/user_s_4.jpg','images/indexImg/user_s_5.jpg','images/indexImg/user_s_6.jpg','images/indexImg/user_s_7.jpg','images/indexImg/user_s_8.jpg','images/indexImg/user_s_9.jpg','images/indexImg/user_s_10.jpg','images/indexImg/user_s_11.jpg','images/indexImg/user_s_12.jpg','images/indexImg/user_s_13.jpg','images/indexImg/user_s_14.jpg','images/indexImg/user_s_15.jpg','images/indexImg/user_s_16.jpg']};

	for (var i = 0; i < silderarr.src.length; i++) {
		silderUl.innerHTML+='<li><img src="'+silderarr.src[i]+'"></li>';
	}

	var cloneNum = Math.ceil($('#leftList4').offsetWidth/silderUl.children[0].offsetWidth);

	for (var i = 0; i < cloneNum; i++) {
		silderUl.appendChild(silderUl.children[i].cloneNode(true));
	}
	
	lanternSilder(silderUl,5,2400);
})();
	
