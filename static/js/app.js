let navLogo = document.querySelector('.logoPic')
let navBar = document.querySelector('nav')
  

  function navPopup(e){
    if(navLogo.src.match("static/assets/icons-logos/letter-x.svg")){
    navBar.style.display="none"
    navBar.style.opacity=0
    navBar.style.pointerEvents="none"
    navBar.style.transform = "scale(2)" 
    navLogo.src = "static/assets/icons-logos/list.svg" 
 }else{
    navBar.style.display="block"
    navBar.style.opacity=1
    navBar.style.pointerEvents="all"
    navBar.style.transform = "scale(1)" 
    navLogo.src = "static/assets/icons-logos/letter-x.svg" 
 }
}
  


 