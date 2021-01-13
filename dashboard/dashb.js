let navLogo = document.querySelector('.burger')
let navBar = document.querySelector('.nav-bar')

function navPop(e){
    if(navLogo.src.match("../static/assets/icons-logos/letter-x.svg") ){
    navBar.style.paddingRight="1rem"
    navBar.style.pointerEvents="none"
    navBar.style.transform = "translate(-100%,0)"
    navBar.classList.add('nav-bar')
    navLogo.src = "../static/assets/icons-logos/list.svg" 
 }else{
    navBar.style.paddingRight="1rem"
    navBar.style.pointerEvents="all"
    navBar.style.transform = "translate(0,0)"
    navBar.classList.add('nav-bar') 
    navLogo.src = "../static/assets/icons-logos/letter-x.svg" 
 }
}
