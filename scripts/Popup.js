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
	_handleEscClose() {
		if (event.key === 'Escape') {
			this.close();
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

//класс PopupWithImage
class PopupWithImage extends Popup {
	constructor(popupElement) {
		super(popupElement);
		this._popupImageImg = this._popupElement.querySelector('.popup__image');
		this._popupImageTitle = this._popupElement.querySelector('.popup__description');
	}
	
	open({ name, link }) {
		super.open();
		this._popupImageImg.src = link;
		this._popupImageImg.alt = name;
		this._popupImageTitle.textContent = name;
	}
	
	close() {
		super.close();
	}
	
	_handleEscClose() {
		super._handleEscClose();
	}
	
	setEventListeners() {
		super.setEventListeners();
	}
}

//класс PopupWithForm
class PopupWithForm extends Popup {
	constructor(popupElement, submitForm) {
		super(popupElement);
		this._submitForm = submitForm;
		this._form = this._popupElement.querySelector('.popup__input');
		this._inputValues = this._form.querySelectorAll('.popup__text');
	}
	
	open() {
		super.open();
	}
	
	close() {
		super.close();
	}
	
	_handleEscClose() {
		super._handleEscClose();
	}
	
	_getInputValues() {
		let valueObj = {};
		this._inputValues.forEach(item => {
			valueObj[item.name] = item.value;
		});
		return valueObj;
	}
	
	setEventListeners() {
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submitForm(this._getInputValues());
			this._form.reset();
			this.close();
		});
		super.setEventListeners();
	}
}

export { Popup, PopupWithImage, PopupWithForm };