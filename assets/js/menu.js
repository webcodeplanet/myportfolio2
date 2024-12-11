const navmenu = document.querySelector('.header_nav');
const mobileicon = document.querySelector('.mobile-menu-icon');

function ShowMenu() {
    navmenu.classList.toggle('active'); 
    mobileicon.classList.toggle('active'); 
}

mobileicon.addEventListener('click', function() {
    ShowMenu();
});

navmenu.addEventListener('click', (e)=> {
    if (e.target.tagName === 'A') {
        ShowMenu();
    }
  })