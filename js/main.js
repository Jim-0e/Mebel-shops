const menu = document.querySelector('.menu')
const headerBlock = document.querySelector('.header__block')

const navIcon = document.querySelector('.nav-icon')

const headerBtn = document.querySelector('.header__btn')

headerBtn.onclick = function(){

 menu.classList.toggle('black')

    navIcon.classList.toggle('nav-icon--active')
    menu.classList.toggle('active')
   
    document.body.classList.toggle('no-scroll')

}


//---

const next = document.querySelector('.next'),
      prev = document.querySelector('.prev');

const sliders = document.querySelectorAll('.div-inner img')

const innerWrap = document.querySelector('.slider');


const current = document.querySelector('.count');
const item = document.querySelector('.item');

let listIndex=1;

innerWrap.style.width = 100 * sliders.length + '%'

const offerWrapper = document.querySelector(".header__block")
const width = window.getComputedStyle(offerWrapper).width


let offest =0


sliders.forEach(slid =>{
    // slid.style.width = width
    slid.style.width = '100%'
})


next.addEventListener('click', ()=>{
    if (offest == +width.slice(0, width.length - 2)*(sliders.length -1)){
        offest = 0
    }else{
        offest+= +width.slice(0, width.length - 2)
    }
    innerWrap.style.transform = `translateX(-${offest}px)`

    if (listIndex == sliders.length){
        listIndex = 1
    }else{
        listIndex++;
    }
    if (sliders.length < 10){
        current.innerHTML = `0${listIndex}`
    }else{
        current.innerHTML = listIndex
    }

})

prev.addEventListener('click', ()=>{
    if (offest == 0){
        offest =+width.slice(0, width.length - 2)* (sliders.length-1)
    }else{
        offest -= +width.slice(0, width.length - 2)
    }
    innerWrap.style.transform = `translateX(-${offest}px)`

    if (listIndex == 1){
        listIndex = sliders.length
    }else{
        listIndex--;
    }

    if (sliders.length < 10){
        current.innerHTML = `0${listIndex}`
    }else{
        current.innerHTML = listIndex
    }
})
