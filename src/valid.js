/*
FILE NAME: valid.js
WRITTEN BY: Jonas Thorsen
WHEN: November 2015
PURPOSE: JavaScript for form validation
*/


document.getElementById("send").addEventListener('click',function(){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(tlfInput.value.length==0 && epostInput.value.length==0){
		document.getElementById("warning").innerHTML = "Vær snill å oppgi enten e-postadresse eller telefonnummer <br> så vi kan svare deg.";
		return false;
	}
	else{
		document.getElementById("warning").innerHTML = "";  
		if(epostInput.value.match(mailformat)){
			epostInput.focus();  
			return true;  
		} 
		else if(epostInput.value.length==0){
			epostInput.focus();
			return true;
		}
		else{  
			document.getElementById("warning").innerHTML = "Hei";  
			epostInput.focus();  
			return false;  
		}  
	}
});