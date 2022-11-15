# Team 1327: ChildSafe Application
Fall 2021 & Spring 2022 SLS Team 1327

Team members: Cody Kantor, Akash Vemulapalli, Aayush Dixit, Erin Falejczyk, Will Wynne

This is a cross platform mobile application created with React Native and Expo. The goal of this app is to help new parents learn critical child safety measures and best practices. 

To install the application, there are two approaches. One is to download the code from the GitHub and install Expo (among other things) in order to test the code on a computer using an emulator. This approach makes sense for any developer or anyone planning to make changes to the application. The other approach is meant for users of the application who can simply download the application from their app store to view the application on their phones.

# Build Guide
## PRE-REQUISITES  
   First, you need to make sure that Node.js is installed on your machine. You can install Node.js from [here](https://nodejs.org/en/download/).
   Next, you need to make sure that Git is installed on your machine. You can install Git from [here](https://git-scm.com/downloads).
   Next, if you have Windows, download Android Studio from [here](https://docs.expo.io/workflow/android-studio-emulator/). And configure an Android Emulator. 
     If you are on Mac, download Visual Studio Code from [here](https://code.visualstudio.com/download) and configure an iPhone Emulator via xCode. Alternatively you could download Xcode instead of downloading Visual Studio Code from [here](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
     You also must have enough storage on your device to download all these applications and the necessary files to run the application.
## DOWNLOAD   
  The application download can be accessed directly from this GitHub repository. Users can gain access to the application by downloading the app from https://github.com/ckantor8/JD-Team-1327
  This can be done by running 'git clone https://github.com/ckantor8/JD-Team-1327.git' in the terminal. This will create a folder with all of the necessary files for our application.
## DEPENDENCIES  
  Navigate to the app directory. `cd ./JD-Team-1327`  
  Now install dependencies. `sudo npm install`  
## BUILD  
  Follow this tutorial on how to set up Expo in an emulator on Android Studio [here](https://docs.expo.io/workflow/android-studio-emulator/)
  You can find tutorials on just about anything else you should need on these Expo Docs as well.
  
  XCode may be required on iOS applications to get the iPhone emulator running properly. Follow this tutorial to get things running using an iOS emulator [here](https://docs.expo.dev/workflow/ios-simulator/)
  After running this, it should be possible to build the application and run it locally.
## RUNNING APPLICATION  
- To start a general server and get QR code use `npx expo start`
- To run a web application use `npx expo start -w`
- To run an iOS application use `npx expo start --ios`
- To run an Android application use `npx expo start -a`
   - Note that this will automatically launch on any running Android emulator in Android Studio
- After getting things running using expo, scanning the resulting QR code makes it possible to run the application on an actual phone instead of an emulator.

## Troubleshooting
Here are some common issues related to the building of the application. 

Make sure you have the latest expo version to ensure all the dependencies are working properly. 

Some prompts will require you to type in your computer password so ensure you are not making any typos.

If you have a system like iCloud backup, ensure all files are downloaded otherwise there will be issues with files not being visible.

Ensure you have the Expo Go app downloaded on your phone or emulator or else nothing may happen after scanning the QR code.

If everything is done properly, scanning the resulting QR code after running the application should let you run it on your phone.

# Install Guide

If you have no interest in tinkering with the application and simply want to use it, our application is available on both Android and iOS!
- On the Google Play Store, simply search "ChildSafe" or follow this link [https://play.google.com/store/apps/details?id=c.s]
- On the Apple App Store, you must search "ChildSafe.io"




# Release Notes

## Release 1.1

## Primary Features

Our application serves to educate parents about child safety measures. We have an information wiki section that contains articles informing parents about keeping their child safe from various risks. There is also a multimedia section which contains educational images and videos giving which also serves to educate parents. To test knowledge retention, there is a review quiz section which contains 5 questions for each section. Our final primary feature is an educational game which depicts a child learning about proper safety procedures while moving through a house. In the 1.1 update, we have added login authentication, bookmarking and search features, local quiz leaderboards, global game leaderboards, and general improvements.

## Bug Fixes

Here are some bugs that have been fixed prior to this release.

There is a bug where the game assets don't properly load. There is a bug where the game audio continues playing even after exiting the game. There is a bug where the game screen does not properly rotate which leads to parts of the screen being inaccessible. There were a few bugs related to buttons going to wrong screens or buttons being unacessible for certain phone sizes. We have also fixed (theoretically) all bugs regarding the leaderboards, the game portion, text-to-speech, and navigation.


## Known Bugs

There are currently no known bugs.


