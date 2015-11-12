/*
FILE NAME: salg.js
WRITTEN BY: Jonas Thorsen og Mats Sæter
WHEN: November 2015
PURPOSE: JavaScript to calculate grindbygg prices
*/

var type = document.getElementById("typeValg");
var tresort = document.getElementById("tresortValg");
var taktekke = document.getElementById("taktekkeValg");
var bekledning = document.getElementById("bekledningValg");
var fundament = document.getElementById("fundamentValg");

document.getElementById("prisKnapp").addEventListener('click',function(){
	var pris = (parseFloat(type.value) * parseFloat(tresort.value) * parseFloat(taktekke.value) * parseFloat(bekledning.value) * parseFloat(fundament.value));
	var omtrentPris = ((Math.round(pris / 100))*100);
	document.getElementById("prisOutput").innerHTML = omtrentPris+",-";
	
	
});