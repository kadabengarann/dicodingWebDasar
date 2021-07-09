document.addEventListener("DOMContentLoaded", event => {

    printGames();

    const burger = document.querySelector('.menu_burger');
    const barStack = document.querySelector('.menu_burger-stack');
    const barClose = document.querySelector('.menu_burger-close');
    const menu_responsive = document.querySelector('.responsive_menu');


    burger.addEventListener('click', () => {
        barStack.classList.toggle('active');
        barClose.classList.toggle('active');
        menu_responsive.classList.toggle('active');
    });
    document.querySelectorAll('.responsive_menu-items').forEach(item => {
        item.addEventListener('click', event => {
          barStack.classList.toggle('active');
        barClose.classList.toggle('active');
        menu_responsive.classList.toggle('active');
        })
      })
})

function printGames() {
    let sectionImgs = document.querySelector('.sectionImgs');

    for (let i = 1; i < 12; i++) {
        let gambarGame = document.createElement('img');
        gambarGame.setAttribute("src", "./assets/img/" + i + ".png");
        sectionImgs.appendChild(gambarGame);
    }
    let newElement = document.createElement('p');
    newElement.innerHTML = 'and more...';
    sectionImgs.appendChild(newElement);
}