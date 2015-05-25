var main = function () {
	"use strict";

	/* Navigation */
 	$("li").click(function(){
 		var target = this.hash;
	    var $target = $(target);
	    $("html, body").stop().animate({"scrollTop": $target}, 900, "swing");
 	});

 	
 	/*Slideshow*/
 	//coming soon


 	/*Hotsots*/
 	$("#binnensporten").on("click", function(){
 		$(".categorie ul li").removeClass("huidig");
 		$(this).addClass("huidig");
 		$(".spots").addClass("hidden");
 		$(".binnensporten").removeClass("hidden");
 		$(".hotspottext").text("");
 		$(".spots ul li").removeClass("current");
 		$(".hotspotfoto").addClass("hidden");
 	});

 	$("#buitensporten").on("click", function(){
 		$(".categorie ul li").removeClass("huidig");
 		$(this).addClass("huidig");
 		$(".spots").addClass("hidden");
 		$(".buitensporten").removeClass("hidden");
 		$(".hotspottext").text("");
 		$(".spots ul li").removeClass("current");
 		$(".hotspotfoto").addClass("hidden");
 	});

 	$("#shops").on("click", function(){
 		$(".categorie ul li").removeClass("huidig");
 		$(this).addClass("huidig");
 		$(".spots").addClass("hidden");
 		$(".shops").removeClass("hidden");
 		$(".hotspottext").text("");
 		$(".spots ul li").removeClass("current");
 		$(".hotspotfoto").addClass("hidden");
 	});

 	$("#lichaam").on("click", function(){
 		$(".categorie ul li").removeClass("huidig");
 		$(this).addClass("huidig");
 		$(".spots").addClass("hidden");
 		$(".lichaam").removeClass("hidden");
 		$(".hotspottext").text("");
 		$(".spots ul li").removeClass("current");
 		$(".hotspotfoto").addClass("hidden");
 	});

 	$(".spots ul li").on("click", function(){
 		var tekst = $(this).data("par");
 		$(".hotspottext").text(tekst);
 		$(".spots ul li").removeClass("current");
 		$(this).addClass("current");

 		var foto = $(this).id+("F");
 		$(".hotspotfoto").addClass("hidden");
 		
 		switch($(this).data("name")){

 			case "BiSp1":
 				$(".BiSp1F").removeClass("hidden");
 				break;

 			case "BiSp2":
 				$(".BiSp2F").removeClass("hidden");
 				break;

 			case "BiSp3":
 				$(".BiSp3F").removeClass("hidden");
 				break;

 			case "BiSp4":
 				$(".BiSp4F").removeClass("hidden");
 				break;

 			case "BiSp5":
 				$(".BiSp5F").removeClass("hidden");
 				break;

 			case "BiSp6":
 				$(".BiSp6F").removeClass("hidden");
 				break;

 			case "BiSp7":
 				$(".BiSp7F").removeClass("hidden");
 				break;


 			case "BuSp1":
 				$(".BuSp1F").removeClass("hidden");
 				break;

 			case "BuSp2":
 				$(".BuSp2F").removeClass("hidden");
 				break;


 			case "Shop1":
 				$(".Shop1F").removeClass("hidden");
 				break;

 			case "Shop2":
 				$(".Shop2F").removeClass("hidden");
 				break;


 			case "Lich1":
 				$(".Lich1F").removeClass("hidden");
 				break;

 			case "Lich2":
 				$(".Lich2F").removeClass("hidden");
 				break;

 			case "Lich3":
 				$(".Lich3F").removeClass("hidden");
 				break;

 			case "Lich4":
 				$(".Lich4F").removeClass("hidden");
 				break;

 			case "Lich5":
 				$(".Lich5F").removeClass("hidden");
 				break;


 		}
 	});


	setInterval(function () {

		//ad1
		if ($(".adv1").hasClass("ad1")){
			$(".adv1").fadeOut(500);
			setTimeout(function(){
				$(".adv1").removeClass("ad1");
				$(".adv1").addClass("ad2");
				$(".adv1").attr("src", "images/ad2.jpg");
			}, 600);
			setTimeout(function(){
				$(".adv1").fadeIn(500);
			}, 1000)

		}

		else if ($(".adv1").hasClass("ad2")){
			$(".adv1").fadeOut(500);
			setTimeout(function(){
				$(".adv1").removeClass("ad2");
				$(".adv1").addClass("ad3");
				$(".adv1").attr("src", "images/ad3.jpg");
			}, 600);
			setTimeout(function(){
				$(".adv1").fadeIn(500);
			}, 1000)
		}

		else if ($(".adv1").hasClass("ad3")){
			$(".adv1").fadeOut(500);
			setTimeout(function(){
				$(".adv1").removeClass("ad3");
				$(".adv1").addClass("ad4");
				$(".adv1").attr("src", "images/ad4.jpg");
			}, 600);
			setTimeout(function(){
				$(".adv1").fadeIn(500);
			}, 1000);
		}

		else{
			$(".adv1").fadeOut(500);
			setTimeout(function(){
				$(".adv1").removeClass("ad4");
				$(".adv1").addClass("ad1");
				$(".adv1").attr("src", "images/ad1.jpg");
			}, 600);
			setTimeout(function(){
				$(".adv1").fadeIn(500);
			}, 1000);
		}
	

	}, 10000);

 };

$("document").ready(main);