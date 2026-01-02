const boardElement = document.querySelector('.js-board');
const inputElement = document.querySelector('.js-input-size');
const buttonElement = document.querySelector('.js-btn-size');

boardElement.addEventListener('mouseover', event => {
	if(event.target.classList.contains('row__pixel')) {
		event.target.classList.add('row__pixel--draw');
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

createGrid();
