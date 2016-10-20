'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isotime = isotime;
exports.strftime = strftime;
exports.ftdate = ftdate;
exports.md = md;
exports.plain = plain;
exports.json = json;
exports.inlineScriptElement = inlineScriptElement;
exports.jsonScriptElement = jsonScriptElement;
exports.encodedJSON = encodedJSON;
exports.spoorTrackingPixel = spoorTrackingPixel;

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _removeMarkdown = require('remove-markdown');

var _removeMarkdown2 = _interopRequireDefault(_removeMarkdown);

var _d3TimeFormat = require('d3-time-format');

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SafeString = _nunjucks2.default.runtime.SafeString;

const formatterCache = new Map();
const defaultFTDateFormat = '%A, %-e %B %Y';

function isotime(date) {
  if (!date) {
    return '';
  } else if (!(date instanceof Date)) {
    return date;
  }

  return date.toISOString();
}

// strftime format docs: https://github.com/d3/d3-time-format
function strftime(date, format = defaultFTDateFormat) {
  if (!date) {
    return '';
  } else if (!(date instanceof Date)) {
    return date;
  }

  if (formatterCache.has(format)) {
    return formatterCache.get(format)(date);
  }

  const fm = (0, _d3TimeFormat.utcFormat)(format);
  formatterCache.set(format, fm);
  return fm(date);
}

function ftdate(d) {
  return strftime(d);
}

const markdown = (0, _markdownIt2.default)({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
});

function md(str, inline) {
  return !str ? '' : new SafeString(inline ? markdown.renderInline(str) : markdown.render(str));
}

function plain(str, stripListLeaders = true) {
  return !str ? null : (0, _removeMarkdown2.default)(str, { stripListLeaders, gfm: true });
}

function json(o, prop) {
  try {
    return new SafeString(JSON.stringify(prop ? o[prop] : o).replace(/<\/script/g, '\\x3C/script'));
  } catch (e) {
    return '';
  }
}

function inlineScriptElement(o, name) {
  return new SafeString(`<script>;(function(){window.${ name }=${ json(o) };}());</script>`);
}

function jsonScriptElement(o, id, attr) {
  const idAttr = id ? ` id="${ id }"` : '';
  return new SafeString(`<script type="application/json"${ idAttr } ${ attr }>${ json(o) }</script>`);
}

function encodedJSON(str) {
  try {
    return encodeURIComponent(JSON.stringify(JSON.parse(str || ''), null, ''));
  } catch (e) {
    return '';
  }
}

function spoorTrackingPixel(str) {
  const jsonString = encodedJSON(str.trim());
  const img = `<img src="https://spoor-api.ft.com/px.gif?data=${ jsonString }" height="1" width="1" />`;
  return new SafeString(`<!--[if lt IE 9]>
  ${ img }
  <![endif]-->
  <noscript data-o-component="o-tracking">${ img }</noscript>`);
}