// see: https://github.com/electron-userland/electron-download/blob/master/readme.md

module.exports = process.env.NPM_CONFIG_ELECTRON_MIRROR ||
      process.env.npm_config_electron_mirror ||
      process.env.npm_package_config_electron_mirror ||
      process.env.ELECTRON_MIRROR ||
      'https://github.com/electron/electron/releases/download/v';
