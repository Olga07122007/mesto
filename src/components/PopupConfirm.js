import { Popup } from "./Popup.js";

//класс PopupConfirm
class PopupConfirm extends Popup {
	constructor(popupElement, submitForm) {
		super(popupElement);
		this._form = this._popupElement.querySelector('.popup__input');
	}
	
	setEventListeners() {
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submitForm();
			this.close();
		});
		super.setEventListeners();
	}
	
	addSubmitForm(submitForm) {
		this._submitForm = submitForm;
	}
}

export { PopupConfirm };