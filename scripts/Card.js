import {
  openPopup,
  popupImage,
  popupImageImg,
  popupImageTitle
}
from "./index.js";

//класс Card
class Card {
	//конструктор
	constructor(data, cardSelector) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
	}

	//клонируем карточку
	_getTemplate() {
		this._userElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
		return this._userElement;
	}

	//добавление класса кнопке Like
  _setLikeActive() {
    this._buttonLike.classList.toggle('element__like_active');
  }

	//открытие попапа с картинкой
	_openPopupImage() {
		openPopup(popupImage);
		popupImageImg.src = this._link;
		popupImageImg.alt = this._name;
		popupImageTitle.textContent = this._name;
	}

	//слушатели событий
	_setEventListeners() {
		//like
		this._buttonLike = this._element.querySelector('.element__like');
		this._buttonLike.addEventListener('click', () => {
			this._setLikeActive();
		});
		//delete
		this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._element.remove();
		});
		//просмотр картинки
		this._element.querySelector('.element__image').addEventListener('click', () => {
			this._openPopupImage();
		});
	}

	//создание карточки
	generateCard() {
		this._element = this._getTemplate();
		this._setEventListeners();
		this._elementImage = this._element.querySelector('.element__image');
		this._elementImage.src = this._link;
		this._elementImage.alt = this._name;
		this._element.querySelector('.element__title').textContent = this._name;
		return this._element;
	}
}

export { Card };
