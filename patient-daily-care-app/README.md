# Patient Daily Care - Framework7 Cordova App

This is a hybrid Android application built with Framework7 and Cordova. The app serves three user categories: prospective customers, nurses, and admins.

## Features

- Prospective customers can book services and input address location using GPS.
- Admins can view booking lists and manage nurse duty schedules.
- Nurses have a dashboard placeholder.
- Modern UI using Framework7 components and Google Fonts.
- Ready for Cordova Android build.

## Project Structure

- src/: Application source code
- www/: Compiled web assets for Cordova
- config.xml: Cordova configuration

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Add Android platform:
   ```
   npx cordova platform add android
   ```

3. Run the app on an emulator or device:
   ```
   npx cordova run android
   ```

## Notes

This project is scaffolded with Framework7 CLI and customized for patient daily care use case.
