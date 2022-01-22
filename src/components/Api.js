//класс Api
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
		this._headers = headers;
	};
	
	//отображение начального профиля
	getBasicInformation() {
		return fetch (`${this._baseUrl}/users/me`, {
			headers: {
				authorization: this._headers.authorization
			}
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
		});
	};
	
	//добавление массива элементов при загрузке страницы
  getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: {
				authorization: this._headers.authorization
			}
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
			});
	};
	
	//добавление карточки пользователем
	addCard(titleinput, urlinput) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: {
				authorization: this._headers.authorization,
				'Content-Type': this._headers['Content-Type']
			},
			body: JSON.stringify({
				name: titleinput,
				link: urlinput
			})
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
			});
	};
	
	//удаление карточки
	deleteCard(deleteId) {
		return fetch(`${this._baseUrl}/cards/${deleteId}`, {
			method: 'DELETE',
			headers: {
				authorization: this._headers.authorization,
				'Content-Type': this._headers['Content-Type']
			},
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
			});
	};
	
	//изменение аватара
	editAvatar(urlavatarinput) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: {
				authorization: this._headers.authorization,
				'Content-Type': this._headers['Content-Type']
			},
			body: JSON.stringify({
				avatar: urlavatarinput,
			})
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
			});	
	};
	
	//изменение информации о пользователем
	editProfile(data) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: {
				authorization: this._headers.authorization,
				'Content-Type': this._headers['Content-Type']
			},
			body: JSON.stringify({
				name: data.nameinput,
				about: data.jobinput
			})
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
			});	
	};
	
	//добавление лайка
	addLike(likeId) {
		return fetch(`${this._baseUrl}/cards/${likeId}/likes`, {
			method: 'PUT',
			headers: {
				authorization: this._headers.authorization,
				'Content-Type': this._headers['Content-Type']
			},
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
			});
	}
	
	//удаление лайка
	deleteLike(likeId) {
		return fetch(`${this._baseUrl}/cards/${likeId}/likes`, {
			method: 'DELETE',
			headers: {
				authorization: this._headers.authorization,
				'Content-Type': this._headers['Content-Type']
			},
		})
		.then (res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
			});	
	};
}

export { Api };