/**
 * Main template loader
 */

import IGLoader from './lib/ig-loader';

import {FileSystemLoader, Environment} from 'nunjucks';
import markdown_tag from 'nunjucks-markdown';

export const templates = {
  configure(paths) {
    delete require.cache[require.resolve('./filters/index')];

    const env = new Environment([
      new IGLoader(this.igArticlePaths),
      new FileSystemLoader(paths),
    ]);

    Object.assign(env.filters, require('./filters'));

    markdown_tag.register(env, env.filters.md);

    return env;
  },

  igArticlePaths: [
    'bower_components/ig-article/templates/includes',
    'bower_components/ig-article/templates',
  ],
}
