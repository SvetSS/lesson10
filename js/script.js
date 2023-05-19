'use strict'
//1
const listBooks = document.querySelectorAll('.book');
console.log(listBooks);
listBooks[0].before(listBooks[1]);
listBooks[3].before(listBooks[4]);
listBooks[5].after(listBooks[2]);
//2
const bodyElement = document.querySelector('body');
let uv = bodyElement.style.backgroundImage = 'url(./image/adv.jpg)';
//3
const listTitle = document.querySelectorAll('h2');
listTitle[2].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"target="_blank"> Книга 3. this и Прототипы Объектов</a>'
console.log(listTitle);
//4
const advRec = document.querySelector('.adv');
console.log(advRec);
advRec.remove();
//5
const listParts = listBooks[5].querySelectorAll('li');
listParts[1].after(listParts[9]);
listParts[4].after(listParts[2]);
console.log(listParts);
//6
const listParts6 = listBooks[2].querySelectorAll('li');
const elementLi = listParts6[8].cloneNode(true);
elementLi.innerHTML = '<li>Глава 8: За пределами ES6</li>'
listParts6[8].after(elementLi);
console.log(elementLi);

