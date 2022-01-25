//класс UserInfo
class UserInfo {
	constructor(profileTitle, profileSubtitle, profileAvatar) {
		this._profileTitle = document.querySelector(profileTitle);
		this._profileSubtitle = document.querySelector(profileSubtitle);
		this._profileAvatar = document.querySelector(profileAvatar);
	}
	
	getUserInfo() {
		const userInfo = {name: this._profileTitle.textContent, job: this._profileSubtitle.textContent};
		return userInfo;
	}
	
	setUserInfo(userInfo) {
		this._profileTitle.textContent = userInfo.name;
		this._profileSubtitle.textContent = userInfo.about;
		this._profileAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
	}
}

export { UserInfo };