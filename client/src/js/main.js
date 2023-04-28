// отображение мобильного меню
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector('.header').classList.toggle("open")
	})
})
// запрет скрола для мобильного меню
document.getElementById("burger").addEventListener("click", function () {
	document.querySelector('.body-sett').classList.toggle("burger-body-settings")
})