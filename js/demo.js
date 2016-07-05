import igArticle from './index';
Promise.all([
  fetch('/partials/header.html'),
  fetch('/partials/footer.html')
]).then(([header, footer]) => {
  Promise.all([header.text(), footer.text()]).then(([header, footer]) => {
    document.getElementById('ig-header').innerHTML = header;
    document.getElementById('ig-footer').innerHTML = footer;
    igArticle.init();
  });
});
