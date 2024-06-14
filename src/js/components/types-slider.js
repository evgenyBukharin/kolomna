import Swiper, { Pagination, EffectFade } from "swiper";
Swiper.use([Pagination, EffectFade]);

const sliderEl = document.querySelector(".types__slider");
if (sliderEl) {
	let types = ["M", "A1", "A", "B", "C", "D", "BE", "CE", "DE", "САМОХОДНЫЕ ТС"];
	let typesSlider = new Swiper(sliderEl, {
		spaceBetween: 30,
		slidesPerView: 1,
		speed: 600,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		allowTouchMove: false,
		pagination: {
			el: ".types__pagination",
			type: "bullets",
			clickable: true,
			bulletClass: "types__bullet",
			bulletActiveClass: "types__bullet-active",
			renderBullet: function (idx, className) {
				return `<span class="${className}">${types[idx]}</span>`;
			},
		},
		breakpoints: {
			0: {
				autoHeight: true,
			},
			1221: {
				autoHeight: false,
			},
		},
	});
}
