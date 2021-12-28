//класс UserInfo
class UserInfo {
	constructor(profileTitle, profileSubtitle) {
		this._profileTitle = document.querySelector(profileTitle);
		this._profileSubtitle = document.querySelector(profileSubtitle);
	}
	
	getUserInfo() {
		const userInfo = {name: this._profileTitle.textContent, job: this._profileSubtitle.textContent};
		return userInfo;
	}
	
	setUserInfo(userInfo) {
		this._profileTitle.textContent = userInfo.nameinput;
		this._profileSubtitle.textContent = userInfo.jobinput;
	}
}

export { UserInfo };