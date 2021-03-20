const openBtn = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modals');
const closeBtn = document.querySelector('.modal__btn');
const mobileClose = document.querySelector('.mobile-close');
const sendBtn = document.querySelector('.form__btn');

for(var i = 0; i < openBtn.length; i++){
	openBtn[i].addEventListener("click", function(event) {
		openModalDesktop();
		openModalMobile();
	});
  };

let disableScroll = function () {
	document.body.style.overflow = 'hidden';
}

let enableScroll = function () {
	document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
	if (e.target == modal) {
		closeModal();
		document.body.style.overflow = 'auto';
	}
});

closeBtn.addEventListener('click', () => {
	closeModal();
	document.body.style.overflow = 'auto';
});

// sendBtn.addEventListener('click', () => {
// 	closeModal();
// 	document.body.style.overflow = 'auto';
// });

const openModalDesktop = () => {
	setTimeout(() => {
		modal.classList.add('is-open');
		// modal.style= "display: block";
		disableScroll();
	}, 300);
}

const closeModal = () => {
		modal.classList.remove('is-open');
		// modal.style= "display: none";
		disableScroll();
}

const openModalMobile = () => {
	setTimeout(() => {
		disableScroll();
		modal.classList.add('is-open');
		modal.querySelector('.modal').classList.add('visible');
	}, 300);
}

const closeModalMobile = () => {
	setTimeout(() => {
		modal.querySelector('.modal').classList.remove('visible');
		modal.classList.remove('is-open');
		enableScroll();
	}, 300);
}

mobileClose.addEventListener('swiped-down', function (e) {
	closeModalMobile();
});

mobileClose.addEventListener('click', function (e) {
	closeModalMobile();
});