'use strict';

//1. 풀페이지 스크롤
	$(function() {
		$('#fullpage').fullpage({
			fingersonly: true,
			scrollingSpeed: 1200,
			anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage',],
			menu: '.rightNav'
		});
	});


