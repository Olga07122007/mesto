import '../pages/index.css';
import { initialCards } from "./initial-cards.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup, PopupWithImage, PopupWithForm } from "./Popup.js";
import { UserInfo } from "./UserInfo.js";

//константы
//для редактирования профиля
const buttonEditOpen = document.querySelector('.profile__edit-button');
const formEdit = document.querySelector('.popup_type_edit .popup__input');
const nameInput = formEdit.querySelector('.popup_type_edit .popup__text_type_name');
const jobInput = formEdit.querySelector('.popup_type_edit .popup__text_type_about');

//для добавления фото
const buttonAddOpen = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.popup_type_add .popup__input');

//конфиг
const config = {
		inputSelector: '.popup__text',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
		inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_active'
};

//создание попапов
//Попап редактирования
const popupEdit = new PopupWithForm('.popup_type_edit', editProfile);
popupEdit.setEventListeners();

//Попап добавления карточки
const popupAdd = new PopupWithForm('.popup_type_add', addPhotoElement);
popupAdd.setEventListeners();

//Попап с картинкой
const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

//информация о пользователе
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

//слушатели событий
//открытие попапа редактирования
buttonEditOpen.addEventListener('click', () => {
  popupEdit.open();
	const info = userInfo.getUserInfo();
	nameInput.value = info.name;
	jobInput.value = info.job;
	profileFormValidator.resetValidation();
});

//открытие попапа добавления карточки
buttonAddOpen.addEventListener('click', () => {
  popupAdd.open();
	newCardFormValidator.resetValidation();
});

//функция редактирования профиля
function editProfile(data) {
	userInfo.setUserInfo(data);
}

//создание экземпляров класса FormValidator
const profileFormValidator = new FormValidator(config, formEdit);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(config, formAdd);
newCardFormValidator.enableValidation();

//функция добавления карточки
function addPhotoElement({ titleinput, urlinput }) {
	const objCard = [{
		name: titleinput,
		link: urlinput
  }];
	const newCard = new Section({
    data: objCard,
    renderer: (cardItem) => {
			const card = new Card(cardItem, '#element', {handleCardClick: () => {
				popupImage.open(cardItem);
			}
			});
			const cardElement = card.generateCard();
			newCard.addItem(cardElement,false);
    }
  },'.elements');
  newCard.renderItems();
};

//добавление массива элементов при загрузке страницы
const cardsList = new Section({
    data: initialCards,
    renderer: (cardItem) => {
			const card = new Card(cardItem, '#element', {handleCardClick: () => {
				popupImage.open(cardItem);
			}
			});
			const cardElement = card.generateCard();
			cardsList.addItem(cardElement, true);
    }
  },'.elements');
cardsList.renderItems();
