set -e

# This script is our version of npm install, but allows us to set some envars
# For during the install procedure (e.g. electron_config_cache used by electron-downloader postinstall step)
export SKIP_PREINSTALL=1
export electron_config_cache=`node ./tools/cache.js`
node ./tools/warn.js
npm install
./sandbox.sh