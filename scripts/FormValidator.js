//класс FormValidator
class FormValidator {
	//конструктор
	constructor(config, formElement) {
		this._formElement = formElement;
		this._inputSelector = config.inputSelector;
		this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
		this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
		this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
		this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
	}

	//показать ошибку
	_showInputError = (inputElement, errorMessage) => {
		inputElement.classList.add(this._inputErrorClass);
		this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		this._errorElement.classList.add(this._errorClass);
		this._errorElement.textContent = errorMessage;
	};

	//снять ошибку
	_hideInputError = (inputElement) => {
		inputElement.classList.remove(this._inputErrorClass);
		this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		this._errorElement.classList.remove(this._errorClass);
		this._errorElement.textContent = '';
	};

	//проверка на валидность каждого поля формы
	_isValid = (inputElement) => {
		if (!inputElement.validity.valid) {
			this._showInputError(inputElement, inputElement.validationMessage);
		}
		else {
			this._hideInputError(inputElement);
		}
	};

	//есть ли хотя бы одно поле невалидно
	//если есть - true, если нет - false
	_hasInvalidInput = () => {
		return this._inputList.some((inputElement) => {
			return !inputElement.validity.valid;
		})
	};

	//если хотя бы одно поле невалидно - сделать кнопку неактивной, иначе - активной
	_toggleButtonState = () => {
		if (this._hasInvalidInput()) {
			this._buttonElement.classList.add(this._inactiveButtonClass);
			this._buttonElement.disabled = true;
		}
		else {
			this._buttonElement.classList.remove(this._inactiveButtonClass);
			this._buttonElement.disabled = false;
		}
	};
	
	//очищение полей формы от ошибок при открытии попапа
	resetValidation() {
      this._toggleButtonState(); 
			this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      });
	} 
	
	//слушатели
	_setEventListeners = () => {
		this._toggleButtonState();
		this._inputList.forEach((inputElement) => {
			inputElement.addEventListener('input', () => {
				this._isValid(inputElement);
				this._toggleButtonState();
			});
		});
	};

	//включение валидации формы
	enableValidation = () => {
		this._formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		this._setEventListeners();
  };
}

export { FormValidator };
