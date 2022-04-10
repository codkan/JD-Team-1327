# Team 1327: ChildSafe Application
Fall 2021 & Spring 2022 SLS Team 1327

Team members: Cody Kantor, Akash Vemulapalli, Aayush Dixit, Erin Falejczyk, Will Wynne

This is a cross platform mobile application created with React Native and Expo. The goal of this app is to help new parents learn critical child safety measures and best practices. 

# Install Guide
## PRE-REQUISITES  
     First, you need to make sure that Node.js is installed on your machine. You can install Node.js from [here](https://nodejs.org/en/download/).
     Next, you need to make sure that Git is installed on your machine. You can install Git from [here](https://git-scm.com/downloads).
     Next, if you have Windows, download Android Studio from [here](https://docs.expo.io/workflow/android-studio-emulator/). And configure an Android Emulator. 
     If you are on Mac, download Visual Studio Code from [here](https://code.visualstudio.com/download) and configure an iPhone Emulator via xCode.  
## DOWNLOAD                  
  https://github.com/ckantor8/JD-Team-1327.git  
  This can be done by running 'git clone https://github.com/ckantor8/JD-Team-1327.git' in the terminal
## DEPENDENCIES  
  Navigate to the app directory. `cd ./JD-Team-1327`  
  Now install dependencies. `sudo npm install`  
## BUILD  
  Follow this tutorial on how to set up Expo [here](https://docs.expo.io/workflow/android-studio-emulator/)
  
  XCode may be required on iOS applications to get the iPhone emulator running properly. Follow this tutorial to get things running using an iOS emulator [here](https://docs.expo.dev/workflow/ios-simulator/)
## RUNNING APPLICATION  
- To start a general server and get QR code use `npm start`
- To run a web application use `npm run web` or `expo start --web`
- To run an iOS application use `npm run ios` or `expo start --ios`
- To run an Android application use `npm run android` or `expo start --android`
- After getting things running using expo, scanning the QR code while in the Expo app makes it possible to run the application on an actual phone instead of an emulator.
