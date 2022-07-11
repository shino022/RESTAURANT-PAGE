import './style.css';
function createHome() {
  const home = document.createElement('div');
  const btn = document.createElement('button');
  const header = document.createElement('div');
  const hours = document.createElement('div');
  const location = document.createElement('div');

  btn.textContent = 'Home';
  header.textContent = 'Organic Grain Bar';

  home.appendChild(btn);
  home.appendChild(header);
  home.appendChild(createDescription());
  home.appendChild(createHours());
  home.appendChild(createLocation());

  return home;
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

  return description
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

  return hours
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

  return location
}
document.body.appendChild(createHome());
