/**
 * Footer for the bottom of articles
 * @type {String}
 */
export default() => (<footer class="o-typography-footer" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
  <small>
    <a href="http://www.ft.com/servicestools/help/copyright" data-trackable="link-copyright">Copyright</a>
    <span itemprop="name">The Financial Times</span> Limited { new Date().getFullYear() }.
    All rights reserved. You may share using our article tools. Please don't cut articles from FT.com and redistribute by email or post to the web.</small>
</footer>);
