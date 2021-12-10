import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//массив элементов
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//константы
//для создания элемента
const sectionElements = document.querySelector('.elements');

//профиль
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//для редактирования профиля
const buttonEditOpen = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const formEdit = document.querySelector('.popup_type_edit .popup__input');
const nameInput = formEdit.querySelector('.popup_type_edit .popup__text_type_name');
const jobInput = formEdit.querySelector('.popup_type_edit .popup__text_type_about');

//для добавления фото
const buttonAddOpen = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const formAdd = document.querySelector('.popup_type_add .popup__input');
const photoNameInput = formAdd.querySelector('.popup_type_add .popup__text_type_name');
const photoSrcInput = formAdd.querySelector('.popup_type_add .popup__text_type_about');

//для увеличения фото
const popupImage = document.querySelector('.popup_type_image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__description');

//функция-открытие попапа
function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEsc);
	document.addEventListener('click', closePopupOverlay);
}

//функция-закрытие попапа
function closePopup(popupElement) {
	popupElement.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEsc);
	document.removeEventListener('click', closePopupOverlay);
}

//функция редактирования профиля
function editProfile(evt) {
	evt.preventDefault();
	profileTitle.textContent=nameInput.value;
	profileSubtitle.textContent=jobInput.value;
	closePopup(popupEdit);
}

//конфиг
const config = {
		inputSelector: '.popup__text',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
		inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_active'
  };

//создание экземпляров класса FormValidator
const EditFormValidator = new FormValidator(config, formEdit);
EditFormValidator.enableValidation();

const AddFormValidator = new FormValidator(config, formAdd);
AddFormValidator.enableValidation();

//функция добавления фото
function addPhotoElement (evt) {
	evt.preventDefault();
	const objCard =
		{
			name: photoNameInput.value,
			link: photoSrcInput.value
		}
	const card = new Card(objCard, '#element');
  const cardElement = card.generateCard();
	sectionElements.prepend(cardElement);
	closePopup(popupAdd);
}

//функция закрыпия попапа по Esc
function closePopupEsc(evt) {
  if (evt.key==='Escape') {
		const popupOpened = document.querySelector('.popup_opened');
		closePopup(popupOpened);
	}
}

//функция закрыпия попапа по нажатию на Overlay и крестик
function closePopupOverlay(evt) {
	const popups = document.querySelectorAll('.popup');
	popups.forEach((popup) => {
		popup.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('popup_opened')) {closePopup(popup);}
			if (evt.target.classList.contains('popup__close-icon')) {closePopup(popup);}
		})
	})
}

//снять ошибку при открытии попапа
function hideError(popupActive) {
	const inputList = Array.from(popupActive.querySelectorAll('.popup__text_type_error'));
	if (inputList.length!==0) {
		const errorList = Array.from(popupActive.querySelectorAll('.popup__error_active'));
		inputList.forEach((inputElement) => {
			inputElement.classList.remove('popup__text_type_error');
		});
		errorList.forEach((errorElement) => {
			errorElement.classList.remove('popup__error_active');
			errorElement.textContent = '';
		});
	}
};

//соотояние кнопки при открытии попапа
function toggleButton(popupActive) {
	const inputList = Array.from(popupActive.querySelectorAll('.popup__text'));
	if (inputList.length!==0) {
		const buttonElement = popupActive.querySelector('.popup__save-btn');
		if (inputList.some((inputElement) => {return !inputElement.validity.valid;})) {
			buttonElement.classList.add('popup__save-btn_inactive');
			buttonElement.disabled = true;
		}
		else {
			buttonElement.classList.remove('popup__save-btn_inactive');
			buttonElement.disabled = false;
		}
	}
};

//слушатели событий
//открытие попапов
buttonEditOpen.addEventListener('click', () => {
  nameInput.value=profileTitle.textContent;
	jobInput.value=profileSubtitle.textContent;
	openPopup(popupEdit);
	hideError(popupEdit);
	toggleButton(popupEdit);
});

buttonAddOpen.addEventListener('click', () => {
  photoNameInput.value = '';
	photoSrcInput.value = '';
	openPopup(popupAdd);
	hideError(popupAdd);
	toggleButton(popupAdd);
});

//редактирование профиля
formEdit.addEventListener('submit', editProfile);

//добавление фото
formAdd.addEventListener('submit', addPhotoElement);

//добавление массива элементов при загрузке страницы
initialCards.forEach((item) => {
  const card = new Card(item, '#element');
  const cardElement = card.generateCard();
	sectionElements.append(cardElement);
});

export {
  openPopup,
  popupImage,
  popupImageImg,
  popupImageTitle
};
