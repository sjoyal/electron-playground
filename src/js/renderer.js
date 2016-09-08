const { ipcRenderer } = require('electron');
const el = ['image', 'start', 'timer'].reduce((p, c) => {
    c in p ? p : p[c] = document.getElementById(c);
    return p;
}, {});

el.start.addEventListener('click', () => {
    ipcRenderer.send('start');
});

ipcRenderer.on('count', (event, count) => {
    if (count !== 0) {
        el.timer.innerHTML = count;
        el.image.setAttribute('src', '');
        el.start.innerHTML = 'Running';
    } else {
        el.image.setAttribute('src', 'img/jru.jpg');
        el.timer.innerHTML = 'No Friends';
        el.start.innerHTML = 'Run Again';
    }
});