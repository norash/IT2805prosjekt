var image = document.getElementById("slideshow");
var slideURLs = ['img/IMG_8189bw.JPG', 'img/IMG_7217bw.JPG', 'img/IMG_7211bw.jpg', 'img/IMG_5547bw.JPG', 'img/130126-grindbyggBW.jpg'];
var slides = [];

var startSlide;
var startFadeOut;
var startFadeIn;

function loadImage(){
		for(var i = 0; i < slideURLs.length; i++){
		var img = new Image();
		img.src = slideURLs[i];
		slides[i] = img;
		
	}
	startFadeOut = setTimeout(timeout, 3000); 
}
var a = 80;
var startFadeOut;
function out(){
	console.log("fadeout started");
	var fadeout = 0.005 + ((0.1-0.005)/9)*(a-1);
	image.style.opacity = fadeout;
	a -= 1;
	console.log(fadeout);
	if(a == 3){
		console.log("fadeOut stopped");
		a = 80;
		changeSlide();
		startFadeIn = setInterval(inn, 50);
		clearInterval(startFadeOut);
		
	}
}

var b = 3;
function inn(){
	console.log("fadein started");
	var fadein = 0.005 + ((0.1-0.005)/9)*(b-1)
	image.style.opacity = fadein;
	b += 1;
	console.log(fadein);
	if(b == 80){
		console.log("fadeIn stopped");
		b = 3;
		startFadeOut = setTimeout(timeout,5000);
		clearInterval(startFadeIn);
	}
}

function timeout(){
	startFadeOut = setInterval(out, 30);
}

var i = 0;
function changeSlide(){
	
	image.style.backgroundImage = "url("+slideURLs[i]+")";
	

	//image.style.backgroundImage = slides[i];
	//console.log(slides[i]);
	if(i < slides.length-1){
		i++;
		console.log(slides[i]);
	}
	else{
		i = 0;
	}
	
};


window.addEventListener("load", function() {
	image.style.backgroundImage = "url("+slideURLs[slideURLs.length-1]+")";
	loadImage();
});