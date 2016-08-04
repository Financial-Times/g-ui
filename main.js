import gUI from './js/index';

const constructAll = () => {
  gUI.init();
  document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

export default gUI;
