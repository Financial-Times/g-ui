export default function init() {
  return new Promise((resolve, reject) => {
    // https://origami-build.ft.com/v2/bundles/js?export=oAds&modules=o-ads@^6.0.2
    queue('http://ig.ft.com/static/g-ui/o-ads.20161025.js', () => {

      if (!window.oAds) {
        reject(new Error('Could not load oAds'));
        return;
      }

      resolve();
    }, true);
  });
}
