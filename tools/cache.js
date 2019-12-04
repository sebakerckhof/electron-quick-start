/**
 * This file outputs the cache directory for electron binaries
 * according to the mirror.
 *
 * Electron will download binaries and save them to a cache
 * but it assumes that all binaries for a specific platform / version
 * are identical accross all mirrors
 * We have custom Barco binaries which are different than other electron mirrors
 * To avoid getting a wrong binary from the cache when changing mirrors
 * we add the mirror url to the cache path.
 */

const { URL } = require('url');
const os = require('os');
const path = require('path');
const mirror = require('./mirror');

const url = new URL(mirror);

// remove all characters that are not allowed in directory names
const sanitizedUrlIdentifier = (url.host + url.pathname).replace(/[^a-zA-Z0-9.-]/g, 'X');
const cache = path.join(os.homedir(), '.cache', `electron-${sanitizedUrlIdentifier}`);
console.log(cache);
