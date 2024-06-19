const header = document.querySelector(".header");
const menuMediaQuery = window.matchMedia("(max-width: 1024px)").matches;
if (header && !menuMediaQuery) {
	let getScrollPosition = () => {
		return (document.documentElement || document.body.parentNode || document.body).scrollTop;
	};

	const observer = new IntersectionObserver((entries) => {
		// перебор записей
		entries.forEach((entry) => {
			// если элемент появился
			if (entry.isIntersecting) {
				// добавить ему CSS-класс
				header.classList.remove("header-halfed");
			} else {
				header.classList.add("header-halfed");
			}
		});
	});
	// элемент за которым следить
	observer.observe(document.querySelector(".hero"));

	document.addEventListener("scroll", () => {
		if (getScrollPosition() > 10) {
			header.classList.add("header-halfed");
		} else {
			header.classList.remove("header-halfed");
		}
	});
}
