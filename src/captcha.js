/**/<!--
FILE NAME: captcha.js
WRITTEN BY:  Mats Sæter
WHEN:  November 2015
PURPOSE:  This will make the captcha for the "kontakt.html" page. 
-->
/**/



randomPick function(){
	var1 = Math.floor(Math.random()*10);
	var2 = Math.floor(Math.random()*10);
	var3 = Math.floor(Math.random()*10);
	
	if (var1 == 0 || var2 == 0 || var3 == 0){
		var noll = new Image();
		noll.src = "img/noll.jpg";
	}
	if (var1 == 1 || var2 == 1 || var3 == 1){
		var en = new Image();
		en.src = "img/en.jpg";
	}
	if (var1 == 2 || var2 == 2 || var3 == 2){
		var to = new Image();
		to.src = "img/to.jpg";
	}
	if (var1 == 3 || var2 == 3 || var3 == 3){
		var tre = new Image();
		tre.src = "img/tre.jpg";
	}
	if (var1 == 4 || var2 == 4 || var3 == 4){
		var fire = new Image();
		fire.src = "img/fire.jpg";
	}
	if (var1 == 5 || var2 == 5 || var3 == 5){
		var fem = new Image();
		fem.src = "img/fem.jpg";
	}
	if (var1 == 6 || var2 == 6 || var3 == 6){
		var seks = new Image();
		seks.src = "img/seks.jpg";
	}
	if (var1 == 7 || var2 == 7 || var3 == 7){
		var sju = new Image();
		sju.src = "img/sju.jpg";
	}
	if (var1 == 8 || var2 == 8 || var3 == 8){
		var otte = new Image();
		otte.src = "img/otte.jpg";
	}
	if (var1 == 9 || var2 == 9 || var3 == 9){
		var ni = new Image();
		ni.src = "img/ni.jpg";
	}
	

	
	for (i=0; i<10; i++){
		if (var1 == i){
			
		}
	}
}