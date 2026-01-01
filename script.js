const boardElement = document.querySelector('.js-board');

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
