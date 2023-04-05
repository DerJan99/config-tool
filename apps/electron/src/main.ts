import SquirrelEvents from './app/events/squirrel.events';
import ElectronEvents from './app/events/electron.events';
import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import App from './app/app';
import * as path from 'path';
import * as fs from 'fs';

export default class Main {
  static initialize() {
    if (SquirrelEvents.handleEvents()) {
      // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
      app.quit();
    }
  }

  static bootstrapApp() {
    App.main(app, BrowserWindow);
  }

  static bootstrapAppEvents() {
    ElectronEvents.bootstrapElectronEvents();

    // initialize auto updater service
    if (!App.isDevelopmentMode()) {
      // UpdateEvents.initAutoUpdateService();
    }
  }
}

// handle setup events as quickly as possible
Main.initialize();

// bootstrap app
Main.bootstrapApp();
Main.bootstrapAppEvents();

// File-Request Windows
ipcMain.once('file-request', (event) => {
  // If the platform is 'win32' or 'Linux'
  if (process.platform !== 'darwin') {
    // Resolves to a Promise<Object>
    dialog
      .showOpenDialog({
        title: 'Datei auswählen',
        defaultPath: path.join(__dirname, '../assets/'),
        buttonLabel: 'Auswählen',
        // Restricting the user to only Text Files.
        filters: [
          {
            name: 'JSON',
            extensions: ['json'],
          },
        ],
        // Specifying the File Selector Property
        properties: ['openFile'],
      })
      .then((file) => {
        // Stating whether dialog operation was
        // cancelled or not.
        console.log(file.canceled);
        if (!file.canceled) {
          const filepath = file.filePaths[0].toString();
          const fileContent = fs.readFileSync(filepath, 'utf-8');
          console.log(filepath);
          event.reply('file-request', fileContent);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    // If the platform is 'darwin' (macOS)
    dialog
      .showOpenDialog({
        title: 'Datei auswählen',
        defaultPath: path.join(__dirname, '../assets/'),
        buttonLabel: 'Auswählen',
        filters: [
          {
            name: 'JSON',
            extensions: ['json'],
          },
        ],
        // Specifying the File Selector and Directory
        // Selector Property In macOS
        properties: ['openFile', 'openDirectory'],
      })
      .then((file) => {
        console.log(file.canceled);
        if (!file.canceled) {
          const filepath = file.filePaths[0].toString();
          const fileContent = fs.readFileSync(filepath, 'utf-8');
          console.log(filepath);
          event.reply('file-request', fileContent);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

ipcMain.on('file-save', (event, fileContent: string) => {
  dialog
    .showSaveDialog({
      title: 'Speichern unter',
      defaultPath: 'antrago-config.json',
      buttonLabel: 'Speichern',
      filters: [
        {
          name: 'JSON',
          extensions: ['json'],
        },
      ],
      properties: [],
    })
    .then((returnValue) => {
      event.reply('file-save', returnValue);
      if (!returnValue.canceled) {
        fs.writeFileSync(returnValue.filePath, fileContent);
      }
    });
});

// Toggle DevTools
ipcMain.on('dev-tools', (event, state: boolean) => {
  if (state) {
    BrowserWindow.getFocusedWindow().webContents.openDevTools();
  } else {
    BrowserWindow.getFocusedWindow().webContents.closeDevTools();
  }
});
