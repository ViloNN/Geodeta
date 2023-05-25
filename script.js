function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('show');
  }


let navMenu = document.querySelector('.navbar-menu');
let content = document.querySelector('.content');

const changeContent = () => {
  if (navMenu.classList.contains('show')) {
    content.style.marginTop = '250px';
    content.classList.add('content-animation-coming');
    setTimeout(() => {
      content.classList.remove('content-animation-coming');
    }, 500);
  }
  else {
    content.style.marginTop = '0px';
    content.classList.add('content-animation-out');
    setTimeout(() => {
      content.classList.remove('content-animation-out');
    }, 500);
  }
}
document.querySelector('.navbar-toggle').addEventListener('click', changeContent);
