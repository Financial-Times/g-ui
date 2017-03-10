/**
 * g-page: Graphics Page Container
 */

import { h } from 'preact';

import GHead from '../g-head';
import GHeader from '../g-header';
import GFooter from '../g-footer';
import GContent from '../g-content';

const GPage = ({ children, config, origamiCSS, origamiJS }) => (
  <body id="g-ui" className="g-page">
    <GHead config={config} origamiCSS={origamiCSS} />
    <GHeader />
    <GContent>
      {children}
    </GContent>
    <GFooter />
    <script src={`//origami-build.ft.com/v2/bundles/js?modules=${origamiJS.join(',')}`} />
  </body>
);

export default GPage;
export { Helmet } from '../g-head';
