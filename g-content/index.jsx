/**
 * Main content body
 */
import ContentHeader from './content-header';
import ContentFooter from './content-footer';
import { h } from 'preact';

const GContent = ({ children }) => (
  <article class="g-content article" itemscope itemtype="http://schema.org/Article">
    <ContentHeader />
    <div class="article-body o-typography-body-wrapper" itemprop="articleBody">
      {children}
      <ContentFooter />
    </div>
  </article>
);

export default GContent;
