/**
 * Main content body
 */

import { h } from 'preact';
// import './index.scss';

const GContent = ({ children }) => (
  <article class="g-content article" itemscope itemtype="http://schema.org/Article">
    <div class="article-head">
      <header></header>
    </div>
    <div class="article-body o-typography-body-wrapper" itemprop="articleBody">
      {children}
      <footer class="o-typography-footer" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
        <small>
          <a href="http://www.ft.com/servicestools/help/copyright" data-trackable="link-copyright">Copyright</a>
          <span itemprop="name">The Financial Times</span> Limited { new Date().getFullYear() }.
          All rights reserved. You may share using our article tools. Please don't cut articles from FT.com and redistribute by email or post to the web.</small>
      </footer>
    </div>
  </article>
);

export default GContent;
