/**
 * g-page: Graphics Page Container
 */

import Helmet from 'preact-helmet';
import { h } from 'preact';

import defaults from '../defaults';

export default ({ config }) => (
  <Helmet
    htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
    title={config['page title']}
    titleTemplate="%s—FT.com"
    defaultTitle="Interactive Graphics project"
    titleAttributes={{itemprop: 'name', lang: 'en'}}
    base={{target: '_blank', href: 'https://www.ft.com/'}}
    meta={[
      {name: 'description', content: (config.description || defaults.description)},
      {property: "og:type", content: 'article'},
      {charSet: 'utf-8'},
      {httpEquiv: 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {property: 'fb:app_id', content: '429755910551755'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'robots', content: 'index,follow'},
      {name: 'copyright', content: 'Financial Times'},
      {name: 'theme-color', content: '#fff1e0'},
      {name: 'twitter:title', content: (config.twitterHeadline || config['page title'])},
      {property: 'og:title', content: (config.facebookHeadline || config['page title'])},
      {name: 'description', content: (config.description || defaults.description)},
      {name: 'twitter:description', content: (config.description || defaults.description)},
      {property: 'og:description', content: (config.description || defaults.description)},
      {rel: 'canonical', href: config['canonical url']},
      {rel: 'image_src', href: (config['main image url'] || defaults['main image url'])},
      {name: 'twitter:url', content: (config['twitter url'] || config['canonical url'])},
      {property: 'og:url', content: (config['facebook url'] || config['canonical url'])},
      {name: 'twitter:image', content: (config['twitter image url'] || config['main image url'] || defaults['main image url'])},
      {property: 'og:image', content: (config['facebook image url'] || config['main image url'] || defaults['main image url'])},
      {name: 'twitter:card', content: (config['twitter card'] || defaults['twitter card'])},
      {name: 'twitter:site', content: '@ft'},
      {name: 'twitter:creator', content: config['twitter creator value']},
      (config['flags:analytics'] ? {property: 'ft.track:is_live', content: 'true'} : undefined),
      (config['tracking:product'] ? {property: 'ft.track:product', content: config['tracking:product']} : undefined),
      (config['tracking:micrositeName'] ? {property: 'ft.track:microsite_name', content: config['tracking:micrositeName']} : undefined)
      ].filter(i => i)}
    link={[
      {rel: 'canonical', href: config['canonical url'] || window.location.href},
      {rel: 'shortcut icon', href: 'https://ig.ft.com/favicon.ico'},
      {rel: 'apple-touch-icon', href: 'https://ig.ft.com/apple-touch-icon.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: 'https://ig.ft.com/apple-touch-icon-72x72.png'},
      {rel: 'preconnect', 'href': 'https://origami-build.ft.com'},
      {rel: 'preconnect', 'href': 'https://build.origami.ft.com', crossOrigin: undefined},
      {rel:'preconnect', 'href': 'https://cdn.polyfill.io'},
      {rel: 'stylesheet', href: `//www.ft.com/__origami/service/build/v2/bundles/css?modules=${config.origami.css.join(',')}`},
      {rel: 'publisher', href: 'https://plus.google.com/113457471429583444041/'},
      (config['flags:analytics'] ? {rel: 'preconnect', href: 'https://spoor-api.ft.com'} : undefined),
      ].filter(i => i)}
    script={[
        // {src: "http://include.com/pathtojs.js", type: "text/javascript"},
      {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
    ]}
    noscript={[
        // {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
    ]}
    style={[
        // {type: "text/css", cssText: "body {background-color: blue;} p {font-size: 12px;}"}
    ]}
    onChangeClientState={(newState) => console.log(newState)}
  />);

export { Helmet };
