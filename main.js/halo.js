const menu = document.querySelector('.menu')
const hamburgermenu = document.querySelector('.hamburger-menu')
const iconBars = document.querySelector('.icon-bars')
const iconClose = document.querySelector('.icon-close')

humbergermenu.addEvenListener('click', displayMenu);
menu.addEvenListener('click', displayMenu);

function displayMenu (){
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil')
        iconBars.Style.display='inline' ;
        iconClose.Style.display= 'none' ;
    }else{
        menu.classList.add('tampil')
            iconBars.Style.display='inline' ;
        iconClose.style.display= 'none' ;
    }
}