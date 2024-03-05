# Run on Electron

## Setup
```
npm i @capacitor-community/electron
ionic build

npx cap add @capacitor-community/electron
ionic build @capacitor-community/electron && npx cap copy @capacitor-community/electron
```

## Config
- Add to `electron/package.json`:
```
 "pack": "electron-builder -wl --dir",
 "dist": "electron-builder --config ./electron-builder.config.json -wl"
```

- Add to  `electron/electron-builder.config.json` (or override others similar):
```
  "win": {
    "target": "portable",
    "icon":"./assets/appIcon.ico"

  },
  "linux": {
    "target": "AppImage",
    "icon":"./assets/512x512.png"

  }
```
- remove any trace of  `appUpdater` from electron/src/index.ts and electron/build/src/index.js (it breaks with this version of electron...)

- set your custom 'Content-Security-Policy' in both electron/src/setup.ts and electron/build/src/setup.js , or set them temporaly to '*' (otherwise you'll get a blank screen after building for desktop distributions)


## Serve
- outside electron folder
```
    npx cap open @capacitor-community/electron
```

- inside electron folder:
```
    npm run electron:start-live
```
## Build .exe and .appImage
- inside electron folder:
```
    npm run dist
```
The filkes will be located inside folder electron/dist

# Known Bugs

## Modal controller does not trigger ngOnDestroy when dismissing
[link](https://github.com/ionic-team/ionic-framework/issues/24460)

Should be fixed in Ionic-Angular v6.2.3