/*
FILE NAME: "captcha.js"
WRITTEN BY:  Mats Sæter
WHEN:  November 2015
PURPOSE:  This will make the captcha for the "kontakt.html" page. 
*/


var canvas = document.getElementById("captchan");
var ctx = canvas.getContext("2d");
var condition = false;
	

	function randomPick(){
		var bilde = Math.floor(Math.random()*10);
	
		if (bilde == 0){
			var noll = new Image();
			noll.src = "img/captcha/noll.jpg";
			var x = '0';
			return [noll, x];
		}
		if (bilde == 1){
			var en = new Image();
			en.src = "img/captcha/en.jpg";
			var x = '1';
			return [en, x];
		}
		if (bilde == 2){
			var to = new Image();
			to.src = "img/captcha/to.jpg";
			var x = '2';
			return [to, x];
		}
		if (bilde == 3){
			var tre = new Image();
			tre.src = "img/captcha/tre.jpg";
			var x = '3';
			return [tre, x];
		}
		if (bilde == 4){
			var fire = new Image();
			fire.src = "img/captcha/fire.jpg";
			var x = '4';
			return [fire, x];
		}
		if (bilde == 5){
			var fem = new Image();
			fem.src = "img/captcha/fem.jpg";
			var x = '5';
			return [fem, x];
		}
		if (bilde == 6){
			var seks = new Image();
			seks.src = "img/captcha/seks.jpg";
			var x = '6';
			return [seks, x];
		}
		if (bilde == 7){
			var sju = new Image();
			sju.src = "img/captcha/sju.jpg";
			var x = '7';
			return [sju, x];
		}
		if (bilde == 8){
			var otte = new Image();
			otte.src = "img/captcha/otte.jpg";
			var x = '8';
			return [otte, x];
		}
		if (bilde == 9){
			var ni = new Image();
			ni.src = "img/captcha/ni.jpg";
			var x = '9';
			return [ni, x];
		}	
	}

	
	var bilde1 = randomPick();
	var forsteBilde = bilde1[0];
	var x = bilde1[1];
	
	var bilde2 = randomPick();
	var andreBilde = bilde2[0];
	var y = bilde2[1];
	
	var bilde3 = randomPick();
	var tredjeBilde = bilde3[0];
	var z = bilde3[1];
	
	var gyldigSum = x + y + z;

	
	forsteBilde.onload = function() {
        ctx.drawImage(forsteBilde, 0, 0, 120, 120);
    }
	andreBilde.onload = function() {
		ctx.drawImage(andreBilde, 120, 0, 120, 120);
	}
	tredjeBilde.onload = function() {
		ctx.drawImage(tredjeBilde, 240, 0, 120, 120);
	}
	
	var verdi = document.getElementById("inputPlass");
	
	setInterval(function sjekk(){
		if(verdi.value == gyldigSum){
			condition = true;
		}
		else{
			condition = false;
		}
	},500);

	
	



