/**
 * g-page: Graphics Page Container
 */

import { h } from 'preact';

import GHead from '../g-head';
import GHeader from '../g-header';
import GFooter from '../g-footer';
import GContent from '../g-content';

const GPage = ({ children, config, origamiCSS, origamiJS }) => (
  <main id="g-ui" className="g-page">
    <GHead config={config} origamiCSS={origamiCSS} />
    <GHeader />
    <GContent>
      {children}
    </GContent>
    <GFooter />
  </main>
);

export default GPage;
