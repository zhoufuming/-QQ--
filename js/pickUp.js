// 回到顶部
(function(){
	var returnTopPic = $("#returntop").children[0];

	$("#returntop").onmouseover = function(){
		returnTopPic.src = './images/indexImg/returntop2.png';
	};

	$("#returntop").onmouseout = function(){
		returnTopPic.src = './images/indexImg/returntop1.png';
	};

	pickUpSpeed($("#returntop"),10);
})();


