export function createMenu() {
  const content = document.querySelector('#content');
  const menu = document.createElement('div');
  const header = document.createElement('div');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }  

  header.textContent = 'Menu';
  header.classList.add('header');

  menu.appendChild(header);
  menu.appendChild(createDrinks());
  menu.appendChild(createMainDishes());
  // menu.appendChild(createSides());

  content.appendChild(menu);
}

function createDrinks() {
  const drinks = document.createElement('div');
  const title = document.createElement('div');
  const content = document.createElement('div');


  drinks.setAttribute('id', 'drinks');
  drinks.classList.add('card');
  title.classList.add('title');
  content.classList.add('content');

  title.textContent = 'Drinks';
  content.textContent = `Water
                         Tea
                         Soda
                         Coffee`;

  drinks.appendChild(title);
  drinks.appendChild(content);

  return drinks;
}

function createMainDishes() {
  const dishes = document.createElement('div');
  const title = document.createElement('div');
  const content = document.createElement('div');

  dishes.setAttribute('id', 'dishes');
  dishes.classList.add('card');
  title.classList.add('title');
  content.classList.add('content');

  title.textContent = 'Main Dishes';
  content.textContent = `Wheat
                         Rice
                         Oats
                         Barley`;

  dishes.appendChild(title);
  dishes.appendChild(content);

  return dishes;
}
