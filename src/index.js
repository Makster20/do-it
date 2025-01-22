// index.js
import './style.css';
import { homePage } from "./home-page.js";
import { menuPage } from './menu-page.js';
import { contactPage } from './contact-page.js';

homePage()


const homeButton = document.querySelector('.homebutton');
const menuButton = document.querySelector('.menubutton');
const contactButton = document.querySelector('.contactbutton');

homeButton.addEventListener('click', homePage);
menuButton.addEventListener('click', menuPage);
contactButton.addEventListener('click', contactPage);
