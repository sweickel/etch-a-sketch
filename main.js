function createGrid() {
	const wrapper = document.querySelector('.wrapper');
	const wrapperLength = wrapper.children.length;
	
	//clears grid
	for (let j = wrapperLength - 1; j >= 0; j--) {
		wrapper.removeChild(wrapper.children[j]);
	}

	//creates new grid
	let result = document.querySelector('.cells').value;
	let allCells = result * result;
	for (let i = 0; i < allCells; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');	
		wrapper.appendChild(cell);
		cell.addEventListener('mouseover', (event) => {
			cell.className = "cell_fill";
		});
	}
		
	wrapper.style.cssText = `grid-template-columns: repeat(${result}, 1fr); grid-template-rows: repeat(${result}, 1fr);`;
}

function listeners() {
	const button = document.querySelector('.create_button');	
		button.addEventListener('click', (event) => {
			createGrid();
	});
}

window.addEventListener('load', (event) => {
	listeners();
	document.querySelector('.cells').value = 4;
	
});