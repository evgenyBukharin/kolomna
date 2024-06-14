import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const sliderEl = document.querySelector(".staff__slider");
if (sliderEl) {
	let staffSlider = new Swiper(sliderEl, {
		speed: 600,
		breakpoints: {
			1441: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			769: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
		watchSlidesProgress: true,
		slideVisibleClass: "staff__slide-visible",
		navigation: {
			nextEl: ".staff__button-control-next",
			prevEl: ".staff__button-control-prev",
		},
	});
}
