rm -rf ~/.cache/electron
rm -rf node_modules
export ELECTRON_MIRROR=
npm install
sudo chown root:root node_modules/electron/dist/chrome-sandbox
sudo chmod 4755 node_modules/electron/dist/chrome-sandbox
