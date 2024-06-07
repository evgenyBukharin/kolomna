import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const sliderEl = document.querySelector(".hero__slider");
if (sliderEl) {
	let heroSlider = new Swiper(sliderEl, {
		spaceBetween: 30,
		slidesPerView: 1,
		speed: 600,
		loop: true,
		navigation: {
			nextEl: ".hero__button-control-next",
			prevEl: ".hero__button-control-prev",
		},
		pagination: {
			el: ".hero__pagination",
			type: "bullets",
			bulletClass: "swiper-pagination-bullet hero__bullet",
		},
	});
}
