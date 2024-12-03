// wow js
new WOW().init();
// toggle button
const navMenu = document.querySelector('#nav-menu')
const navLinks = document.querySelectorAll('.nav-link')
const hambergetToggleIcon = document.querySelector('#hamber-menu')

hambergetToggleIcon.addEventListener('click',(e)=> {
     navMenu.classList.toggle('left-[0]')
    hambergetToggleIcon.classList.toggle('ri-close-large-line');
})

navLinks.forEach((link)=>{
     link.addEventListener('click',()=>{
          navMenu.classList.toggle('left-[0]')
          hambergetToggleIcon.classList.toggle('ri-close-')
     })
});