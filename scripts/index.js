//для создания элемента
const userTemplate = document.querySelector('#element').content;
const sectionElements = document.querySelector('.elements');

//профиль
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//для редактирования профиля
const buttonEditOpen = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const buttonEditClose = document.querySelector('.popup_type_edit .popup__close-icon');

const formEdit = document.querySelector('.popup_type_edit .popup__input');
const nameInput = formEdit.querySelector('.popup_type_edit .popup__text_type_name');
const jobInput = formEdit.querySelector('.popup_type_edit .popup__text_type_about');

//для добавления фото
const buttonAddOpen = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const buttoAddClose = document.querySelector('.popup_type_add .popup__close-icon'); 

const formAdd = document.querySelector('.popup_type_add .popup__input');
const photoNameInput = formAdd.querySelector('.popup_type_add .popup__text_type_name');
const photoSrcInput = formAdd.querySelector('.popup_type_add .popup__text_type_about');

//для увеличения фото
const popupImage = document.querySelector('.popup_type_image');
const buttonImageClose = document.querySelector('.popup_type_image .popup__close-icon');
const popupImageImg = popupImage.querySelector('.popup__image'); 
const popupImageTitle = popupImage.querySelector('.popup__description');

//функция-открытие попапа
function openForm(popupElement) {
	popupElement.classList.add('popup_opened');
	
	hideError();
	toggleButton();
	
	const popupOpenedForm = document.querySelector('.popup_opened');
	document.addEventListener('keydown', closePopupEscOverlay);
	popupOpenedForm.addEventListener('click', closePopupEscOverlay);
}

//функция-закрытие попапа
function closeForm(popupElement) {
	popupElement.classList.remove('popup_opened');
}

//функция редактирования профиля
function editProfile(evt) {
	evt.preventDefault();
	profileTitle.textContent=nameInput.value;
	profileSubtitle.textContent=jobInput.value;
	closeForm(popupEdit);
}

//ФУНКЦИЯ - создание элемента
function createNewElement (newName, newLink) {
	const userElement = userTemplate.querySelector('.element').cloneNode(true);
	const elementImage = userElement.querySelector('.element__image');
	elementImage.src = newLink; 
	userElement.querySelector('.element__title').textContent = newName;
	elementImage.alt = newName;
	//сердечко
	userElement.addEventListener('click', function (evt) {
		if (evt.target.classList.contains('element__like')) {
				evt.target.classList.toggle('element__like_active');
			}
		}); 
	//удаление
	userElement.querySelector('.element__delete').addEventListener('click', () => {
		userElement.remove();
	});
	//открытие попапа с картинкой
	elementImage.addEventListener('click', () => {
		openForm(popupImage);
		popupImageImg.src = newLink;
		popupImageTitle.textContent = newName;
	});
	return userElement;
}

//функция добавления фото
function addPhotoElement (evt) {
	evt.preventDefault();
	sectionElements.prepend(createNewElement (photoNameInput.value, photoSrcInput.value));
	closeForm(popupAdd);
}

//функция закрыпия попапа по Esc и по нажатию на Overlay
function closePopupEscOverlay(evt) {
  if ((evt.key==='Escape') || (evt.target.classList.contains('popup_opened'))) {
		const popupOpened = document.querySelector('.popup_opened');
		closeForm(popupOpened);
		document.removeEventListener('keydown', closePopupEscOverlay);
		popupOpened.removeEventListener('click', closePopupEscOverlay);
  }
}

//снять ошибку при закрытии
function hideError(){
	const popupOpened = document.querySelector('.popup_opened');
	const inputList = Array.from(popupOpened.querySelectorAll('.popup__text_type_error'));
	
	if (inputList.length!==0) {
		const errorList = Array.from(popupOpened.querySelectorAll('.popup__error_active'));
		
		inputList.forEach((inputElement) => {
			inputElement.classList.remove('popup__text_type_error');
		});
		
		errorList.forEach((errorElement) => {
			errorElement.classList.remove('popup__error_active');
			errorElement.textContent = '';
		});
	}
};

//кнопка при открытии
function toggleButton(){
	const popupOpened = document.querySelector('.popup_opened');
	const inputList = Array.from(popupOpened.querySelectorAll('.popup__text'));
	
	if (inputList.length!==0) {
		const buttonElement = popupOpened.querySelector('.popup__save-btn');
		if (hasInvalidInput(inputList)) {
			buttonElement.classList.add('popup__save-btn_inactive');
		} 
		else {
			buttonElement.classList.remove('popup__save-btn_inactive');
		}
	}	
};

//открытие попапа
buttonEditOpen.addEventListener('click', () => {
  nameInput.value=profileTitle.textContent;
	jobInput.value=profileSubtitle.textContent;
	openForm(popupEdit);
});

buttonAddOpen.addEventListener('click', () => {
  photoNameInput.value = '';
	photoSrcInput.value = '';
	openForm(popupAdd);
});

//закрытие попапа
buttonEditClose.addEventListener('click', () => {
  closeForm(popupEdit);
});

buttoAddClose.addEventListener('click', () => {
  closeForm(popupAdd);
});

buttonImageClose.addEventListener('click', () => {
  closeForm(popupImage);
});

//редактирование профиля
formEdit.addEventListener('submit', editProfile);

//добавление фото
formAdd.addEventListener('submit', addPhotoElement);

//добавление массива элементов при загрузке страницы
initialCards.forEach(card => {
	sectionElements.append(createNewElement (card.name, card.link));
});



