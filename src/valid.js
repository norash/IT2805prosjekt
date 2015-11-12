/*
FILE NAME: valid.js
WRITTEN BY: Jonas Thorsen
WHEN: November 2015
PURPOSE: JavaScript for form validation
*/


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var numberformat = /^[0-9,]+$/;

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
		document.getElementById("warning").innerHTML = "Vennligst oppgi enten e-postadresse eller telefonnummer <br> så vi kan svare deg.";
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
		document.getElementById("warning").innerHTML = "Vennligst skriv hva vi kan hjelpe deg med i forespørsel-feltet.";
		document.getElementById("foresporselInput").style.borderColor = "red";
		event.preventDefault();
	}
});
