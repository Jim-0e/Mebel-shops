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


const next = document.querySelector('.next'),
      prev = document.querySelector('.prev');


// next.style.transition = 'all'
// next.onclick = function(){
//     headerBlock.style.backgroundImage = `url('imgs/second/01.jpg')`
// }


const slider = document.querySelectorAll('.slider img')
    
const count = document.querySelector('.count');
const item = document.querySelector('.item');

let i=0;
slider.forEach(el =>{
    el.style.display = 'block'
})

slider.forEach((img)=>{
    i = img.width
    console.log(i)
})

let n=102
let c=1


next.onclick = function(){
    c++;
    console.log(c)
    if (c<4){
        
         slider.forEach((img)=>{
        // let windth = img.width
        
        img.style.transform =`translateX(-${n}%)`})

    count.innerHTML = `0${c}`
    n=202
    }else{
        c=1
        console.log(c)

    }
    
    
   
    
}



prev.onclick = function(){
    n= 102
    let co=1
    count.innerHTML = `0${co}`
    slider.forEach((img)=>{
        console.log(`-**-${n}`)
        img.style.transform =`translateX(100px)`
        
    })
}




const black = document.querySelector('.black')
let content = window.getComputedStyle(black, '::after');


content.addEventListener('click', (e)=>{
    console.log('3243---')
    console.log(e.target)
    
})