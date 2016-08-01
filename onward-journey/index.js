export default function mount() {
  let ojTags = document.querySelectorAll('onward-journey');
  [...ojTags].forEach((tag) => {
    if (!tag.classList.contains('is-rendered')) {
      let uuid = tag.dataset.uuid;
      let layout = tag.dataset.layout || 'default';
      let limit = tag.dataset.count || 6;
      let urlBase = 'https://ft-ig-onwardjourney.herokuapp.com';
      let url = `${urlBase}/list/${uuid}?layout=${layout}&limit=${limit}&type=html`;
      if (uuid) {
        fetch(url)
        .then((res) => res.text())
        .then((html) => {
          tag.innerHTML = html;
        });
      } else {
        throw new Error('No UUID specified; onward journey ignored.');
      }
    }

    tag.classList.add('is-rendered');
  });
}
