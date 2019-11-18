$(document).ready(function(){
	$(".burger").click(function(){
		$(".main-nav").toggleClass("main-nav-open")
		$("header").toggleClass("menu-open")
	});
})