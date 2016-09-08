const { app, BrowserWindow, ipcMain } = require('electron');
const smackdown = require('./js/counter');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 800,
    });
    mainWindow.loadURL(`file://${__dirname}/troll.html`);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

ipcMain.on('start', (event, arg) => {
    event.sender.send('refresh');
    smackdown(count => {
        event.sender.send('count', count);
    });
})