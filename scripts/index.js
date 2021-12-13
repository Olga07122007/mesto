import { initialCards } from "./initial-cards.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//константы
//массив попапов
const popups = document.querySelectorAll('.popup');

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

//конфиг
const config = {
		inputSelector: '.popup__text',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
		inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_active'
};

//функция-открытие попапа
function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEsc);
}

//функция-закрытие попапа
function closePopup(popupElement) {
	popupElement.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEsc);
}

//функция редактирования профиля
function editProfile(evt) {
	evt.preventDefault();
	profileTitle.textContent = nameInput.value;
	profileSubtitle.textContent = jobInput.value;
	closePopup(popupEdit);
}

//открытие попапа с картинкой для класса Card
function openPopupImage(name, link) {
		popupImageImg.src = link;
		popupImageImg.alt = name;
		popupImageTitle.textContent = name;
		openPopup(popupImage);
};

//функция создания карточки
function createCard(data, cardSelector) {
	const card = new Card(data, cardSelector, openPopupImage);
	const cardElement = card.generateCard();
	return cardElement;
}
	
//создание экземпляров класса FormValidator
const profileFormValidator = new FormValidator(config, formEdit);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(config, formAdd);
newCardFormValidator.enableValidation();

//функция добавления карточки
function addPhotoElement(evt) {
	evt.preventDefault();
	const objCard =
		{
			name: photoNameInput.value,
			link: photoSrcInput.value
		}
	sectionElements.prepend(createCard (objCard, '#element'));
	formAdd.reset();
	closePopup(popupAdd);
}

//функция закрыпия попапа по Esc
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
		const popupOpened = document.querySelector('.popup_opened');
		closePopup(popupOpened);
	}
}

//функция закрыпия попапа по нажатию на Overlay и крестик
function closePopupOverlayAndButton(evt) {
	if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
		const popupOpened = document.querySelector('.popup_opened');
		closePopup(popupOpened);
	}
}

//слушатели событий
//открытие попапов
buttonEditOpen.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
	jobInput.value = profileSubtitle.textContent;
	openPopup(popupEdit);
	profileFormValidator.resetValidation();
});

buttonAddOpen.addEventListener('click', () => {
  openPopup(popupAdd);
	newCardFormValidator.resetValidation();
});

//редактирование профиля
formEdit.addEventListener('submit', editProfile);

//добавление фото
formAdd.addEventListener('submit', addPhotoElement);

//добавляем каждому попапу закрытие при клике по оверлею и крестику
popups.forEach((popup) => {
  popup.addEventListener('click', closePopupOverlayAndButton);
});

//добавление массива элементов при загрузке страницы
initialCards.forEach((item) => {
 sectionElements.append(createCard (item, '#element'));
});
