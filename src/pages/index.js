import './index.css';
import { config, buttonEditOpen, formEdit, nameInput, jobInput, buttonAddOpen, formAdd, 
				profileAvatar, formAvatar, formConfirm, profileTitle, profileSubtitle, 
				container } from "../utils/constants.js";
import { Card, CardWithoutDel, CardWithDel} from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PicturePopup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupConfirm } from "../components/PopupConfirm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

//создание класса api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34',
  headers: {
    authorization: 'a209fba5-6239-47fb-8010-cd146ab13ee2',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getBasicInformation(), api.getInitialCards()])
	.then(([userData, cards]) => {
		//id пользователя
		const userId = userData._id;
		
		//отображение начального профиля
		profileTitle.textContent = userData.name;
		profileSubtitle.textContent = userData.about;
		profileAvatar.style.backgroundImage = `url(${userData.avatar})`;

		//функция создания карточки
		function createCard(data, cardSelector) {
			const card = new Card(data, cardSelector, userId,
				{
					handleCardClick: () => {
						popupImage.open(data);
					}
				}, 
				{
					deleteCard: (elementDelete) => {
						const cardDeleteId = card.getCardId();
						popupConfirm.addSubmitForm(() => {
							api.deleteCard(cardDeleteId)
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
		const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

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

		//создание секции для картинок и загрузка элементов на страницу
		const cardsList = new Section(
			{	renderer: (cardItem) => {
					cardsList.addItem(createCard(cardItem, '#element'), true);
				}
			}, container);
		cardsList.renderItems(cards);	

		//функция вставки карточки в DOM при добавлении ее пользователем
		const addCardToSection = (elem) => {
			cardsList.addItem(createCard(elem, '#element'), false);
		};

		//функция добавления карточки пользователем
		function addPhotoElement({ titleinput, urlinput }) {
			popupAdd.renderLoading(true);
			api.addCard(titleinput, urlinput)
				.then(result => {
					addCardToSection(result);
				})
				.catch((err) => {
					console.log(`Ошибка: ${err}`);
				})
				.finally(() => {
					popupAdd.renderLoading(false);
					popupAdd.close();
				});
		};

		//функция изменения аватара
		const editAvatar = ({ urlavatarinput }) => {
			popupAvatar.renderLoading(true);
			api.editAvatar(urlavatarinput)
				.then(result => {
					userInfo.setUserInfo(result);
				})
				.catch((err) => {
					console.log(`Ошибка: ${err}`);
				})
				.finally(() => {
					popupAvatar.renderLoading(false);
					popupAvatar.close();
				});
		}

		//функция редактирования профиля
		function editProfile(data) {
			popupEdit.renderLoading(true);
			api.editProfile(data)
			.then(result => {
				userInfo.setUserInfo(result);
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
			.finally(() => {
				popupEdit.renderLoading(false);
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
	})
  .catch(err => {
    console.log(`Ошибка: ${err}`);
  });
	
