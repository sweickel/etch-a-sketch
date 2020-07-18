function createGrid() {
	const wrapper = document.querySelector('.wrapper');
	const wrapperLength = wrapper.children.length;
	//remove divs first, then create
	for (let j = wrapperLength - 1; j >= 0; j--) {
		wrapper.removeChild(wrapper.children[j]);
	}

	for (let i = 0; i < 16; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');	
		wrapper.appendChild(cell);
		cell.addEventListener('click', (event) => {
			cell.className = "cell_fill";
		});
	}
}

function listeners() {
	const button = document.querySelector('.create_button');	
		button.addEventListener('click', (event) => {
			createGrid();
	});
}

window.addEventListener('load', (event) => {
	listeners();
	
});