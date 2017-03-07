/**
 * g-page: Graphics Page Container
 */

import GHeader from '../g-header';
import GFooter from '../g-footer';
import GContent from '../g-content';

import Helmet from 'react-helmet';
import { h } from 'preact';

const GPage = ({ children, config, origamiCSS, origamiJS }) => (
  <body id="g-ui" className="g-page">
    <Helmet
      htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
      title={config['page title']}
      titleTemplate="%s—FT.com"
      defaultTitle="Interactive Graphics project"
      titleAttributes={{itemprop: "name", lang: "en"}}
      base={{target: "_blank", href: "https://www.ft.com/"}}
      meta={[
        {name: "description", content: "Helmet application"},
        {property: "og:type", content: "article"}
      ]}
      link={[
        // {rel: 'canonical', href: "http://mysite.com/example"},
        // {rel: 'apple-touch-icon', href: "http://mysite.com/img/apple-touch-icon-57x57.png"},
        // {rel: 'apple-touch-icon', sizes: "72x72", href: "http://mysite.com/img/apple-touch-icon-72x72.png"},
        {rel: 'preconnect', 'href': 'https://origami-build.ft.com'},
        {rel: 'preconnect', 'href': 'https://build.origami.ft.com', crossOrigin: undefined},
        {rel:'preconnect', 'href': 'https://cdn.polyfill.io'},
        {rel: 'stylesheet', href: `//www.ft.com/__origami/service/build/v2/bundles/css?modules=${origamiCSS.join(',')}`}
      ]}
      script={[
        {src: "http://include.com/pathtojs.js", type: "text/javascript"},
        {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
      ]}
      noscript={[
        {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
      ]}
      style={[
        {type: "text/css", cssText: "body {background-color: blue;} p {font-size: 12px;}"}
      ]}
      onChangeClientState={(newState) => console.log(newState)}
    />
    <GHeader />
    <GContent>
      {children}
    </GContent>
    <GFooter />
    <script src={`//origami-build.ft.com/v2/bundles/js?modules=${origamiJS.join(',')}`}></script>
  </body>
);

export default GPage;
export { Helmet };
