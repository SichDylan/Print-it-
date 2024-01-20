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

navsArrows.forEach(function (arrow) {
	arrow.addEventListener('click', function () {
		arrowDirection(arrow);
	}
	);
})

function arrowDirection(arrow) {

	if (arrow === arrow_right) {
		//augmente l'index de 1 , on utilise -> % slide.lenght pour ne jamais avoir a depasser la taille de l'array
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;

	} else {
		// pareil , on soustrait de 1 , mais on rajoute la taille de l'array pour ne jamais avoir a etre en nombre négatif
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	}
        // update de la logique
    update()
}

function update() {
    const dots = document.querySelectorAll(".dot");
	const imgs = document.querySelector(".banner-img");
	const title = document.querySelector("#banner p");

// on enleve les anciennes valeurs 
	title.textContent = null;
	dots.forEach(dot => dot.classList.remove("dot_selected"));

//  et on passe les nouvelles 
	imgs.src = slides[currentSlideIndex].image;
	title.insertAdjacentHTML('beforeend',slides[currentSlideIndex].tagLine);
    dots[currentSlideIndex].classList.add("dot_selected");
}

//#region Image/dot generation

// on call la fonction pour generer une premiere fois les elements
createNewSlide();
function createNewSlide() {
	const newImg = document.createElement("img");
	const newTitle = document.createElement("p");
	const banner = document.getElementById("banner");

	// s'occupe de la création de <img>
	banner.appendChild(newImg);
	newImg.src = slides[currentSlideIndex].image;
	newImg.classList.add("banner-img");	
	newImg.setAttribute("alt", slides[currentSlideIndex].tagLine);
	banner.appendChild(newTitle);
	newTitle.insertAdjacentHTML('beforeend',slides[currentSlideIndex].tagLine);
}



// s'occupe de la création de <span> pour les dot pour chaque slides
for (let index = 0; index < slides.length; index++) {
	createNewDot(index)
}
function createNewDot(currentIndex){
	let newDot = document.createElement("span");
	const dotContainer = document.querySelector(".dots");
	dotContainer.appendChild(newDot);
	newDot.classList.add("dot");

	if (currentIndex === 0) {
		newDot.classList.add("dot_selected")
	}
}


//#endregion








