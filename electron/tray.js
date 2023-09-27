const { Tray } = require('electron')
const { resolve } = require('node:path')
const logo = resolve(__dirname, '../', 'public', 'logo.png')

function createTrya(){
    const tray = new Tray(logo)
    tray.setToolTip('Logo W')

    return tray
}

module.exports =  createTrya()