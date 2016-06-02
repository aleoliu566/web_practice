$(document).ready(function(){

	$('body').scrollspy({ target: '.navbar', offset:100});

	$("#navHome").on("click",function(){
		$('html, body').animate({
		    scrollTop: $("#home").offset().top-80}, 750);  // 750是滑動的時間，單位為毫秒
		    e.preventDefault();
	})
	$("#navOldStreet").on("click",function(){
		$('html, body').animate({
		    scrollTop: $("#oldStreet").offset().top-80}, 750);  // 750是滑動的時間，單位為毫秒
		    e.preventDefault();
	})
	$("#navView").on("click",function(){
		$('html, body').animate({
		    scrollTop: $("#view").offset().top-80}, 750);  // 750是滑動的時間，單位為毫秒
		    e.preventDefault();
	})
	$("#navFood").on("click",function(){
		$('html, body').animate({
		    scrollTop: $("#food").offset().top-80}, 750);  // 750是滑動的時間，單位為毫秒
		    e.preventDefault();
	})
	$("#navSchedule").on("click",function(){
		$('html, body').animate({
		    scrollTop: $("#schedule").offset().top-80}, 750);  // 750是滑動的時間，單位為毫秒
		    e.preventDefault();
	})
})