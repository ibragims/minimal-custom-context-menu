(function () {
	const menu = document.querySelector('[data-context-menu]');
	if(!menu) return;
	const hideMenu = () => {
		menu.classList.remove('context-menu--visible');
	};
	document.addEventListener('contextmenu', (event) => {
		event.preventDefault();
		const { innerWidth, innerHeight } = window;
		const menuRect = menu.getBoundingClientRect();
		let x = event.clientX;
		let y = event.clientY;
		if(x + menuRect.width > innerWidth) {
			x = innerWidth - menuRect.width - 8;
		}
		if(y + menuRect.height > innerHeight) {
			y = innerHeight - menuRect.height - 8;
		}
		menu.style.left = `${Math.max(8, x)}px`;
		menu.style.top = `${Math.max(8, y)}px`;
		menu.classList.add('context-menu--visible');
	});
	document.addEventListener('click', hideMenu);
	window.addEventListener('blur', hideMenu);
})();
