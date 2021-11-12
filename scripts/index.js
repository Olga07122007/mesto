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

//для создания элемента
const userTemplate = document.querySelector('#element').content;
const sectionElements = document.querySelector('.elements');
let newElement = '';

//профиль
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//для редактирования профиля
const editProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const closeEditPopup = document.querySelector('.popup_type_edit .popup__close-icon');

const editFormElement = document.querySelector('.popup_type_edit .popup__input');
const nameInput = editFormElement.querySelector('.popup_type_edit .popup__text_type_name');
const jobInput = editFormElement.querySelector('.popup_type_edit .popup__text_type_about');

//для добавления фото
const addPhoto = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const closeAddPopup = document.querySelector('.popup_type_add .popup__close-icon'); 

const addFormElement = document.querySelector('.popup_type_add .popup__input');
const photoNameInput = addFormElement.querySelector('.popup_type_add .popup__text_type_name');
const photoSrcInput = addFormElement.querySelector('.popup_type_add .popup__text_type_about');

//для увеличения фото
const popupImage = document.querySelector('.popup_type_image');
const closeImagePopup = document.querySelector('.popup_type_image .popup__close-icon');
const popupImageImg = popupImage.querySelector('.popup__image'); 
const popupImageTitle = popupImage.querySelector('.popup__description');

//функция-открытие попапа
function openForm(popupElement) {
	popupElement.classList.add('popup_opened');
	}

//функция-закрытие попапа
function closeForm(popupElement) {
	popupElement.classList.remove('popup_opened');
}

//функция редактирования профиля
function formSubmitHandler(evt) {
	evt.preventDefault();
	profileTitle.textContent=nameInput.value;
	profileSubtitle.textContent=jobInput.value;
	popupEdit.classList.remove('popup_opened');
}

//ФУНКЦИЯ - создание элемента
function elementCreate (Name, Link) {
	const userElement = userTemplate.querySelector('.element').cloneNode(true); 
	userElement.querySelector('.element__image').src = Link; 
	userElement.querySelector('.element__title').textContent = Name;
	userElement.querySelector('.element__image').alt = Name;
	//сердечко
	userElement.querySelector('.element__like').addEventListener('click', evt => {
		const activeLike = evt.target;
		activeLike.classList.toggle('element__like_active');
	});
	//удаление
	userElement.querySelector('.element__delete').addEventListener('click', evt => {
		const deleteButton = evt.target;
		const deleteElement = deleteButton.closest('.element');
		deleteElement.remove();
	});
	//открытие попапа с картинкой
	userElement.querySelector('.element__image').addEventListener('click', evt => {
		const elementImage = evt.target;
		openForm(popupImage);
		popupImageImg.src = elementImage.src;
		const elementOpen = elementImage.closest('.element');
		popupImageTitle.textContent = elementOpen.textContent;
	});
	return userElement;
}

//функция добавления фото
function addPhotoElement (evt) {
	evt.preventDefault();
	sectionElements.prepend(elementCreate (photoNameInput.value, photoSrcInput.value));
	popupAdd.classList.remove('popup_opened');
}

//открытие попапа
editProfile.addEventListener('click', () => {
  openForm(popupEdit);
	nameInput.value=profileTitle.textContent;
	jobInput.value=profileSubtitle.textContent;
});

addPhoto.addEventListener('click', () => {
  openForm(popupAdd);
	photoNameInput.value = '';
	photoSrcInput.value = '';
});

//закрытие попапа
closeEditPopup.addEventListener('click', () => {
  closeForm(popupEdit);
});

closeAddPopup.addEventListener('click', () => {
  closeForm(popupAdd);
});

closeImagePopup.addEventListener('click', () => {
  closeForm(popupImage);
});

//редактирование профиля
editFormElement.addEventListener('submit', formSubmitHandler);

//добавление фото
addFormElement.addEventListener('submit', addPhotoElement);

//добавление массива элементов при загрузке страницы
initialCards.forEach((card,index) => {
	sectionElements.append(elementCreate (initialCards[index].name, initialCards[index].link));
});
