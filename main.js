import igArticle from './js/index';

const constructAll = () => {
  igArticle.init();
  document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

export default igArticle;
