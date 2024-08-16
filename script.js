 //  Grel 10 anagm .1.2.3.4.5.6.7.8.9.10
 
 
// const slides = document.querySelectorAll('.app .slide');

// const index = random( slides.length ); // 0,1,2,3,4
// slides[index].classList.add('active');


// for(let i=0; i<slides.length; i++){
//     slides[i].addEventListener('click', ()=>{
//         document.querySelector('.app .slide.active').classList.remove('active');
//         slides[i].classList.add('active');
//     });
// }

// function random(x){
//     return Math.floor(Math.random()*x); // [0, x)
// }


///////////////////////////////////////////////////////////


const  slides = document.querySelectorAll('.app .slide');


const index = random(slides.length);
slides[index].classList.add('active');


for(let i=0; i<slides.length; i++){
    slides[i].addEventListener('click', ()=>{
        document.querySelector('.app .slide.active').classList.remove('active');
        slides[i].classList.add('active');
    });
}



function random(x){
    return Math.floor(Math.random()*x)

}










