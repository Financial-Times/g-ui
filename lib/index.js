/**
 * Main template loader
 */

const IGLoader = require('./ig-loader');

const { FileSystemLoader, Environment } = require('nunjucks');
const markdownTag = require('nunjucks-markdown');

const templates = {
  configure(paths) {
    delete require.cache[require.resolve('./filters/index')];

    const env = new Environment([
      new IGLoader(this.igArticlePaths),
      new FileSystemLoader(paths),
    ]);

    Object.assign(env.filters, require('./filters'));

    markdownTag.register(env, env.filters.md);

    return env;
  },

  igArticlePaths: [
    'bower_components/ig-article/',
  ],
};

module.exports.templates = templates;
