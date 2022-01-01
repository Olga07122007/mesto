import { Popup } from "./Popup.js";

//класс PopupWithForm
class PopupWithForm extends Popup {
	constructor(popupElement, submitForm) {
		super(popupElement);
		this._submitForm = submitForm;
		this._form = this._popupElement.querySelector('.popup__input');
		this._inputValues = this._form.querySelectorAll('.popup__text');
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
			this.close();
		});
		super.setEventListeners();
	}
}

export { PopupWithForm };