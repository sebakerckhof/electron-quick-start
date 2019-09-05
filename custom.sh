rm -rf ~/.cache/electron
rm -rf node_modules
export ELECTRON_MIRROR=https://seke:AP5AoCCz5jrcK7ZJk7YZUY6brYp@bin.barco.com/artifactory/www-cache/edu-electron-test4/
npm install
sudo chown root:root node_modules/electron/dist/chrome-sandbox
sudo chmod 4755 node_modules/electron/dist/chrome-sandbox
