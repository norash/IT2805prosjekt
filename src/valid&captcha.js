/*
FILE NAME: valid.js
WRITTEN BY: Jonas Thorsen og Mats Sæter
WHEN: November 2015
PURPOSE: JavaScript for form validation and captcha
*/

window.onload = function(){
	document.getElementById("validation").style.display = "none";
	document.getElementById("validate").style.display = "none";
}

// Form validation
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var numberformat = /^[0-9,]+$/;

// Captcha
var canvas = document.getElementById("captchan");
var ctx = canvas.getContext("2d");
function randomPick(){
	var bilde = Math.floor(Math.random()*10);

	if (bilde == 0){
		var noll = new Image();
		noll.src = "img/captcha/noll.jpg";
		var tall0 = '0';
		return [noll, tall0];
	}
	if (bilde == 1){
		var en = new Image();
		en.src = "img/captcha/en.jpg";
		var tall1 = '1';
		return [en, tall1];
	}
	if (bilde == 2){
		var to = new Image();
		to.src = "img/captcha/to.jpg";
		var tall2 = '2';
		return [to, tall2];
	}
	if (bilde == 3){
		var tre = new Image();
		tre.src = "img/captcha/tre.jpg";
		var tall3 = '3';
		return [tre, tall3];
	}
	if (bilde == 4){
		var fire = new Image();
		fire.src = "img/captcha/fire.jpg";
		var tall4 = '4';
		return [fire, tall4];
	}
	if (bilde == 5){
		var fem = new Image();
		fem.src = "img/captcha/fem.jpg";
		var tall5 = '5';
		return [fem, tall5];
	}
	if (bilde == 6){
		var seks = new Image();
		seks.src = "img/captcha/seks.jpg";
		var tall6 = '6';
		return [seks, tall6];
	}
	if (bilde == 7){
		var sju = new Image();
		sju.src = "img/captcha/sju.jpg";
		var tall7 = '7';
		return [sju, tall7];
	}
	if (bilde == 8){
		var otte = new Image();
		otte.src = "img/captcha/otte.jpg";
		var tall8 = '8';
		return [otte, tall8];
	}
	if (bilde == 9){
		var ni = new Image();
		ni.src = "img/captcha/ni.jpg";
		var tall9 = '9';
		return [ni, tall9];
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

var gyldigSum = x+y+z;


forsteBilde.onload = function() {
	ctx.drawImage(forsteBilde, 0, 0, 120, 120);
};
andreBilde.onload = function() {
	ctx.drawImage(andreBilde, 120, 0, 120, 120);
};
tredjeBilde.onload = function() {
	ctx.drawImage(tredjeBilde, 240, 0, 120, 120);
};
var verdi = document.getElementById("inputPlass");


// Form validation
document.getElementById("send").addEventListener('click',function(event){
	document.getElementById("navnInput").style.borderColor = "#453823";
	document.getElementById("tlfInput").style.borderColor = "#453823";
	document.getElementById("epostInput").style.borderColor = "#453823";
	document.getElementById("postnr").style.borderColor = "#453823";
	document.getElementById("foresporselInput").style.borderColor = "#453823";
	if(navnInput.value.length===0){
		document.getElementById("warning").innerHTML = "Vennligst skriv inn navnet ditt.";
		document.getElementById("navnInput").style.borderColor = "red";
		event.preventDefault();
	}else if(tlfInput.value.length===0 && epostInput.value.length===0){
		document.getElementById("warning").innerHTML = "Vennligst oppgi enten e-postadresse eller <br>telefonnummer så vi kan svare deg.";
		document.getElementById("tlfInput").style.borderColor = "red";
		document.getElementById("epostInput").style.borderColor = "red";
		event.preventDefault();
	}else if(tlfInput.value.match(numberformat)==null && tlfInput.value.length!==0){
		document.getElementById("warning").innerHTML = "Dette er ikke et gyldig telefonnummer.";
		document.getElementById("tlfInput").style.borderColor = "red";
		event.preventDefault();
	}else if(epostInput.value.match(mailformat)==null && epostInput.value.length!==0){
		document.getElementById("warning").innerHTML = "Dette er ikke en gyldig epost-adresse.";
		document.getElementById("epostInput").style.borderColor = "red";
		event.preventDefault();
	}else if(postnr.value.match(numberformat)==null && postnr.value.length!==0){
		document.getElementById("warning").innerHTML = "Postnummeret kan bare inneholde tall.";
		document.getElementById("postnr").style.borderColor = "red";
		event.preventDefault();
	}else if(foresporselInput.value==''){
		document.getElementById("warning").innerHTML = "Vennligst skriv hva vi kan hjelpe deg med <br>i forespørsel-feltet.";
		document.getElementById("foresporselInput").style.borderColor = "red";
		event.preventDefault();
	}else{
		// Captcha
		document.getElementById("warning").innerHTML = "";
		document.getElementById("validation").style.display = "initial";
		document.getElementById("validate").style.display = "initial";
		document.getElementById("send").style.display = "none";
		event.preventDefault();
	}
});



// Captcha
document.getElementById("validate").addEventListener('click',function(event){
	if(verdi.value != gyldigSum){
		event.preventDefault();
		
		document.getElementById("inputPlass").value = "";
		document.getElementById("inputPlass").placeholder = "Prøv igjen.";
		
		bilde1 = randomPick();
		forsteBilde = bilde1[0];
		x = bilde1[1];
		
		bilde2 = randomPick();
		andreBilde = bilde2[0];
		y = bilde2[1];

		bilde3 = randomPick();
		tredjeBilde = bilde3[0];
		z = bilde3[1];

		gyldigSum = x + y + z;
		
		forsteBilde.onload = function() {
			ctx.drawImage(forsteBilde, 0, 0, 120, 120);
		};
		andreBilde.onload = function() {
			ctx.drawImage(andreBilde, 120, 0, 120, 120);
		};
		tredjeBilde.onload = function() {
			ctx.drawImage(tredjeBilde, 240, 0, 120, 120);
		};
	};
});
