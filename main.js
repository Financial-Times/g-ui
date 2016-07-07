// import oShare from 'o-share'; // Importing o-share causes a registerElement duplication error.
import oDate from 'o-date';
import igArticle from './js/index';

const constructAll = () => {
  // oShare.init();
  oDate.init();
  igArticle.init();
  document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

export default igArticle;
