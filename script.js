// get element of menu
let elMenu = document.getElementById('header__menu');

//switch menu element
elMenu.addEventListener('click',(e) =>{
    elMenu.querySelectorAll('li').forEach((item)=>{item.querySelector('a').classList.remove('active');});
    e.target.classList.add('active');
});

//get button and screen on vertical phone on slide1
let verticalPhoneButton = document.getElementById('vertical__on-off');
let verticalScreen = document.getElementById('vertical-screen');

//get button and screen on horizontal phone on slide1
let horizontalPhoneButton =document.getElementById('horizontal__on-off');
let horizontalScreen = document.getElementById('horizontal-screen');

//set opacity 0 for black screen
verticalScreen.style.opacity='0';
horizontalScreen.style.opacity='0';

//switch on-off screen on vertical phone
verticalPhoneButton.addEventListener('click',()=>{
    if(verticalScreen.style.opacity == '0'){
        verticalScreen.style.opacity = '1';
    }
    else{
        verticalScreen.style.opacity = '0';
    }
});

//switch on-off screen on horizontal phone
horizontalPhoneButton.addEventListener('click',()=>{
    if(horizontalScreen.style.opacity == '0'){
        horizontalScreen.style.opacity = '1';
    }
    else{
        horizontalScreen.style.opacity = '0';
    }
});

let nextButton = document.getElementById('button-next');
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let sliderSection = document.getElementById('slider');

slide1.style.display='flex';
slide2.style.display ='none';
nextButton.addEventListener('click',(e)=>{
    if(slide1.style.display=="flex"){
        slide1.style.display='none';
        slide2.style.display="block";
        sliderSection.style.background="#648BF0";
        sliderSection.style.borderBottom='6px solid rgb(255, 255, 255)';
    }
    else {
        slide1.style.display ='flex';
        slide2.style.display='none';
        sliderSection.style.background="#f06c64";
        sliderSection.style.borderBottom='6px solid #ea676b';
    }
});