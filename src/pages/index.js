import './index.css';
import { initialCards } from "../utils/initial-cards.js";
import { config, buttonEditOpen, formEdit, nameInput, jobInput, buttonAddOpen, formAdd } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PicturePopup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

//функция создания карточки
function createCard(data, cardSelector) {
	const card = new Card(data, cardSelector, {handleCardClick: () => {
			popupImage.open(data);
		}
	});
	const cardElement = card.generateCard();
	return cardElement;
}

//функция редактирования профиля
function editProfile(data) {
	userInfo.setUserInfo(data);
}

//функция добавления карточки пользователем
function addPhotoElement({ titleinput, urlinput }) {
	const objCard = {
		name: titleinput,
		link: urlinput
  };
	cardsList.addItem(createCard(objCard, '#element'), false);
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

//создание экземпляров класса FormValidator
const profileFormValidator = new FormValidator(config, formEdit);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(config, formAdd);
newCardFormValidator.enableValidation();

//добавление массива элементов при загрузке страницы
const cardsList = new Section({
    data: initialCards,
    renderer: (cardItem) => {
			cardsList.addItem(createCard(cardItem, '#element'), true);
    }
  },'.elements');
cardsList.renderItems();

