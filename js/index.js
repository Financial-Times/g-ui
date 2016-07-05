export default function igArticle(){};

igArticle.init = function() {
  // Set isNext global / body class based on user site preference
  window.isNext = /FT_SITE=NEXT/.test(document.cookie);
  document.body.classList.add(window.isNext && window.isNext === 'NEXT' ? 'is-next' : 'is-falcon');

  // Add .js-loaded body class, remove all .wait-for-js classes.
  document.body.classList.add('js-loaded');
  Array.prototype.forEach.call(document.querySelectorAll('.wait-for-js'), function( el ){
    el.classList.remove('wait-for-js');
  });
};
