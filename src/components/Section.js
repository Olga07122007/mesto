//класс Section
class Section {
  constructor({ renderer }, container) {
    //this._initialArray = data;
    this._renderer = renderer;
    this._container = container;
	}
	//создание карточки
	renderItems(array) {
		array.forEach((item) => {
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