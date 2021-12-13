//класс Card
class Card {
	//конструктор
	constructor(data, cardSelector, openPopupImage) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
		this._openPopupImage = openPopupImage;
	}

	//клонируем карточку
	_getTemplate() {
		this._userElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
		return this._userElement;
	}

	//добавление класса кнопке Like
  _toggleLike() {
    this._buttonLike.classList.toggle('element__like_active');
  }

	//удаление элемента
	_deleteElement () {
		this._element.remove();
		this._element = null;
	}

	//слушатели событий
	_setEventListeners() {
		//like
		this._buttonLike.addEventListener('click', () => {
			this._toggleLike();
		});
		//delete
		this._buttonDelete.addEventListener('click', () => {
			this._deleteElement();
		});
		//просмотр картинки
		this._elementImage.addEventListener('click', () => {
			this._openPopupImage(this._name, this._link);
		});
	}

	//создание карточки
	generateCard() {
		this._element = this._getTemplate();
		this._buttonLike = this._element.querySelector('.element__like');
		this._buttonDelete = this._element.querySelector('.element__delete');
		this._elementImage = this._element.querySelector('.element__image');
		this._elementTitle = this._element.querySelector('.element__title');
		this._setEventListeners();
		this._elementImage.src = this._link;
		this._elementImage.alt = this._name;
		this._elementTitle.textContent = this._name;
		return this._element;
	}
}

export { Card };
