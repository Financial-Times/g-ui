require('../../main.js');

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.className = document.documentElement.className
    .replace('core', 'enhanced');
  document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});
