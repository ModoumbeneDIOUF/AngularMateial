const {
  app,
  BrowserWindow
  } = require('electron')
const url = require("url");
const path = require("path");

let appWindow

function initWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  appWindow.loadURL(
    url.format({

      pathname: path.join(`file:///${__dirname}/dist/angular-electron-first-app/index.html`),
      // win.loadURL(`file:///${__dirname}/dist/angular-electron-first-app/index.html`)p

      protocol: "file:",
      slashes: true
    })
  );

  appWindow.on('closed', function () {
    appWindow = null
  })
}

app.on('ready', initWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    initWindow()
  }
})
