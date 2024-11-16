const hum = document.querySelector('.hum');
const navmenu=document.querySelector('.nav-menu');
const a = document.querySelectorAll('.an')
// const body =document.querySelector('.body');

 hum.addEventListener('click',()=>{

    navmenu.classList.toggle('change')

 })

//  a.addEventListener('click',()=>{
//     navmenu.classList.remove('change')
//  })
a.forEach(n => n.addEventListener('click',()=>{
    navmenu.classList.remove('change')
}));
// body.addEventListener('click',()=>{
//     navmenu.classList.remove('change')
// })