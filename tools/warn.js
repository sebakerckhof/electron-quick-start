const mirror = require('./mirror');

// This makes sure we don't accidentally install the non-barco version of electron
if (!mirror.includes('bin.barco.com')) {
  if (process.env.VANILLA_ELECTRON) {
    console.warn('Installing vanilla electron');
  } else {
    console.error('BARCO ELECTRON_MIRROR ENVAR NOT SET! run "VANILLA_ELECTRON=1 npm run barco:install" to install with the vanilla electron version');
    process.exit(1);
  }
} else if (process.env.VANILLA_ELECTRON) {
  console.warn('Both vanilla electron and barco electron mirror envars are set. Barco electron will take precedence');
}
