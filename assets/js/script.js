let sectionImgs = document.querySelector('.sectionImgs');

for (let i = 1; i < 12; i++) {
    let gambarGame = document.createElement('img');
    gambarGame.setAttribute("src", "./assets/img/"+ i +".png");    
    sectionImgs.appendChild(gambarGame);   
}
let newElement = document.createElement('p');
newElement.innerHTML = 'and more...';
sectionImgs.appendChild(newElement);  
