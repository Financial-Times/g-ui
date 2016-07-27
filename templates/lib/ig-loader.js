/**
 * IGLoader
 * Loads templates of path format `ig-article/something` from
 * `bower_components/ig-article/templates/includes/something.{html,njk}`
 */

import nunjucks from 'nunjucks';
import path from 'path';
import chokidar from 'chokidar';
import { existsSync, readFileSync } from 'fs';

/* eslint-disable no-console */

const defaultSearchPaths = [
  'bower_components/ig-article/templates/includes',
  'bower_components/ig-article/templates',
];

export default nunjucks.Loader.extend({
  init(searchPaths = defaultSearchPaths, opts = {}) {
    this.pathsToNames = {};
    this.noCache = !!opts.noCache;

    if (searchPaths) {
      // For windows, convert to forward slashes
      this.searchPaths = (Array.isArray(searchPaths) ? searchPaths : [searchPaths])
        .map(path.normalize);
    } else {
      this.searchPaths = ['.'];
    }

    if (opts.watch) {
      // Watch all the templates in the paths and fire an event when
      // they change
      const paths = this.searchPaths.filter(p => existsSync(p));
      const watcher = chokidar.watch(paths);
      watcher.on('all', (event, fullname) => {
        const fullnamePath = path.resolve(fullname);
        if (event === 'change' && fullnamePath in this.pathsToNames) {
          this.emit('update', this.pathsToNames[fullnamePath]);
        }
      });
      watcher.on('error', (error) => {
        console.log(`Watcher error: ${error}`);
      });
    }
  },

  getSource(name) {
    const frags = name.split('/');

    if (frags.length > 1 && frags[0] === 'ig-article') {
      let fullpath = null;
      const paths = this.searchPaths;
      const filename = frags[1].match(/(.html|.njk)/) ? frags[1] : `${frags[1]}.html`;

      for (let i = 0; i < paths.length; i++) {
        const basePath = path.resolve(paths[i]);
        const p = path.resolve(paths[i], filename);

        // Only allow the current directory and anything
        // underneath it to be searched
        if (p.indexOf(basePath) === 0 && existsSync(p)) {
          fullpath = p;
          break;
        }
      }

      if (!fullpath) {
        return null;
      }

      this.pathsToNames[fullpath] = name;

      return {
        src: readFileSync(fullpath, 'utf-8'),
        path: fullpath,
        noCache: this.noCache,
      };
    }

    return null;
  },
});
