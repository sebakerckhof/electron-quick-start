if (!process.env.SKIP_PREINSTALL) {
  // Because we want to set the electron-download cache path (see ./cache.js)
  // We need to have our own install script which sets the envars
  // Therefore disallow running install directly.
  //
  // And you can't change envars for the install process from a preinstall file.
  console.error('Purple install requires you to run "npm run barco:install" instead of "npm install"');
  process.exit(1);
}
