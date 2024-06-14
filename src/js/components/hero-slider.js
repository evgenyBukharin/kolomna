import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade]);

const sliderEl = document.querySelector(".hero__slider");
if (sliderEl) {
	let heroSlider = new Swiper(sliderEl, {
		slidesPerView: 1,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".hero__button-control-next",
			prevEl: ".hero__button-control-prev",
		},
		pagination: {
			el: ".hero__pagination",
			type: "bullets",
			bulletClass: "swiper-pagination-bullet hero__bullet",
			clickable: true,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
	});
}
