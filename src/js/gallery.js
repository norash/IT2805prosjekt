var images = document.querySelectorAll(".img");
var container = document.getElementById('container');
var overlay =  document.getElementById('overlay');
var stage = document.getElementById('slideWindow');
var current = 0;

function setListener(){
	for (var i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            overlay.style.display = "block";
            slideWindow.innerHTML = '<img src="'+this.children[0].children[0].src+'"><p>Use arrow keys to navigate</p>';
        };
    }
    overlay.addEventListener("click", function(){
        overlay.style.display = "none";
    });

    window.addEventListener("keydown", function(e){
        if(overlay.style.display == "block"){
        if(e.keyCode == 39){ // Right
            showNext(); 
        }
        else if(e.keyCode == 37){ // Left
            showPrev(); 
        }}
    });
}

function showNext(){
    var evObj = document.createEvent('Events');
    evObj.initEvent("click", true, false);
    
    current = (current + 1)%images.length
    images[ current ].dispatchEvent(evObj);
}

function showPrev(){
    var evObj = document.createEvent('Events');
    evObj.initEvent("click", true, false);
    
    current = (images.length + current - 1)%images.length
    images[ current ].dispatchEvent(evObj);
}


window.addEventListener("load", function(){
	setListener();
});

