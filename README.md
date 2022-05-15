# React Native App


## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)


## Dependencies installation


- Run npm install to install the node dependencies.
- cd ios and Run pod install to install for ios.

## Env configuration

- hooks folder in the src dir, in AppFunction.ts, change 'localhost' of base_url to your system ip_address. This is important because android will not connect to the server if its running on 'localhost'
- Run yarn start backend to start the backend server.
- The server will be running at port 8080.


## Usage

- Run yarn android or npx react-native run-android to start the app on android.
- Run yarn ios or npx react-native run-ios to start the app on ios.
