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

export { config, buttonEditOpen, formEdit, nameInput, jobInput, buttonAddOpen, formAdd };