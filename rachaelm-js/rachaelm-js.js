// var aboutme1 = [
// {
// 	"pic" : "https://d2w9rnfcy7mm78.cloudfront.net/16271350/original_11940c4fe8361272354567dc9c545e3a.png?1651259367?bc=0"
// 	"title" : "About me"
// 	"color" : "#ff00ff"
// },
// {

// }]


let aboutme = document.getElementById("aboutme");
let footer = document.getElementById("footer");
footer.addEventListener("click", hideFooter);
aboutme.addEventListener("click", showFooter);
function hideFooter(){
	footer.style.display = "none";
}

function showFooter(){
	console.log("clicked");
	footer.style.display = "block";
}




let digital = document.getElementById("digital");
let digitalinfo = document.getElementById("digitalinfo");
digitalinfo.addEventListener("click", hideDigitalinfo);
digital.addEventListener("click", showDigitalinfo);
function hideDigitalinfo(){
	digitalinfo.style.display = "none";
}

function showDigitalinfo(){
	console.log("clicked");
	digitalinfo.style.display = "block";
}


let print = document.getElementById("print");
let printinfo = document.getElementById("printinfo");
printinfo.addEventListener("click", hidePrintinfo);
print.addEventListener("click", showPrintinfo);
function hidePrintinfo(){
	printinfo.style.display = "none";
}
function showPrintinfo(){
	console.log("clicked");
	printinfo.style.display = "block";
}



let illustration = document.getElementById("illustration");
let illustrationinfo = document.getElementById("illustrationinfo");
illustrationinfo.addEventListener("click", hideIllustrationinfo);
illustration.addEventListener("click", showIllustrationinfo);
function hideIllustrationinfo() {
	illustrationinfo.style.display = "none";
	}
	function showIllustrationinfo() {
		illustrationinfo.style.display = "block";
	}












var mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
} 
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



// $('.newLayout1').click(function(){
// 	$('img').css({'max-width' : '600px'})
// 	$('img').css({'max-height' : '600px'})
// 	$('.objectsArray').css({'width' : '1000px'})
// 	.css({'position' : 'center'})
// 	.css({'align-items' : 'column'})

// })