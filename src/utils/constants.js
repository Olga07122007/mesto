//константы
//для редактирования профиля
const buttonEditOpen = document.querySelector('.profile__edit-button');
const formEdit = document.querySelector('.popup_type_edit .popup__input');
const nameInput = formEdit.querySelector('.popup_type_edit .popup__text_type_name');
const jobInput = formEdit.querySelector('.popup_type_edit .popup__text_type_about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonSaveProfile = document.querySelector('.popup_type_edit .popup__save-btn');

//для добавления фото
const buttonAddOpen = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.popup_type_add .popup__input');
const buttonSavePhoto = document.querySelector('.popup_type_add .popup__save-btn');

//для редактирования аватара
const profileAvatar = document.querySelector('.profile__avatar');
const formAvatar = document.querySelector('.popup_type_avatar .popup__input');
const buttonSaveAvatar = document.querySelector('.popup_type_avatar .popup__save-btn');

//для удаления карточки
const formConfirm = document.querySelector('.popup_type_confirm .popup__input'); 
const container = document.querySelector('.elements');

//конфиг
const config = {
		inputSelector: '.popup__text',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
		inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_active',
		formSelector: '.popup__input'
};

export { config, buttonEditOpen, formEdit, nameInput, jobInput, 
				buttonAddOpen, formAdd, profileAvatar, formAvatar, formConfirm, 
				profileTitle, profileSubtitle, buttonSaveAvatar, buttonSaveProfile, buttonSavePhoto, container };