// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Modules to control application life and create native browser window
const {app} = require('electron').remote;
console.log(app.getGPUFeatureStatus());

