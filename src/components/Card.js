//класс Card
class Card {
	//конструктор
	constructor(data, cardSelector, userId, { handleCardClick }, { deleteCard }, { addLike }, { deleteLike }) {
		this._name = data.name;
		this._link = data.link;
		this._id = data._id;
		this._likes = data.likes;
		this._owner = data.owner;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._deleteCard = deleteCard;
		this._addLike = addLike;
		this._deleteLike = deleteLike;
		this._userId = userId;
	}

	//клонируем карточку
	_getTemplate() {
		this._userElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
		return this._userElement;
	}

	//добавить/снять Like
  _toggleLike() {
		if (this._buttonLike.classList.contains('element__like_active')) {
			this._deleteLike();
		}	
		else {
			this._addLike();
		}
	};
	
	//добавить лайк
	addCardLike(counter) {
		this._buttonLike.classList.add('element__like_active'); 
		this._counter.textContent = counter;
	};
	
	//снять лайк
	deleteCardLike(counter) {
		this._buttonLike.classList.remove('element__like_active'); 
		this._counter.textContent = counter;
	};
	
	//сердечко закрашено или нет, количество лайков
	_setLikeStatus() {
		if (this._likes.length !== 0) {
				this._likes.forEach(like => {
					if (this._userId === like._id) {this._buttonLike.classList.add('element__like_active');}
				})
		};
		this._counter.textContent = this._likes.length;
	};
	
	//нужна ли корзина
	_setDeleteStatus() {
		if (this._userId === this._owner._id) {
				this._buttonDelete.classList.add('element__delete_visible');
		};
	};
	
	//слушатели событий
	_setEventListeners() {
		//like
		this._buttonLike.addEventListener('click', () => {
			this._toggleLike();
		});
		//delete
		this._buttonDelete.addEventListener('click', () => {
			this._deleteCard(this._element);
		});
		//просмотр картинки
		this._elementImage.addEventListener('click', () => {
			this._handleCardClick();
		});
	}

	//создание карточки
	generateCard() {
		this._element = this._getTemplate();
		this._buttonLike = this._element.querySelector('.element__like');
		this._counter = this._element.querySelector('.element__counter');
		this._buttonDelete = this._element.querySelector('.element__delete');
		
		//сердечко закрашено или нет, нужна ли корзина
		this._setLikeStatus();
		this._setDeleteStatus();
		
		this._elementImage = this._element.querySelector('.element__image');
		this._elementTitle = this._element.querySelector('.element__title');
		this._setEventListeners();
		this._elementImage.src = this._link;
		this._elementImage.alt = this._name;
		this._element.id = this._id;
		this._elementTitle.textContent = this._name;
		
		return this._element;
	}
	
	//определяем Id карточки
	getCardId() {
		return this._id;
	}
}

export { Card };
