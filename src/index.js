import './sass/main.scss';
import template from './templates/template.hbs';

import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toolBar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const menuIngridient = document.querySelector('.menu');

toolBar.addEventListener('change', tols);

function tols(event) {
  let checked = event.target.checked;

  if (checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
  const darkTheme = body.classList.value;
  localStorage.setItem('theme', darkTheme);
}
function save() {
  const theme = localStorage.getItem('theme');
  const isDark = theme === Theme.DARK;
  
  if (isDark) {
    body.classList.add(Theme.DARK);
    toolBar.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
    toolBar.checked = false;
  }
}
save();

const repository = template(menu);

menuIngridient.insertAdjacentHTML('beforeend', repository);
