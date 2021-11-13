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
	userElement.querySelector('.element__like').addEventListener('click', evt => {
		const buttonLike = evt.target;
		buttonLike.classList.toggle('element__like_active');
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

//открытие попапа
buttonEditOpen.addEventListener('click', () => {
  openForm(popupEdit);
	nameInput.value=profileTitle.textContent;
	jobInput.value=profileSubtitle.textContent;
});

buttonAddOpen.addEventListener('click', () => {
  openForm(popupAdd);
	photoNameInput.value = '';
	photoSrcInput.value = '';
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
