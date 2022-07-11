import './style.css';
import { createMenu } from './menu';
import { createContact } from './contact';
function createNav() {
  const nav = document.createElement('nav');
  // const coverHome = document.createElement('div');
  // const coverMenu = document.createElement('div');
  // const coverContact = document.createElement('div');
  const list = document.createElement('ui');
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');

  // coverHome.setAttribute('id', 'coverHome');
  // coverMenu.setAttribute('id', 'coverMenu');
  // coverContact.setAttribute('id', 'coverContact');
  home.setAttribute('id', 'home');
  menu.setAttribute('id', 'menu');
  contact.setAttribute('id', 'contact');

  // coverHome.classList.add('cover');
  // coverMenu.classList.add('cover');
  // coverMenu.classList.add('hidden');
  // coverContact.classList.add('cover');
  // coverContact.classList.add('hidden');
  list.classList.add('tabList');

  // coverHome.textContent = 'Home';
  // coverMenu.textContent = 'Menu';
  // coverContact.textContent = 'Contact';
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  home.addEventListener('click', createHome);
  menu.addEventListener('click', createMenu);
  contact.addEventListener( 'click', createContact);
  // nav.appendChild(coverHome);
  // nav.appendChild(coverMenu);
  // nav.appendChild(coverContact);
  nav.appendChild(list);
  list.appendChild(home);
  list.appendChild(menu);
  list.appendChild(contact);
  

  return nav;
}

function createHome() {
  const content = document.querySelector('#content');
  const home = document.createElement('div');
  const header = document.createElement('div');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }  
  header.textContent = 'Organic Grain Bar';
  header.classList.add('header');

  home.appendChild(header);
  home.appendChild(createDescription());
  home.appendChild(createHours());
  home.appendChild(createLocation());

  content.appendChild(home);
}

function createDescription() {
  const description = document.createElement('div');
  const title = document.createElement('div');
  const content = document.createElement('div');

  description.setAttribute('id', 'description');
  description.classList.add('card');
  title.classList.add('title');
  content.classList.add('content');

  title.textContent = 'About';
  content.textContent = 'This is the best restaurant in the nature. The atmosphere and customer service make you feel like you are sitting in the nature.';

  description.appendChild(title);
  description.appendChild(content);

  return description;
}

function createHours() {
  const hours = document.createElement('div');
  const title = document.createElement('div');
  const content = document.createElement('div');

  hours.setAttribute('id', 'hours');
  hours.classList.add('card');
  title.classList.add('title');
  content.classList.add('content');

  title.textContent = 'Hours';
  content.textContent = `Sunday: 8am - 8pm 
                         Monday: 6am - 6pm
                         Tuesday: 6am - 6pm 
                         Wednesday: 6am - 6pm 
                         Thursday: 6am - 10pm
                         Friday: 6am - 10pm
                         Saturday: 8am - 10pm`;

  hours.appendChild(title);
  hours.appendChild(content);

  return hours;
}

function createLocation() {
  const location = document.createElement('div');
  const title = document.createElement('div');
  const content = document.createElement('div');

  location.setAttribute('id', 'location');
  location.classList.add('card');
  title.classList.add('title');
  content.classList.add('content');

  title.textContent = 'Location';
  content.textContent = '1729 SE Neakahnie Ave, Portland, NA 97229';

  location.appendChild(title);
  location.appendChild(content);

  return location;
}
document.body.appendChild(createNav());

