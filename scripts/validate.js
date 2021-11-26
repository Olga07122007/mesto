//показать ошибку
const showInputError = (formElement, inputElement, errorMessage, config) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
	errorElement.classList.add(config.errorClass);
	errorElement.textContent = errorMessage;
 };

//снять ошибку
const hideInputError = (formElement, inputElement, config) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
	errorElement.classList.remove(config.errorClass);
	errorElement.textContent = '';
};

//проверка на валидность каждого поля формы
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

//есть ли хотя бы одно поле невалидно
//если есть - true, если нет - false
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//если хотя бы одно поле невалидно - сделать кнопку неактивной, иначе - активной
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList, config)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}; 

//проходим по всем полям формы
const setEventListeners = (formElement, config) => {
	const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
	const buttonElement = formElement.querySelector(config.submitButtonSelector);
	toggleButtonState(inputList, buttonElement, config);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
			toggleButtonState(inputList, buttonElement, config);
    });
  });
	
};

//проходим по всем формам
const enableValidation = (config) => {
	const formList = Array.from(document.querySelectorAll(config.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
    });
	setEventListeners(formElement, config);
  });
	
};

//config
enableValidation({
    formSelector: '.popup__input',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_active'
  });
	