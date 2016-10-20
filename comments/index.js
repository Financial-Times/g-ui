/* eslint-disable */

const oCommentsUrl = 'https://origami-build.ft.com/v2/bundles/js?export=oComments&modules=o-comments@^3.3.0&autoinit=0';

export default function init({elementId = 'comments', delay = 1000, initialNumVisible = 10} = {}) {

  const container = document.getElementById(elementId);
  const articleId = document.documentElement.getAttribute('data-content-id');

  if (!container) {
    return Promise.reject('No comments container element present');
  };

  if (!articleId) {
    return Promise.reject('Cannot get comments, article ID not found.');
  }

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      queue(oCommentsUrl, () => {
        if (!window.oComments) {
          Promise.reject('Couldn\'t get oComments');
          return;
        }

        try {
          resolve(new oComments['o-comments'](container, {
            title: document.title,
            url: document.location.href,
            articleId: articleId,
            livefyre: {
              initialNumVisible: initialNumVisible,
              disableIE8Shim: true,
              disableThirdPartyAnalytics: true
            }
          }));

        } catch(err) {
          reject(err);
        }
      }, true);
    }, delay);
  });
}
