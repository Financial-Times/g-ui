'use strict';

/**
 * IGLoader
 * Loads templates of path format `g-ui/something` from
 * `bower_components/g-ui/templates/includes/something.{html,njk}`
 */

const nunjucks = require('nunjucks');
const path = require('path');
const chokidar = require('chokidar');
const { existsSync, readFileSync, realpathSync } = require('fs');

/* eslint-disable no-console */

const defaultSearchPaths = ['node_modules/g-ui/'];

module.exports = nunjucks.Loader.extend({
  init(searchPaths = defaultSearchPaths, opts = {}) {
    this.pathsToNames = {};
    this.noCache = !!opts.noCache;

    if (searchPaths) {
      // For windows, convert to forward slashes
      this.searchPaths = (Array.isArray(searchPaths) ? searchPaths : [searchPaths]).map(path.normalize);
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
      watcher.on('error', error => {
        console.log(`Watcher error: ${ error }`);
      });
    }
  },

  getSource(name) {
    const frags = name.split('/');
    const prefix = frags.shift();
    const suffix = frags[frags.length - 1];
    const filePath = frags.join('/');

    if (prefix === 'g-ui') {
      let fullpath = null;
      const paths = this.searchPaths;

      for (let i = 0; i < paths.length; i++) {
        const basePath = path.resolve(paths[i]);
        const p = path.resolve(paths[i], filePath.replace(/(.html|.njk)/, ''));

        // Only allow the current directory and anything
        // underneath it to be searched
        const startsWith = p.indexOf(basePath) === 0;
        if (startsWith && existsSync(`${ p }/template.html`)) {
          fullpath = `${ p }/template.html`;
          break;
        } else if (startsWith && existsSync(`${ p }.html`)) {
          fullpath = `${ p }.html`;
          break;
        } else if (startsWith && existsSync(`${ p }/${ suffix }.html`)) {
          fullpath = `${ p }/${ suffix }.html`;
          break;
        }
      }

      if (!fullpath) {
        return null;
      }

      this.pathsToNames[fullpath] = name;
      const rp = realpathSync(fullpath);
      const source = readFileSync(rp, 'utf-8');
      return {
        src: source,
        path: fullpath,
        noCache: this.noCache
      };
    }

    return null;
  }
});