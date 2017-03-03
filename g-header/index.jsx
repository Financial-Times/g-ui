/**
* Header component
* ----------------
* Gets styles from o-header
* Requires keeping markup up-to-date with whatever they have in o-header.
*
* Converted to JSX via http://magic.reactjs.net/htmltojsx.htm
* @TODO write script that generates this automatically from mustache/handlebars using HTMLtoJSX.
* @TODO import styles, JS via Bower instead of Build Service (maybe?)
*/

import { h } from 'preact';
// import './main.scss';

const GHeader = (props) => (
  <div className="g-header">
    <header className="o-header o-header--simple" data-o-component="o-header" data-o-header--no-js>
      <div className="o-header__row o-header__top">
        <div className="o-header__container">
          <div className="o-header__top-wrapper">
            <div className="o-header__top-column o-header__top-column--left">
              <a href="#o-header-drawer" className="o-header__top-link o-header__top-link--menu" aria-controls="o-header-drawer" title="Open drawer menu">
                <span className="o-header__top-link-label">Menu</span>
              </a>
              <a href="#o-header-search" className="o-header__top-link o-header__top-link--search" aria-controls="o-header-search" title="Open search bar">
                <span className="o-header__top-link-label">Search</span>
              </a>
            </div>
            <div className="o-header__top-column o-header__top-column--center">
              <a className="o-header__top-logo" href="/" title="Go to Financial Times homepage">
                <span className="o-header__visually-hidden">Financial Times</span>
              </a>
            </div>
            <div className="o-header__top-column o-header__top-column--right">
              <a className="o-header__top-link o-header__top-link--myft" href="/myft" aria-label="My F T">
                <span className="o-header__visually-hidden">myFT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="o-header-search" className="o-header__row o-header__search o--if-js" role="search" data-o-header-search>
        <div className="o-header__container">
          <form className="o-header__search-form" action="/search" role="search" aria-label="Site search">
            <label className="o-header__visually-hidden" htmlFor="o-header-search-term-js">Search the <abbr title="Financial Times">FT</abbr></label>
            <input className="o-header__search-term" id="o-header-search-term-js" name="q" type="text" placeholder="Search the FT" />
            <button className="o-header__search-submit" type="submit">
              Search
            </button>
            <button className="o-header__search-close" type="button" aria-controls="o-header-search" title="Close search bar">
              <span className="o-header__visually-hidden">Close</span>
            </button>
          </form>
        </div>
      </div>
    </header>
    <div className="o-header__drawer" id="o-header-drawer" role="navigation" aria-label="Drawer menu" data-o-header-drawer data-o-header-drawer--no-js>
      <div className="o-header__drawer-inner">
        <div className="o-header__drawer-tools">
          <a className="o-header__drawer-tools-logo" href="/">
            <span className="o-header__visually-hidden">Financial Times</span>
          </a>
          <button type="button" className="o-header__drawer-tools-close" aria-controls="o-header-drawer" title="Close drawer menu">
            <span className="o-header__visually-hidden">Close</span>
          </button>
        </div>
        <nav className="o-header__drawer-editions" aria-label="Edition switcher">
          <a className="o-header__drawer-editions-link" href="/uk?edition=uk" aria-label="Current edition" aria-selected="true">UK Edition</a>
          <a className="o-header__drawer-editions-link" href="/international?edition=international">International Edition</a>
        </nav>
        <div className="o-header__drawer-search">
          <form className="o-header__drawer-search-form" action="/search" role="search" aria-label="Site search">
            <label className="o-header__visually-hidden" htmlFor="o-header-drawer-search-term">Search the <abbr title="Financial Times">FT</abbr></label>
            <input className="o-header__drawer-search-term" id="o-header-drawer-search-term" name="q" type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Search the FT" />
            <button className="o-header__drawer-search-submit" type="submit">
              <span className="o-header__visually-hidden">Search</span>
            </button>
          </form>
        </div>
        <nav className="o-header__drawer-menu o-header__drawer-menu--primary">
          <ul className="o-header__drawer-menu-list">
            <li className="o-header__drawer-menu-item o-header__drawer-menu-item--heading">Top sections</li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--selected" href="#" aria-label="Current page" aria-selected="true">Home</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">World</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-1">
                  Show more World links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-1">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">World Economy</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">UK</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">US</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">China</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Africa</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Asia Pacific</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Emerging Markets</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Europe</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Latin America</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Middle East and Africa</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">UK</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-2">
                  Show more UK links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-2">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">UK Economy</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">UK Politics &amp; Policy</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">UK Companies</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">Companies</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-3">
                  Show more Companies links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-3">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Energy</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Financials</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Health</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Industrials</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Media</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Retail &amp; Consumer</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Technology</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Telecoms</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Transport</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">Markets</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-4">
                  Show more Markets links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-4">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Alphaville</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Markets Data</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Capital Markets</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Commodities</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Currencies</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Equities</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Fund Management</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Trading</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">Opinion</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-5">
                  Show more Opinion links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-5">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Columnists</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">FT View</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">The Big Read</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Lex</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Alphaville</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Obituaries</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Letters</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">Work &amp; Careers</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-6">
                  Show more Work &amp; Careers links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-6">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Business School Rankings</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Business Education</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Entrepreneurship</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Recruitment</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Business Books</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">Life &amp; Arts</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-7">
                  Show more Life &amp; Arts links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-7">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">House &amp; Home</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Books</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Food &amp; Drink</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Travel</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Style</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Arts</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Sports</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Music</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Film, TV &amp; Radio</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Magazine</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <div className="o-header__drawer-menu-toggle-wrapper">
                <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="#">Personal Finance</a>
                <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-8">
                  Show more Personal Finance links
                </button>
              </div>
              <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-8">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Property &amp; Mortgages</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Investments</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Pensions</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Tax</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="#">Bankings &amp; Savings</a>
                </li>
              </ul>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">Science &amp; Environment</a>
            </li>
            <li className="o-header__drawer-menu-item o-header__drawer-menu-item--heading">FT recommends</li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">Lex</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">Alphaville</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">Lunch with the FT</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">Video</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">Special Reports</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">News feed</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="#">Newsletters</a>
            </li>
            <li className="o-header__drawer-menu-item o-header__drawer-menu-item--divide">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link--secondary o-header__drawer-menu-link--unselected" href="#">My FT</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link--secondary o-header__drawer-menu-link--unselected" href="#">Portfolio</a>
            </li>
            <li className="o-header__drawer-menu-item ">
              <a className="o-header__drawer-menu-link o-header__drawer-menu-link--secondary o-header__drawer-menu-link--unselected" href="#">Today's Paper</a>
            </li>
          </ul>
        </nav>
        <nav className="o-header__drawer-menu o-header__drawer-menu--user">
          <ul className="o-header__drawer-menu-list">
            <li className="o-header__drawer-menu-item">
              <a className="o-header__drawer-menu-link" href="/products?segID=400863&segmentID=190b4443-dc03-bd53-e79b-b4b6fbd04e64">Subscribe</a>
            </li>
            <li className="o-header__drawer-menu-item">
              <a className="o-header__drawer-menu-link" href="/login">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default GHeader;
