const boardElement = document.querySelector('.js-board');

boardElement.addEventListener('mouseover', event => {
	if(event.target.classList.contains('row__pixel')) {
		event.target.classList.add('row__pixel--draw');
	}
});

function createGrid(gridSize = 10) {
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

createGrid();
