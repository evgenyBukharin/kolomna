const openMenuBtn = document.querySelector(".burger");
const closeMenuBtn = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

if (openMenuBtn && closeMenuBtn) {
	openMenuBtn.addEventListener("click", () => {
		showMenu();
		body.style.overflowY = "hidden";
	});
	closeMenuBtn.addEventListener("click", () => {
		hideMenu();
		body.style.overflowY = "visible";
	});
}

function hideMenu() {
	menu.classList.remove("menu-visible");
}
function showMenu() {
	menu.classList.add("menu-visible");
}
