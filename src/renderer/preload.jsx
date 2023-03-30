import { contextBridge, ipcRenderer } from 'electron';
import { maximizePath, unmaximizePath } from '@common/globalVariables';

contextBridge.exposeInMainWorld('electronWindow', {
    ipcContextTitlebar: {
        minimize() {
            ipcRenderer.invoke('window-minimize');
        },
        toggleMaximize() {
            ipcRenderer.invoke('window-toggle-maximize');
        },
        close() {
            ipcRenderer.invoke('window-close');
        }
    }
});

ipcRenderer.on('window-maximized', (e) => {
    const path = document.getElementById("window-btn-maximize");
    path.setAttribute("d", unmaximizePath);
});

ipcRenderer.on('window-unmaximized', (e) => {
    const path = document.getElementById("window-btn-maximize");
    path.setAttribute("d", maximizePath);
});

ipcRenderer.invoke('window-unmaximize');