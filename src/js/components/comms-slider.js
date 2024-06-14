import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const sliderEl = document.querySelector(".comms__slider");
if (sliderEl) {
	let staffSlider = new Swiper(sliderEl, {
		speed: 600,
		spaceBetween: 30,
		breakpoints: {
			1441: {
				slidesPerView: 3,
				disabled: false,
			},
			1080: {
				slidesPerView: 2,
				disabled: false,
			},
			769: {
				slidesPerView: 1,
				disabled: false,
			},
			320: {
				enabled: false,
				direction: "vertical",
				spaceBetween: 0,
			},
		},
		watchSlidesProgress: true,
		slideVisibleClass: "comms__slide-visible",
		navigation: {
			nextEl: ".comms__button-control-next",
			prevEl: ".comms__button-control-prev",
		},
	});
}
