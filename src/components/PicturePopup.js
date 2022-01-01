import { Popup } from "./Popup.js";

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
}

export { PopupWithImage };