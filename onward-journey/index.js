export const elementSelector = '[data-g-component="onward-journey"]';

export const serviceBaseUrl = 'https://ig.ft.com/onwardjourney/v1/';

export const fetchList = (list, layout, limit) =>
            fetch(`${serviceBaseUrl}${list}/html/${layout}?limit=${limit}`)
              .then(res => {
                if (res.status >= 200 && res.status < 300) {
                  return res
                } else {
                  const error = new Error(res.statusText)
                  error.res = response
                  throw error
                }
              })
              .then(res => res.text());

export function renderIntoElement(element) {
  if (element.classList.contains('is-rendered')) return;
  const list = element.getAttribute('data-list') || 'list/graphics';
  const layout = element.getAttribute('data-layout') || '';
  const limit = parseInt(element.getAttribute('data-rows') || '1') * 4;
  fetchList(list, layout, limit)
    .then(html => {
      element.innerHTML = html;
      element.classList.add('is-rendered');
    })
    .catch(() => {
      element.remove();
    });
}

export default function init({delay = 800} = {}) {
  setTimeout(() => {
    [...document.querySelectorAll(elementSelector)].forEach(renderIntoElement);
  }, delay);
}
