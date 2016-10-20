/**
 * Main template loader
 */

const IGLoader = require('./ig-loader');

const { FileSystemLoader, Environment } = require('nunjucks');
const markdownTag = require('nunjucks-markdown');

const templates = {
  configure(paths, {filters={}, globals={}}) {
    delete require.cache[require.resolve('./filters/index')];

    const env = new Environment([
      new IGLoader(this.igArticlePaths),
      new FileSystemLoader(paths),
    ]);

    Object.assign(env.filters, require('./filters'), filters);

    markdownTag.register(env, env.filters.md);

    env.globals.now = function now(unixtime) {
      return unixtime ? Date.now() : new Date();
    };

    env.globals.ctx = function ctx(property, outputJSON) {
      const value = typeof property === 'string' ? this.ctx[property] : this.ctx;
      const stringify = outputJSON || (typeof property === 'boolean' && property);
      return stringify ? env.filters.json(value) : value;
    };

    Object.assign(env.globals, globals);

    return env;
  },

  igArticlePaths: [
    'node_modules/g-ui/',
  ],
};

module.exports.templates = templates;
