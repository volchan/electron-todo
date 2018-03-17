const electron = require("electron");

const { app, BrowserWindow, Menu } = electron;

let mainWindow, addWindow;

const osx = process.platform === "darwin";

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "New Todo",
        accelerator: osx ? "cmd+n" : "ctrl+n",
        click() {
          createAddWindow();
        }
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
  mainWindow.on("closed", () => app.quit());

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const createAddWindow = () => {
  addWindow = new BrowserWindow({
    width: "300",
    height: "200",
    title: "Add new Todo"
  });
  addWindow.loadURL(`file://${__dirname}/add.html`);
};
