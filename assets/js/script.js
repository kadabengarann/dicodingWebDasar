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
    //   let v = document.querySelectorAll('.menu');
    //   for (const item of v) {
    //     item.addEventListener('click', event => {
                
    //         item[3].classList.toggle("selected");
    //     })
    //   }
    //   v.classList.add("addCSS");
    // document.querySelectorAll('.menu').forEach(item => {
    //     item.addEventListener('click', event => {
    //         let current = document.querySelector('.selected');
    //         current.className = current.className.replace(" selected", "");    
    //         item.this.classList.add("huh");
    //         console.log();
    //     })
    //   })
      
    //   var header = document.querySelector('.menu');
    //   var btns = header.querySelector('.menu');
    //   for (var i = 0; i < 4; i++) {
    //     btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    //     });
    //   }
      
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