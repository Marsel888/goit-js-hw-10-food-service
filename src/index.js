
// import menu1 from './templates.menu1.hbs'
  // import menu from './menu.json'
// import menu from './menu.json'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const toolBar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

toolBar.addEventListener('change', tols);

function tols(event) {
  const darkTheme = body.classList.value;
  let checked = event.target.checked;

  localStorage.setItem('check', checked);
 


if (checked == true) {
  body.classList.add(Theme.DARK)
  body.classList.remove(Theme.LIGHT)

}
else {
  body.classList.add(Theme.LIGHT)
  body.classList.remove(Theme.DARK)

}

localStorage.setItem('theme', darkTheme);




}
function save() {
  const theme = localStorage.getItem('theme');
  if (theme == 'dark-theme') {
    body.classList.add(Theme.LIGHT);
    toolBar.checked = false;
  }
  else {
    body.classList.add(Theme.DARK)
    toolBar.checked = true;
  }
 

}
save();
