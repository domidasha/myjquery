$(document).ready(function(){

	//hide- show
	$(".hide").click(function(){
		$(".lastOne").hide();
		$("li:odd").hide();
	})
	$(".show").click(function(){
		$(".lastOne").show();
		$("li:odd").show();
	})
	//contextmenu
	$("div.grey").contextmenu(function(){
		$("img").hide(1000);
		$("div.grey").text("* to See the picture made DoubleClick");
	})
	//dblclick
	$("div.grey").dblclick(function(){
		$("img").show("slow");
		$("div.grey").text("* to Hide the picture press Right Button");
	})
	//mouseenter - mouseleave
	$("img").mouseenter(function(){
		$("img").width(500);
		$(this).css("float", "left");
	})
	$("img").mouseleave(function(){
		$("img").width(250);
	})
	//mouse hover 
	$(".blockRed").hover(function(){
		$(".blockRed").removeClass("red");
		$(".blockRed").addClass("green");

	}, 
	function(){
		$(".blockRed").removeClass("green");
		$(".blockRed").addClass("red");
	})
	//input FOCUS-BLUR
	$("input").focus(function(){
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#4CAF50");
	})
	$("input").blur(function(){
		$(this).css("background-color", "#eee");
		$(this).css("color", "#000");
	})
	//fadeIn, fadeOut
	$("")
})
