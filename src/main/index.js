const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 800,
    height: 900,
    titleBarStyle: "hiddenInset",
  });
  win.loadFile(path.join(__dirname, "../renderer/index.html"));
  win.webContents.openDevTools();
});
