/**
 * Footer component
 * ----------------
 * Gets styles from o-footer
 * Requires keeping markup up-to-date with whatever they have in o-footer.
 *
 * Converted to JSX via http://magic.reactjs.net/htmltojsx.htm
 * @TODO write script that generates this automatically from mustache/handlebars using HTMLtoJSX.
 * @TODO import styles, JS via Bower instead of Build Service (maybe?)
 */

import { h } from 'preact';

const GFooter = (props) => (
  <footer className="o-footer o-footer--theme-dark" data-o-component="o-footer" data-o-footer--no-js>
    <div className="o-footer__container">
      <div className="o-footer__row">
        <nav className="o-footer__matrix" role="navigation" aria-label="Useful links">
          <div className="o-footer__matrix-group o-footer__matrix-group--1">
            <h6 className="o-footer__matrix-title">
              Support
            </h6>
            <div className="o-footer__matrix-content" id="o-footer-section-0">
              <div className="o-footer__matrix-column">
                <a className="o-footer__matrix-link" href="//www.ft.com/help">Help</a>
                <a className="o-footer__matrix-link" href="//www.ft.com/aboutus">About Us</a>
              </div>
            </div>
          </div>
          <div className="o-footer__matrix-group o-footer__matrix-group--1">
            <h6 className="o-footer__matrix-title">
              Legal &amp; Privacy
            </h6>
            <div className="o-footer__matrix-content" id="o-footer-section-1">
              <div className="o-footer__matrix-column">
                <a className="o-footer__matrix-link" href="//www.ft.com/servicestools/help/terms">Terms &amp; Conditions</a>
                <a className="o-footer__matrix-link" href="//www.ft.com/servicestools/help/privacy">Privacy</a>
                <a className="o-footer__matrix-link" href="//www.ft.com/cookiepolicy">Cookies</a>
                <a className="o-footer__matrix-link" href="//www.ft.com/servicestools/help/copyright">Copyright</a>
              </div>
            </div>
          </div>
          <div className="o-footer__matrix-group o-footer__matrix-group--2">
            <h6 className="o-footer__matrix-title" aria-controls="o-footer-section-2">
              Services
            </h6>
            <div className="o-footer__matrix-content" id="o-footer-section-2">
              <div className="o-footer__matrix-column">
                <a className="o-footer__matrix-link" href="//sub.ft.com/spa_5">Individual Subscriptions</a>
                <a className="o-footer__matrix-link" href="//enterprise.ft.com/en-gb/services/group-subscriptions/">Group Subscriptions</a>
                <a className="o-footer__matrix-link" href="//enterprise.ft.com/en-gb/services/republishing/">Republishing</a>
                <a className="o-footer__matrix-link" href="//www.businessesforsale.com/ft2/notices">Contracts &amp; Tenders</a>
                <a className="o-footer__matrix-link" href="//commerce.uk.reuters.com/purchase/mostPopular.do?rpc&#x3D;471">Analysts Research</a>
              </div>
              <div className="o-footer__matrix-column">
                <a className="o-footer__matrix-link" href="//www.exec-appointments.com/">Executive Job Search</a>
                <a className="o-footer__matrix-link" aria-label="Advertise with the F T" href="//fttoolkit.co.uk/d/">Advertise with the FT</a>
                <a className="o-footer__matrix-link" aria-label="Follow the F T on Twitter" href="//twitter.com/ft">Follow the FT on Twitter</a>
              </div>
            </div>
          </div>
          <div className="o-footer__matrix-group o-footer__matrix-group--2">
            <h6 className="o-footer__matrix-title" aria-controls="o-footer-section-3">
              Tools
            </h6>
            <div className="o-footer__matrix-content" id="o-footer-section-3">
              <div className="o-footer__matrix-column">
                <a className="o-footer__matrix-link" href="//markets.ft.com/data/portfolio/dashboard">Portfolio</a>
                <a className="o-footer__matrix-link" href="//ftepaper.ft.com">Today's Paper</a>
                <a className="o-footer__matrix-link" href="//markets.ft.com/data/alerts/">Alerts Hub</a>
                <a className="o-footer__matrix-link" href="//lexicon.ft.com/">Lexicon</a>
                <a className="o-footer__matrix-link" href="//rankings.ft.com/businessschoolrankings/global-mba-ranking-2016">MBA Rankings</a>
              </div>
              <div className="o-footer__matrix-column">
                <a className="o-footer__matrix-link" href="//markets.ft.com/Research/Economic-Calendar">Economic Calendar</a>
                <a className="o-footer__matrix-link" href="//nbe.ft.com/nbe/profile.cfm">Newsletters</a>
                <a className="o-footer__matrix-link" href="//markets.ft.com/research/Markets/Currencies?segid&#x3D;70113">Currency Converter</a>
                <a className="o-footer__matrix-link" aria-label="E-books" href="//www.ft.com/ebooks">Ebooks</a>
              </div>
            </div>
          </div>
        </nav>
        <h6 className="o-footer__external-link o-footer__matrix-title">
          <a className="o-footer__more-from-ft o-footer__matrix-title" href="http://ft.com/more-from-ft-group">More from the FT Group</a>
        </h6>
      </div>
      <div className="o-footer__copyright" role="contentinfo">
        <small>
          Markets data delayed by at least 15 minutes. © THE FINANCIAL TIMES LTD 2017.
          <abbr title="Financial Times" aria-label="F T">FT</abbr> and ‘Financial Times’ are trademarks of The Financial Times Ltd.<br /><br />
          The Financial Times and its journalism are subject to a self-regulation regime under the <a href="http://www.ft.com/editorialcode" aria-label="F T Editorial Code of Practice">FT Editorial Code of Practice</a>.
        </small>
      </div>
    </div>
    <div className="o-footer__brand">
      <div className="o-footer__container">
        <div className="o-footer__brand-logo" />
      </div>
    </div>
  </footer>
);

export default GFooter;
