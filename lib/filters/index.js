const markdownIt = require('markdown-it');
const removeMarkdown = require('remove-markdown');
const nunjucks = require('nunjucks');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                  'September', 'October', 'November', 'December'];

module.exports.ftdate = function ftdate(d) {
  const day = days[d.getUTCDay()];
  const month = months[d.getUTCMonth()];
  return !d ? '' : `${day}, ${d.getUTCDate()} ${month}, ${d.getUTCFullYear()}`;
};

const markdown = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
});

function md(str, inline) {
  return !str ? '' :
    new nunjucks.runtime.SafeString(inline ? markdown.renderInline(str) : markdown.render(str));
}

function plain(str, stripListLeaders = true) {
  return removeMarkdown(str, { stripListLeaders, gfm: true });
}

function encodedJSON(str) {
  try {
    return encodeURIComponent(JSON.stringify(JSON.parse(str || ''), null, ''));
  } catch (e) {
    return '';
  }
}

function spoorTrackingPixel(str) {
  const json = encodedJSON(str.trim());
  const img = `<img src="https://spoor-api.ft.com/px.gif?data=${json}" height="1" width="1" />`;
  return new nunjucks.runtime.SafeString(`<!--[if lt IE 9]>
    ${img}
    <![endif]-->
    <noscript data-o-component="o-tracking">${img}</noscript>`);
}

module.exports.spoorTrackingPixel = spoorTrackingPixel;
module.exports.md = md;
module.exports.plain = plain;
module.exports.encodedJSON = encodedJSON;
