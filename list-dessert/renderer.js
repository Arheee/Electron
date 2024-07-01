const { shell } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  const desserts = [
    { name: 'Mochi', url: 'https://fr.wikipedia.org/wiki/Mochi' },
    { name: 'Dorayaki', url: 'https://fr.wikipedia.org/wiki/Dorayaki' },
    { name: 'Bingsu', url: 'https://fr.wikipedia.org/wiki/Bingsu' },
    { name: 'Dango', url: 'https://fr.wikipedia.org/wiki/Dango' },
    { name: 'Tangyuan', url: 'https://fr.wikipedia.org/wiki/Tangyuan' }
  ];

  const listContainer = document.getElementById('dessert-list');

  desserts.forEach(dessert => {
    const listItem = document.createElement('li');
    listItem.textContent = dessert.name;
    listItem.setAttribute('data-url', dessert.url);
    listItem.addEventListener('click', () => {
      const url = listItem.getAttribute('data-url');
      if (url) {
        shell.openExternal(url);
      }
    });
    listContainer.appendChild(listItem);
  });
});
