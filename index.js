const electron = require("electron");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

const osx = process.platform === "darwin";

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "New Todo",
        accelerator: osx ? "cmd+n" : "ctrl+n"
      },
      {
        label: "Quit",
        accelerator: osx ? "cmd+q" : "ctrl+q",
        click() {
          app.quit();
        }
      }
    ]
  }
];

if (osx) {
  menuTemplate.unshift({});
}

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});
