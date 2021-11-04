## Up in local

- Install package manager yarn
- `yarn`
- `cd ios && pod install --repo-update && cd ..`
- `yarn start`
- `yarn ios` running on iOS simulator
- `yarn android` running on Android emulator

### iOS
- For Apple Silicon, might be necessary to use `arch -x86_64` before `pod install` and `yarn ios`

### Android
* `cd android && touch local.properties` 

Inside the `local.properties` file add:
- #### Windows
`sdk.dir=C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk`

_Where USERNAME is your pc user name. Also make sure the folder is sdk or Sdk_
- #### Mac
`sdk.dir=/Users/USERNAME/Library/Android/sdk`

_Where USERNAME is your OSX username._
- #### Linux
`sdk.dir=/home/USERNAME/Android/Sdk`

_Where USERNAME is your linux username (Linux paths are case-sensitive: make sure the case of S in Sdk matches)_
