const {app, BrowserWindow} = require('electron')
const { resolve } = require('node:path')
const logo = resolve(__dirname, '../', 'public', 'logo.png')

function App() {
  const win = require('./createWindow.js')
  const tray = require('./tray.js')
}

app.whenReady().then(() => {
    App()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        App()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })