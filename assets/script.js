const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


function imgBuilder(currentSlide){
	let newImg = document.createElement("img");
	let banner = document.getElementById("banner");

	banner.appendChild(newImg);

	newImg.classList.add("banner-img");
	newImg.src = currentSlide.image;
	newImg.setAttribute("alt",currentSlide.tagLine);
	
}

for (let i = 1; i < slides.length; i++) {
	const currentSlide = slides[i];
	imgBuilder(currentSlide);
}


const arrow_right = document.querySelector("#banner .arrow_right");
const arrow_left = document.querySelector("#banner .arrow_left");

const navsArrows = [arrow_left, arrow_right];

function arrowDirection(arrow) {
	if (arrow === arrow_right) {
		alert('droite');
	}
	else {
		alert('gauche');
	}
}

navsArrows.forEach(function (arrow) {
	arrow.addEventListener('click', function () {
		arrowDirection(arrow);
	}
	);
})

