/* ----------------------------------

Name: custom.js

------------------------------------- */


/*====================================================


	Table of Contents
	
		01. Loading Screen
		
		02. Audio Player
		
		03. Counter

		04. Scroll to top
		

*/



jQuery(document).ready(function($) {
	"use strict";



/*======================

	01. Loading Screen

========================*/

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0);




/*======================

	02. Audio Player

========================*/


	$( 'audio' ).audioPlayer();
	

	
/*======================

	03. Counter

========================*/


	$(function() {
		animatecounters()
	});

	function animatecounters() {
		$(".timer").each(function(a) {
			var b = $(this);
			a = $.extend({}, a || {}, b.data("countToOptions") || {}), b.countTo(a)
		})
	}
	$(".timer").appear(), $(document.body).on("appear", ".timer", function() {
		$(this).hasClass("appear") || (animatecounters(), $(this).addClass("appear"))
	});
		
	
/*======================

	04. Scroll to top

========================*/	
	
	
	$(window).scroll(function() {
		50 <= $(this).scrollTop() ? $("#return-to-top, #social-links").fadeIn(200) : $("#return-to-top").fadeOut(200)
	}), $("#return-to-top, #social-links").on("click", function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500)
	});
	

	
});