const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_right = document.querySelector("#banner .arrow_right");
const arrow_left = document.querySelector("#banner .arrow_left");
const navsArrows = [arrow_left, arrow_right];

let currentSlideIndex = 0;

//#region Image/dot generation
function addImgAndDot(slide, currentSlide) {

	const newDot = document.createElement("span")
	const newImg = document.createElement("img");
	const banner = document.getElementById("banner");
	const dotContainer = document.querySelector(".dots")

	// s'occupe de la création de <img>
	banner.appendChild(newImg);
	newImg.src = slide.image;
	newImg.classList.add("banner-img");	
	newImg.setAttribute("alt", slide.tagLine);
	newImg.style.opacity =0;

	// s'occupe de la création de <span> pour les dot

	dotContainer.appendChild(newDot);
	newDot.classList.add("dot");

	// start state
	if (currentSlide === 0) {
		newDot.classList.add("dot_selected");
		newImg.style.opacity = 1;
	}
}

// genere un point et une img pour chaque slide
for (let i = 0; i < slides.length; i++) {
	const slide = slides[i];
	addImgAndDot(slide, i);
}
//#endregion


function update() {
    const dots = document.querySelectorAll(".dot");
	const imgs = document.querySelectorAll(".banner-img");


    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[currentSlideIndex].classList.add("dot_selected");

	// on regarde sur chaque img si elle est selectionner/ pour la rendre invisible ou non
	imgs.forEach((img, index) => {
        if (index === currentSlideIndex) {
            img.style.opacity = 1;  
        } else {
            img.style.opacity = 0;  
        }
    });
}

function arrowDirection(arrow) {
	if (arrow === arrow_right) {
		//augmente l'index de 1 , on utilise -> % slide.lenght pour ne jamais avoir a depasser la taille de l'array
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	} else {
		// pareil , on soustrait de 1 , mais on rajoute la taille de l'array pour ne jamais avoir a etre en nombre négatif
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	}
        // update de la logique
	update();
}

navsArrows.forEach(function (arrow) {
	arrow.addEventListener('click', function () {
		arrowDirection(arrow);
	}
	);
})

