(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".popup_type_edit .popup__input"),n=t.querySelector(".popup_type_edit .popup__text_type_name"),r=t.querySelector(".popup_type_edit .popup__text_type_about"),o=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".profile__add-button")),i=document.querySelector(".popup_type_add .popup__input"),a=document.querySelector(".profile__avatar"),u=document.querySelector(".popup_type_avatar .popup__input"),c=(document.querySelector(".popup_type_confirm .popup__input"),document.querySelector(".elements"));function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r,o,i,a,u){var c=o.handleCardClick,l=i.deleteCard,s=a.addLike,p=u.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._likes=t.likes,this._owner=t.owner,this._cardSelector=n,this._handleCardClick=c,this._deleteCard=l,this._addLike=s,this._deleteLike=p,this._userId=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._userElement=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0),this._userElement}},{key:"_toggleLike",value:function(){this._buttonLike.classList.contains("element__like_active")?this._deleteLike():this._addLike()}},{key:"addCardLike",value:function(e){this._buttonLike.classList.add("element__like_active"),this._counter.textContent=e}},{key:"deleteCardLike",value:function(e){this._buttonLike.classList.remove("element__like_active"),this._counter.textContent=e}},{key:"_setLikeStatus",value:function(){var e=this;0!==this._likes.length&&this._likes.forEach((function(t){e._userId===t._id&&e._buttonLike.classList.add("element__like_active")})),this._counter.textContent=this._likes.length}},{key:"_setDeleteStatus",value:function(){this._userId===this._owner._id&&this._buttonDelete.classList.add("element__delete_visible")}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){e._toggleLike()})),this._buttonDelete.addEventListener("click",(function(){e._deleteCard(e._element)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonLike=this._element.querySelector(".element__like"),this._counter=this._element.querySelector(".element__counter"),this._buttonDelete=this._element.querySelector(".element__delete"),this._setLikeStatus(),this._setDeleteStatus(),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._setEventListeners(),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element.id=this._id,this._elementTitle.textContent=this._name,this._element}},{key:"getCardId",value:function(){return this._id}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_showInputError",(function(e,t){e.classList.add(r._inputErrorClass),r._errorElement=r._formElement.querySelector(".".concat(e.id,"-error")),r._errorElement.classList.add(r._errorClass),r._errorElement.textContent=t})),f(this,"_hideInputError",(function(e){e.classList.remove(r._inputErrorClass),r._errorElement=r._formElement.querySelector(".".concat(e.id,"-error")),r._errorElement.classList.remove(r._errorClass),r._errorElement.textContent=""})),f(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),f(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),f(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),f(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._toggleButtonState()}))}))})),f(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){t?this._container.append(e):this._container.prepend(e)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImageImg=t._popupElement.querySelector(".popup__image"),t._popupImageTitle=t._popupElement.querySelector(".popup__description"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;g(w(a.prototype),"open",this).call(this),this._popupImageImg.src=n,this._popupImageImg.alt=t,this._popupImageTitle.textContent=t}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function T(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._form=n._popupElement.querySelector(".popup__input"),n._inputValues=n._form.querySelectorAll(".popup__text"),n._popupButton=n._popupElement.querySelector(".popup__save-btn"),n}return t=a,(n=[{key:"close",value:function(){j(q(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputValues.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())})),j(q(a.prototype),"setEventListeners",this).call(this)}},{key:"addSubmitForm",value:function(e){this._submitForm=e}},{key:"renderLoading",value:function(e){e?(this._buttonSaveText=this._popupButton.textContent,this._popupButton.textContent="Сохранение..."):this._popupButton.textContent=this._buttonSaveText}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function D(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popupElement.querySelector(".popup__input"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(),e.close()})),A(V(a.prototype),"setEventListeners",this).call(this)}},{key:"addSubmitForm",value:function(e){this._submitForm=e}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileTitle=document.querySelector(t),this._profileSubtitle=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._profileTitle.textContent,job:this._profileSubtitle.textContent}}},{key:"setUserInfo",value:function(e){this._profileTitle.textContent=e.name,this._profileSubtitle.textContent=e.about,this._profileAvatar.style.backgroundImage="url(".concat(e.avatar,")")}}],n&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(e){return e.ok?e.json():Promise.reject(e.status)},$=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getBasicInformation",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._headers.authorization}}).then(M)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._headers.authorization}}).then(M)}},{key:"getAppInfo",value:function(){return Promise.all([this.getBasicInformation(),this.getInitialCards()])}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]},body:JSON.stringify({name:e,link:t})}).then(M)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then(M)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]},body:JSON.stringify({avatar:e})}).then(M)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]},body:JSON.stringify({name:e.nameinput,about:e.jobinput})}).then(M)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then(M)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then(M)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=null;function Q(e,t){var n=new s(e,t,K,{handleCardClick:function(){ne.open(e)}},{deleteCard:function(e){var t=n.getCardId();oe.addSubmitForm((function(){Z.deleteCard(t).then((function(t){e.remove()})).catch((function(e){console.log("Ошибка: ".concat(e))}))})),oe.open()}},{addLike:function(){var e=n.getCardId();Z.addLike(e).then((function(e){n.addCardLike(e.likes.length)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{deleteLike:function(){var e=n.getCardId();Z.deleteLike(e).then((function(e){n.deleteCardLike(e.likes.length)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return n.generateCard()}var W=new J(".profile__title",".profile__subtitle",".profile__avatar");e.addEventListener("click",(function(){te.open();var e=W.getUserInfo();n.value=e.name,r.value=e.job,Y[t.getAttribute("name")].resetValidation()})),o.addEventListener("click",(function(){re.open(),Y[i.getAttribute("name")].resetValidation()})),a.addEventListener("click",(function(){ie.open(),Y[u.getAttribute("name")].resetValidation()}));var X,Y={};X={inputSelector:".popup__text",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__text_type_error",errorClass:"popup__error_active",formSelector:".popup__input"},Array.from(document.querySelectorAll(X.formSelector)).forEach((function(e){var t=new h(X,e),n=e.getAttribute("name");Y[n]=t,t.enableValidation()}));var Z=new $({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-34",headers:{authorization:"a209fba5-6239-47fb-8010-cd146ab13ee2","Content-Type":"application/json"}}),ee=new d({renderer:function(e){ee.addItem(Q(e,"#element"),!0)}},c);Z.getAppInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K=o._id,W.setUserInfo(o),ee.renderItems(i)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var te=new x(".popup_type_edit",(function(e){te.renderLoading(!0),Z.editProfile(e).then((function(e){W.setUserInfo(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){te.renderLoading(!1),te.close()}))}));te.setEventListeners();var ne=new C(".popup_type_image");ne.setEventListeners();var re=new x(".popup_type_add",(function(e){var t=e.titleinput,n=e.urlinput;re.renderLoading(!0),Z.addCard(t,n).then((function(e){var t;t=e,ee.addItem(Q(t,"#element"),!1)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){re.renderLoading(!1),re.close()}))}));re.setEventListeners();var oe=new F(".popup_type_confirm");oe.setEventListeners();var ie=new x(".popup_type_avatar",(function(e){var t=e.urlavatarinput;ie.renderLoading(!0),Z.editAvatar(t).then((function(e){W.setUserInfo(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ie.renderLoading(!1),ie.close()}))}));ie.setEventListeners()})();
//# sourceMappingURL=main.js.map