const slides = [
	{
<<<<<<< HEAD
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrow_right = document.querySelector("#banner .arrow_right");
const arrow_left = document.querySelector("#banner .arrow_left");

const navsArrows = [arrow_left, arrow_right];

function arrowDirection(arrow) {
	if (arrow === arrow_right) {
		alert('droite');
	}
	else {
		alert('gauche')
	}
}

navsArrows.forEach(function (arrow) {
	arrow.addEventListener('click', function () {
		arrowDirection(arrow);
	}
	);
});


=======
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const navsArrows = [document.querySelector("#banner .arrow_left") ,document.querySelector("#banner .arrow_right") ];

function test(){
alert(navsArrows.length);
}

navsArrows.forEach(function(nav){
	nav.addEventListener('click', test);
});
>>>>>>> 32ae006e11457144e8cd509503cd7b8c8df17455
