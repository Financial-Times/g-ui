/**
 * g-page: Graphics Page Container
 */

import defaults from '../defaults';
import { h } from 'preact';

const GPage = ({
  stylesheetUrl,
  title,
  twitterHeadline,
  facebookHeadline,
  description = 'A project by FT Interactive Graphics',
  tracking = {
    product: null,
    microsite: null,
  },
  flags = {
    analytics: true,
  }
}) => (<head>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://origami-build.ft.com" />
  <link rel="preconnect" href="https://build.origami.ft.com" crossOrigin />
  <link rel="preconnect" href="https://cdn.polyfill.io" />
  <link rel="stylesheet" href={stylesheetUrl} />
  <link href="https://plus.google.com/113457471429583444041/" rel="publisher" />
  <meta property="fb:app_id" content="429755910551755" />
  <link rel="shortcut icon" href="https://ig.ft.com/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="https://ig.ft.com/apple-touch-icon.png" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="robots" content="index,follow" />
  <meta name="copyright" content="Financial Times" />
  <meta name="theme-color" content="#fff1e0" />
  <title>{title || defaults.headline} — FT.com</title>
  <meta name="twitter:title" content={twitterHeadline} />
  <meta property="og:title" content={facebookHeadline} />
  <meta name="description" content={description} />
  <meta name="twitter:description" content={description} />
  <meta property="og:description" content={description} />
  <link rel="canonical" href={url} />
  <meta name="twitter:url" content={url} />
  <meta property="og:url" content={url} />
  <link rel="image_src" href={mainImage} />
  <meta name="twitter:image" content={twitterImage} />
  <meta property="og:image" content={facebookImage} />
  <meta name="twitter:card" content={twitterCard} />
  <meta name="twitter:site" content="@ft" />
  <meta name="twitter:creator" content={twitterCreator} />
  {flags.analytics ? <link rel="preconnect" href="https://spoor-api.ft.com" /> : null}
  {flags.analytics ? <meta property="ft.track:is_live" content="true" /> : null}
  {tracking.product ? <meta property="ft.track:product" content="{{ tracking.product }}" /> : null}
  {tracking.micrositeName ? <meta property="ft.track:microsite_name" content="{{ tracking.micrositeName }}" /> : null}
</head>);

export default GHead;
