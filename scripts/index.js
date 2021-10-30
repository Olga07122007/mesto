function openForm() {
	popup.classList.add('popup_opened');
	nameInput.value=profileTitle.textContent;
	jobInput.value=profileSubtitle.textContent;
}

function closeForm() {
	popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
	evt.preventDefault();
	
	profileTitle.textContent=nameInput.value;
	profileSubtitle.textContent=jobInput.value;
	popup.classList.remove('popup_opened');
}

let editProfile = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
editProfile.addEventListener('click', openForm);

let closeIcon = document.querySelector('.popup__close-icon');
closeIcon.addEventListener('click', closeForm);

let formElement = document.querySelector('.popup__input');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_about');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

formElement.addEventListener('submit', formSubmitHandler);

