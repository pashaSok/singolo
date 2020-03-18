// get element of menu
let elMenu = document.getElementById('header__menu');

//switch menu element
elMenu.addEventListener('click', (e) => {
	elMenu.querySelectorAll('li').forEach((item) => { item.querySelector('a').classList.remove('header-active'); });
	e.target.classList.add('header-active');
});

//get button and screen on vertical phone on slide1
let verticalPhoneButton = document.getElementById('vertical__on-off');
let verticalScreen = document.getElementById('vertical-screen');
let verticalButton2 = document.getElementById('vertical__on-off__2');

//get button and screen on horizontal phone on slide1
let horizontalPhoneButton = document.getElementById('horizontal__on-off');
let horizontalScreen = document.getElementById('horizontal-screen');
let screenSlide2 = document.getElementById('vertical-screen__2');

//set opacity 0 for black screen
verticalScreen.style.opacity = '0';
horizontalScreen.style.opacity = '0';
screenSlide2.style.opacity = '0';

//switch on-off screen on vertical phone
verticalPhoneButton.addEventListener('click', () => {
	if (verticalScreen.style.opacity == '0') {
		verticalScreen.style.opacity = '1';
	}
	else {
		verticalScreen.style.opacity = '0';
	}
});

//switch on-off screen on horizontal phone
horizontalPhoneButton.addEventListener('click', () => {
	if (horizontalScreen.style.opacity == '0') {
		horizontalScreen.style.opacity = '1';
	}
	else {
		horizontalScreen.style.opacity = '0';
	}
});

//switch on-off screen on vertical slide 2 phone
verticalButton2.addEventListener('click', () => {
	if (screenSlide2.style.opacity == '0') {
		screenSlide2.style.opacity = '1';
	}
	else {
		screenSlide2.style.opacity = '0';
	}
});


//set slider settings
let nextButton = document.getElementById('button-next');
let prevButton = document.getElementById('button-prev');
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let sliderSection = document.getElementById('slider');

slide1.style.display = 'flex';
slide2.style.display = 'none';
nextButton.addEventListener('click', (e) => {
	if (slide1.style.display == "flex") {
		slide1.style.display = 'none';
		slide2.style.display = "block";
		sliderSection.style.background = "#648BF0";
		sliderSection.style.borderBottom = '6px solid rgb(255, 255, 255)';
	}
	else {
		slide1.style.display = 'flex';
		slide2.style.display = 'none';
		sliderSection.style.background = "#f06c64";
		sliderSection.style.borderBottom = '6px solid #ea676b';
	}
});
prevButton.addEventListener('click', (e) => {
	if (slide1.style.display == "flex") {
		slide1.style.display = 'none';
		slide2.style.display = "block";
		sliderSection.style.background = "#648BF0";
		sliderSection.style.borderBottom = '6px solid rgb(255, 255, 255)';
	}
	else {
		slide1.style.display = 'flex';
		slide2.style.display = 'none';
		sliderSection.style.background = "#f06c64";
		sliderSection.style.borderBottom = '6px solid #ea676b';
	}
});


//set portfolio settings
let elMenuPortfolio = document.getElementById('portfolio__buttons');

//switch menu element
elMenuPortfolio.addEventListener('click', (e) => {
	elMenuPortfolio.querySelectorAll('a').forEach((item) => { item.classList.remove('portfolio-active'); });
	e.target.classList.add('portfolio-active');
});


//mix portfolio images
function mixPortfolioImg() {
	let element = document.getElementById('mixPortfolioImg');
	let fragment = document.createDocumentFragment();
	while (element.children.length) {
		fragment.appendChild(element.children[Math.floor(Math.random() * element.children.length)]);
	}
	element.appendChild(fragment);
}

//add border for img
let portfolioImg = document.getElementById('mixPortfolioImg');
portfolioImg.addEventListener('click', (e) => {
	portfolioImg.querySelectorAll('img').forEach((item) => { item.classList.remove('img-active'); });
	e.target.classList.add('img-active');
});


let getAQuoteForm = document.getElementById('get-a-quote__form');
let submitButton = document.getElementById('button__submit');
let hiddenFormStatus = document.getElementById('hidden-form');
let closeButton = document.getElementById('close-button');

submitButton.addEventListener('click', () => {
	event.preventDefault();
	let name = document.getElementById('name').value.toString();
	let mail = document.getElementById('mail').value.toString();
	let subject = document.getElementById('subject').value.toString();
	let describe = document.getElementById('messege').value.toString();
	document.getElementById('NameContent').innerHTML = Boolean(name) ? 'Name: ' + name : 'Без названия';
	document.getElementById('MailContent').innerHTML = Boolean(mail) ? 'Mail: ' + mail : 'Без электронной почты';
	document.getElementById('SubjectContent').innerHTML = Boolean(subject) ? 'Subject: ' + subject : 'Без темы';
	document.getElementById('MessegeContent').innerHTML = Boolean(describe) ? 'Description: ' + describe : 'Без описания';
	hiddenFormStatus.classList.remove('hidden');
	document.getElementById('get-a-quote__form').reset();
});

closeButton.addEventListener('click', () => {
	hiddenFormStatus.classList.add('hidden');
});