import { Popup } from "./Popup.js";

//класс PopupWithForm
class PopupWithForm extends Popup {
	constructor(popupElement, submitForm) {
		super(popupElement);
		this._submitForm = submitForm;
		this._form = this._popupElement.querySelector('.popup__input');
		this._inputValues = this._form.querySelectorAll('.popup__text');
		this._popupButton = this._popupElement.querySelector('.popup__save-btn');
	}
	
	close() {
		super.close();
		this._form.reset();
	}
	
	_getInputValues() {
		const valueObj = {};
		this._inputValues.forEach(item => {
			valueObj[item.name] = item.value;
		});
		return valueObj;
	}
	
	setEventListeners() {
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submitForm(this._getInputValues());
		});
		super.setEventListeners();
	}
	
	addSubmitForm(submitForm) {
		this._submitForm = submitForm;
	}
	
	//кнопка submit во время сохранения данных пользователя
	renderLoading(isLoading) { 
		if (isLoading) { 
			this._buttonSaveText = this._popupButton.textContent;
			this._popupButton.textContent = 'Сохранение...'; 
		} 
		else { 
			this._popupButton.textContent = this._buttonSaveText; 
		} 
  }
}

export { PopupWithForm };