/**
 * g-page: Graphics Page Container
 */

import GHeader from '../g-header';
import GFooter from '../g-footer';
import GBody from '../g-body';

import { h } from 'preact';

const GPage = ({ children }) => (
  <div id="root" class="g-page">
    <GHeader />
    <GBody>
      {children}
    </GBody>
    <GFooter />
  </div>
);

export default GPage;
