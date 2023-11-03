const { BrowserWindow, nativeImage} = require('electron')
const { resolve } = require('node:path')
const logo = resolve(__dirname, '../', 'public', 'logo.png')

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 820,
        resizable: false,
        icon: logo,
        webPreferences: {
          contentSecurityPolicy: "default-src 'self';"
        }
    })

    win.loadFile('./public/index.html')
}


module.exports = createWindow()