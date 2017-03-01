/**
 * g-page: Graphics Page Container
 */

import gHeader from '../g-header';
import gFooter from '../g-footer';
import gBody from '../g-body';

const gPage = ({ children }) => (
  <div id="root">
    <gHeader />
    <gBody>
      {children}
    </gBody>
    <gFooter />
  </div>
);

export default gPage;
