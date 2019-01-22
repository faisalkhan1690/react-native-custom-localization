# Zoylo Mobile App

Zoylo is a revolutionary online health care app that connects users to the entire spectrum of medical services under one roof. Users can order medicines online, book doctor appointments, blood tests, consult doctors online and more at most affordable prices and in a hassle-free manner. 

## Key Features
- Order Medicines and Health Products  online
- Online Lab Test Booking
- Find Doctors Nearby & Book an Appointment 
- Consult a doctor online

## Before you start
You need to setup following environment in your system to run react-native project. 
- Install Java 8 and set its path globally in your system [Link](https://www.java.com/en/download/help/download_options.xml) 
- Download and install Android studio and set its SDK path globally in your system [Link](https://developer.android.com/studio/)
- Download and install node v8.X.X [Link](https://nodejs.org/en/download/)
- Install node v8.X.X [Link](https://developer.android.com/studio/)
- Install Watchman (Mac Only) 
- Download and install Watchman (Mac Only) using `brew install watchman`
- Install react-native-cli using `npm install -g react-native-cli`
- Download and install vsCode editor [Link](https://code.visualstudio.com/download)

## Getting started
- Clone code from bit bucket [Link](https://bitbucket.org/zoyloteam/kell_mobile_app/src/master/)
- Go in to folder `kellton_projects` by `cd kellton_projects` and install npm by 'npm install'
- Go into `/node_modules/react-native-fcm/android', open 'build.gradle' file and do the following changes in file and save it.
  1. Change `com.google.firebase:firebase-core` version from `x.x.x` to `11.8.0` example `com.google.firebase:firebase-core:11.8.0`
  2. Change `com.google.firebase:firebase-messaging` version from `x.x.x` to `11.8.0` example `com.google.firebase:firebase-messaging:11.8.0`
  
- Go into `/node_modules/react-native-device-info', open 'build.gradle' file and do the following changes in file and save it.
  1. Change `com.google.android.gms:play-services-gcm` version from `x.x.x` to `11.8.0` example `com.google.android.gms:play-services-gcm:11.8.0`
- Now run Android application using `react-native run-android` and iOS using 'react-native run-iOS`
- In case `Metro Bundler` does not start automatically so use `npm start` to start npm in your system


 

