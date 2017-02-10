/* 案例的切换 */
(function(){
	var TabUl = $('#famousCase').children[0];
	var FamousUl = $('#famousCase').children[0];
	var Logoarr = ['images/caseImg/logo_01.png','images/caseImg/logo_02.png','images/caseImg/logo_03.png','images/caseImg/logo_04.png','images/caseImg/logo_05.png','images/caseImg/logo_06.png','images/caseImg/logo_07.png','images/caseImg/logo_08.png','images/caseImg/logo_09.png','images/caseImg/logo_10.png','images/caseImg/logo_11.png','images/caseImg/logo_12.png','images/caseImg/logo_13.png','images/caseImg/logo_14.png','images/caseImg/logo_15.png','images/caseImg/logo_16.png','images/caseImg/logo_17.png','images/caseImg/logo_18.png','images/caseImg/logo_19.png','images/caseImg/logo_20.png','images/caseImg/logo_21.png','images/caseImg/logo_22.png','images/caseImg/logo_23.png','images/caseImg/logo_24.png','images/caseImg/logo_25.png','images/caseImg/logo_26.png','images/caseImg/logo_27.png','images/caseImg/logo_28.png','images/caseImg/logo_29.png','images/caseImg/logo_30.png','images/caseImg/logo_31.png','images/caseImg/logo_32.png'];

	// 初始化 遍历li
	for (var i = 0; i < Logoarr.length; i++) {
		FamousUl.innerHTML += '<li><a href="#"><img src="'+Logoarr[i]+'" alt="pic"></a></li>';
	}

	// Tab切换
	$('#caseTab').children[0].onclick = function(){
		for (var i = 0; i < $('#caseTab').children.length; i++) {
			$('#caseTab').children[i].className = '';
		}
		this.className ='selected';
		$('#lessCase').style.display = 'block';
		$('#famousCase').style.display = 'none';
	};

	$('#caseTab').children[1].onclick = function(){
		for (var i = 0; i < $('#caseTab').children.length; i++) {
			$('#caseTab').children[i].className = '';
		}
		this.className ='selected';
		$('#lessCase').style.display = 'none';
		$('#famousCase').style.display = 'block';
	};
})();
	
