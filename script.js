const boardElement = document.querySelector('.js-board');
const inputElement = document.querySelector('.js-input-size');
const buttonElement = document.querySelector('.js-btn-size');
const drawControlElement = document.querySelector('.js-draw-controls');

const settings = {
	'progressive': false,
	'rainbow': false,
	'opacity': 0.1
};

boardElement.addEventListener('mouseover', event => {
	if(event.target.classList.contains('row__pixel')) {
		draw(event.target);
	}
});

inputElement.addEventListener('keydown', event => {
	if(event.key === 'Enter'){
		changeGridSize(inputElement.value);
		inputElement.value = '';
		inputElement.blur();

		event.preventDefault();
	}
});

buttonElement.addEventListener('click', (event) => {
	changeGridSize(inputElement.value);
	inputElement.value = '';

	event.preventDefault();
});

drawControlElement.addEventListener('click', (event) => {
	const btn = event.target;

	if(btn.classList.contains('js-progressive')) {
		settings.progressive = !settings.progressive;
		btn.textContent = settings.progressive ? 'PROGRESSIVE MODE: ON' : 'PROGRESSIVE MODE: OFF';
	}

	if(btn.classList.contains('js-rainbow')) {
		settings.rainbow = !settings.rainbow;
		btn.textContent = settings.rainbow ? 'RAINBOW MODE: ON' : 'RAINBOW MODE: OFF';
	}

	if (btn.classList.contains('js-clear')) {
		clearDraw();
	}
});

function createGrid(gridSize = 10) {
	boardElement.replaceChildren();

	for (let i = 0; i < gridSize; i++) {
		const gridElement = document.createElement('div');
		gridElement.classList.add('row');
		boardElement.appendChild(gridElement);

		for (let j = 0; j < gridSize; j++) {
			const pixelElement = document.createElement('div');
			pixelElement.classList.add('row__pixel');
			gridElement.appendChild(pixelElement);
		}
	}
}

function changeGridSize(size) {
	if (size < 10 || size > 100) {
		inputElement.value = '';
		alert('Size Error! Please Enter numbers only 1 - 100!');
		return;
	}

	createGrid(size);
}

function draw(pixel) {
	pixel.classList.add('row__pixel--draw');

	if(pixel.style.opacity === '1') {
		return;
	}

	if(settings.progressive) {
		const currentOpacity = parseFloat(pixel.style.opacity || 0);
		pixel.style.opacity = Math.min(currentOpacity + settings.opacity, 1);
	} else {
		pixel.style.opacity = 1;
	}

	if(settings.rainbow) {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);

		pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
			console.log('Color set to:', pixel.style.backgroundColor);
	}
}

function clearDraw() {
	const pixelsElement = document.querySelectorAll('.row__pixel');

	pixelsElement.forEach(pixelElement => {
		pixelElement.classList.remove('row__pixel--draw');
		pixelElement.removeAttribute('style');
	});
}


createGrid();
