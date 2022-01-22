import './index.css';
import { config, buttonEditOpen, formEdit, nameInput, jobInput, buttonAddOpen, formAdd, 
				profileAvatar, formAvatar, formConfirm, profileTitle, profileSubtitle, 
				buttonSaveAvatar, buttonSaveProfile, buttonSavePhoto, container } from "../utils/constants.js";
import { Card, CardWithoutDel, CardWithDel} from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PicturePopup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupConfirm } from "../components/PopupConfirm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

//функция создания карточки
function createCard(data, cardSelector) {
	const card = new Card(data, cardSelector, api,
		{
			handleCardClick: () => {
				popupImage.open(data);
			}
		}, 
		{
			deleteCard: (elementDelete) => {
				const DeleteId = card.getCardId();
				popupConfirm.addSubmitForm(() => {
					api.deleteCard(DeleteId)
						.then(result => {
							elementDelete.remove();
						})
						.catch((err) => {
							console.log(`Ошибка: ${err}`);
						});
				});
				popupConfirm.open();
			}
		},
		{ 
			addLike: () => {
				const likeId = card.getCardId();
				api.addLike(likeId)
					.then(result => {
						card.addCardLike(result.likes.length);
					})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			}
		}, 
		{
			deleteLike: () => {
				const likeId = card.getCardId();
				api.deleteLike(likeId)
					.then(result => {
						card.deleteCardLike(result.likes.length);
					})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			}
		}
	);
	const cardElement = card.generateCard();
	return cardElement;
};

//информация о пользователе
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

//слушатели событий
//открытие попапа редактирования
buttonEditOpen.addEventListener('click', () => {
  popupEdit.open();
	const info = userInfo.getUserInfo();
	nameInput.value = info.name;
	jobInput.value = info.job;
	formValidators[formEdit.getAttribute('name')].resetValidation();
});

//открытие попапа добавления карточки
buttonAddOpen.addEventListener('click', () => {
  popupAdd.open();
	formValidators[formAdd.getAttribute('name')].resetValidation();
});

//открытие попапа редактирования аватара
profileAvatar.addEventListener('click', () => {
  popupAvatar.open();
	formValidators[formAvatar.getAttribute('name')].resetValidation();
});

// Включение валидации для всех форм
const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
		const formName = formElement.getAttribute('name');
		formValidators[formName] = validator;
		validator.enableValidation();
  });
};
enableValidation(config);

//создание класса api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34',
  headers: {
    authorization: 'a209fba5-6239-47fb-8010-cd146ab13ee2',
    'Content-Type': 'application/json'
  }
});

const cardsList = new Section(
		{	renderer: (cardItem) => {
			cardsList.addItem(createCard(cardItem, '#element'), true);
		}
	}, container);

//функция вставки карточки в DOM при добавлении ее пользователем
const addCardToSection = (elem) => {
	cardsList.addItem(createCard(elem, '#element'), false);
};

//отображение начального профиля и загрузка элементов на страницу
api.getBasicInformation()
	.then(result => {
		profileTitle.textContent = result.name;
		profileSubtitle.textContent = result.about;
		profileAvatar.style.backgroundImage = `url(${result.avatar})`;
	})
	.then(() => {
		api.getInitialCards()
			.then(result => {
				cardsList.renderItems(result);
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
	})
	.catch((err) => {
		console.log(`Ошибка: ${err}`);
	});
  
//функция добавления карточки пользователем
function addPhotoElement({ titleinput, urlinput }) {
	buttonSavePhoto.textContent = 'Загрузка...';
	api.addCard(titleinput, urlinput)
		.then(result => {
			addCardToSection(result);
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
		.finally(() => {
			buttonSavePhoto.textContent = 'Создать';
			popupAdd.close();
		});
};

//функция изменения аватара
const editAvatar = ({ urlavatarinput }) => {
	buttonSaveAvatar.textContent = 'Сохранение...';
	api.editAvatar(urlavatarinput)
		.then(result => {
			profileAvatar.style.backgroundImage = `url(${result.avatar})`;
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
		.finally(() => {
			buttonSaveAvatar.textContent = 'Сохранить';
			popupAvatar.close();
		});
}

//функция редактирования профиля
function editProfile(data) {
	buttonSaveProfile.textContent = 'Сохранение...';
	api.editProfile(data)
		
  .then(result => {
		userInfo.setUserInfo(result);
	})
  .catch((err) => {
		console.log(`Ошибка: ${err}`);
  })
  .finally(() => {
		buttonSaveProfile.textContent = 'Сохранить';
		popupEdit.close();
  });
}

//создание попапов
//Попап редактирования
const popupEdit = new PopupWithForm('.popup_type_edit', editProfile);
popupEdit.setEventListeners();

//Попап с картинкой
const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();
	
//Попап добавления карточки
const popupAdd = new PopupWithForm('.popup_type_add', addPhotoElement);
popupAdd.setEventListeners();

//Попап перед удалением карточки
const popupConfirm = new PopupConfirm('.popup_type_confirm');
popupConfirm.setEventListeners();

//Попап редактирования аватара
const popupAvatar = new PopupWithForm('.popup_type_avatar', editAvatar);
popupAvatar.setEventListeners();

