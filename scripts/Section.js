//класс Section
class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
	//создание карточки
	renderItems() {
		this._initialArray.forEach((item) => {
			this._renderer(item);
		});
  }
	//вставка карточки в контейнер
  addItem(element, position) {
    if (position) {
			this._container.append(element);
		}
		else {this._container.prepend(element);}
  }
}

export { Section };