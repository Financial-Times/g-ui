export default function init() {
  return new Promise((resolve, reject) => {
    queue('https://origami-build.ft.com/v2/bundles/js?export=oAds&modules=o-ads@^4.3.2', () => {

      if (!window.oAds) {
        reject(new Error('Could not load oAds'));
        return;
      }

      resolve();
    }, true);
  });
}
