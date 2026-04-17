

const pages = [
  { url: '', title: 'Home' },
  { url: 'projects/', title: 'Projects' },
  { url: 'contact/', title: 'Contact' },
  { url: 'cv/', title: 'CV' },
  { url: 'https://github.com/yaqubmir3', title: 'GitHub' }
];

const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ? "/"
  : "/portfolio/";

const nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  url = !url.startsWith('http') ? BASE_PATH + url : url;
  let a = document.createElement('a');
  a.href = url;
  a.textContent = p.title;
  a.classList.toggle(
    'current',
    a.host === location.host && a.pathname === location.pathname
  );
  if (a.host !== location.host) a.target = '_blank';
  nav.append(a);
}

// ...existing code for nav...

// Add color scheme switcher to the top right
const colorSchemeLabel = document.createElement('label');
colorSchemeLabel.className = 'color-scheme';
colorSchemeLabel.innerHTML = `Theme:
  <select>
    <option value="light dark">Automatic</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>`;
document.body.insertAdjacentElement('afterbegin', colorSchemeLabel);

const select = colorSchemeLabel.querySelector('select');

function setColorScheme(scheme) {
  document.documentElement.style.setProperty('color-scheme', scheme);
  select.value = scheme;
}

// Load saved preference
if ('colorScheme' in localStorage) {
  setColorScheme(localStorage.colorScheme);
} else {
  setColorScheme('light dark');
}

select.addEventListener('input', function (event) {
  setColorScheme(event.target.value);
  localStorage.colorScheme = event.target.value;
});

// ...existing code below...