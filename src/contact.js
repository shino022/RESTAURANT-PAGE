export function createContact() {
  const content = document.querySelector('#content');
  const menu = document.createElement('div');
  const header = document.createElement('div');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }  

  header.textContent = 'Contact';
  header.classList.add('header');

  menu.appendChild(header);
  menu.appendChild(createCard());

  content.appendChild(menu);
}

function createCard() {
  const contact = document.createElement('div');
  const title = document.createElement('div');
  const content = document.createElement('div');


  contact.setAttribute('id', 'contact');
  contact.classList.add('card');
  title.classList.add('title');
  content.classList.add('content');

  title.textContent = 'My number';
  content.textContent = '000-000-0000';

  contact.appendChild(title);
  contact.appendChild(content);

  return contact;
}