import './sass/main.scss';
import menu1 from './templates/menu1.hbs';

import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toolBar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const menuIngridient = document.querySelector('.menu')
const liIngridients = document.querySelector('.tag-list__item')

toolBar.addEventListener('change', tols);

function tols(event) {
  const darkTheme = body.classList.value;
  let checked = event.target.checked;

  localStorage.setItem('check', checked);

  if (checked == true) {
  
    body.classList.replace(Theme.LIGHT, Theme.DARK)
  } else {
   
    body.classList.replace(Theme.DARK, Theme.LIGHT)

  }

  localStorage.setItem('theme', darkTheme);
}
function save() {
  const theme = localStorage.getItem('theme');
  if (theme == 'dark-theme') {
    body.classList.add(Theme.LIGHT);
    toolBar.checked = false;
  } else {
    body.classList.add(Theme.DARK);
    toolBar.checked = true;
  }
}
save();


const repository = menu1(menu)

menuIngridient.insertAdjacentHTML('beforeend', repository)
// function name(menu) {

//   const test1 = menu.map(menu1).join('')
//   console.log(test1);
//      return menuIngridient.insertAdjacentHTML('afterbegin', test1)


   
// }

// console.log(name(menu));
