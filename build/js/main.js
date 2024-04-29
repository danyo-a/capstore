const initApp=()=>{
    const humburgerbtn=document.getElementById('hamburger-open-button')
    const mobileMenu=document.getElementById('mobile-menu')
    
    const togglemenu=() =>{
       mobileMenu.classList.toggle('hidden')
       mobileMenu.classList.toggle('flex') 
      humburgerbtn.classList.toggle('toggle-btn')
    } 
    humburgerbtn.addEventListener('click',togglemenu)
    mobileMenu.addEventListener('click',togglemenu)

}

document.addEventListener('DOMContentLoaded',initApp)