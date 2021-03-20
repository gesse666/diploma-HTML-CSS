const slider = document.querySelector('.slider');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 35,
	loop: true,
	wrapperClass: 'slider__wrap',
	slideClass: 'slide',
	pagination: {
		el: '.slider-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.slider-buttons__next',
		prevEl: '.slider-buttons__prev',
	},
	breakpoints: {
		1500: {
			slidesPerView: 3,
			spaceBetween: 25
		},
		825: {
			slidesPerView: 2,
			spaceBetween: 35
		},
		460: {
			slidesPerView: 1,
			
		}
	}
})