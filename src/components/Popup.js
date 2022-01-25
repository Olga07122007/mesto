//класс Popup
class Popup {
	constructor(popupElement) {
		this._popupElement = document.querySelector(popupElement);
		this._handleEscClose = this._handleEscClose.bind(this);
	}
	
	//открытие попапа
	open() {
		this._popupElement.classList.add('popup_opened');
		document.addEventListener('keydown', this._handleEscClose);	
	}
	
	//закрытие попапа
	close() {
		document.removeEventListener('keydown', this._handleEscClose);
		this._popupElement.classList.remove('popup_opened');
	}
	
	//закрытие по Escape
	_handleEscClose(evt) {
		if (evt.key === 'Escape') {
			this.close();
		}
	}
	
	//кнопка submit во время сохранения данных пользователя
	renderLoading(isLoading) { 
		this._popupButton = this._popupElement.querySelector('.popup__save-btn');
		if (isLoading) { 
			this._buttonSaveText = this._popupButton.textContent;
			this._popupButton.textContent = 'Сохранение...'; 
		} 
		else { 
			this._popupButton.textContent = this._buttonSaveText; 
		} 
  }
	
	//слушатели
	setEventListeners() {
		this._popupElement.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
				this.close();
			}
		});
	}
}

export { Popup };

