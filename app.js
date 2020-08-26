import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sideBarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  sideBarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sideBarWrapper.classList.remove('show');
});
