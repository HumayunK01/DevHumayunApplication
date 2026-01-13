# DevHumayun Mobile App 📱

A cross-platform mobile application built with React Native and Expo that provides a native mobile experience for [devhumayun.me](https://devhumayun.me). The app wraps the website in a WebView, offering users a seamless, app-like experience on both Android and iOS devices.

## 🌟 Features

- **Native Mobile Experience**: Full-screen WebView implementation for an immersive app experience
- **Cross-Platform**: Runs on both Android and iOS devices
- **Modern Architecture**: Built with Expo SDK 54 and React Native 0.81
- **Optimized Performance**: Edge-to-edge display with adaptive icons
- **Type-Safe**: Written in TypeScript with typed routes
- **React Compiler**: Experimental React Compiler enabled for better performance
- **New Architecture**: Expo's new architecture enabled for improved performance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- **Expo CLI** (will be installed with dependencies)
- **Android Studio** (for Android development/testing)
- **Xcode** (for iOS development/testing - macOS only)
- **Expo Go** app on your mobile device (for quick testing)

## 🚀 Getting Started

### Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd d:\myfirstapp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the App

#### Development Mode

Start the Expo development server:

```bash
npm start
# or
npx expo start
```

This will open the Expo Developer Tools in your browser. From here, you can:

- **Scan the QR code** with the Expo Go app (Android) or Camera app (iOS) to run on your physical device
- Press `a` to open in Android emulator
- Press `i` to open in iOS simulator (macOS only)
- Press `w` to open in web browser

#### Platform-Specific Commands

**Android:**
```bash
npm run android
# or
npx expo run:android
```

**iOS (macOS only):**
```bash
npm run ios
# or
npx expo run:ios
```

**Web:**
```bash
npm run web
# or
npx expo start --web
```

## 📦 Building for Production

This project is configured to build APK files for Android using Expo Application Services (EAS).

### Prerequisites for Building

1. **Install EAS CLI** (if not already installed):
   ```bash
   npm install -g eas-cli
   ```

2. **Login to your Expo account**:
   ```bash
   eas login
   ```

### Build Profiles

The project includes three build profiles configured in `eas.json`:

#### 1. Development Build
```bash
eas build --profile development --platform android
```
- Creates a development client with debugging capabilities
- Internal distribution only

#### 2. Preview Build
```bash
eas build --profile preview --platform android
```
- Generates an APK file for testing
- Internal distribution
- Ideal for sharing with testers

#### 3. Production Build
```bash
eas build --profile production --platform android
```
- Creates a production-ready APK
- Optimized for release
- Can be distributed via Google Play Store or direct download

### Building for iOS

```bash
eas build --profile production --platform ios
```

**Note:** iOS builds require an Apple Developer account.

### Building for Both Platforms

```bash
eas build --profile production --platform all
```

## 🏗️ Project Structure

```
myfirstapp/
├── app/                      # Main application screens (file-based routing)
│   ├── _layout.tsx          # Root layout component
│   ├── index.tsx            # Home screen with WebView
│   └── modal.tsx            # Modal screen
├── assets/                   # Static assets (images, fonts, etc.)
│   └── images/
│       ├── icon.png         # App icon
│       └── favicon.png      # Splash screen image
├── components/              # Reusable React components
├── constants/               # App constants and configuration
├── hooks/                   # Custom React hooks
├── scripts/                 # Utility scripts
├── android/                 # Android native code (generated)
├── .expo/                   # Expo configuration (generated)
├── app.json                 # Expo app configuration
├── eas.json                 # EAS Build configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## 🛠️ Technology Stack

### Core Technologies
- **React Native** `0.81.5` - Mobile app framework
- **Expo** `~54.0.31` - Development platform
- **React** `19.1.0` - UI library
- **TypeScript** `~5.9.2` - Type safety

### Key Dependencies
- **expo-router** `~6.0.21` - File-based routing
- **react-native-webview** `13.15.0` - WebView component
- **react-native-gesture-handler** `~2.28.0` - Gesture handling
- **react-native-safe-area-context** `~5.6.0` - Safe area handling
- **expo-splash-screen** `~31.0.13` - Splash screen management
- **expo-status-bar** `~3.0.9` - Status bar control

### Development Tools
- **ESLint** `^9.25.0` - Code linting
- **expo-build-properties** - Build configuration
- **Kotlin** `2.0.21` - Android build

## ⚙️ Configuration

### App Configuration (`app.json`)

Key configurations:
- **App Name**: DevHumayun
- **Package Name**: `com.humayunk01.devhumayun`
- **Version**: 1.0.0
- **Orientation**: Portrait
- **New Architecture**: Enabled
- **Edge-to-Edge**: Enabled (Android)

### Build Configuration (`eas.json`)

Three build profiles are configured:
1. **Development**: For development builds with debugging
2. **Preview**: For internal testing (APK)
3. **Production**: For release builds (APK)

## 🎨 Customization

### Changing the Website URL

To point the app to a different website, edit `app/index.tsx`:

```typescript
<WebView
    source={{ uri: 'https://your-website.com' }}
    style={styles.webview}
    startInLoadingState={true}
/>
```

### Updating App Icon and Splash Screen

1. Replace `assets/images/icon.png` with your app icon (1024x1024 recommended)
2. Replace `assets/images/favicon.png` with your splash screen image
3. Update the configuration in `app.json` if needed

### Changing App Name and Package

Edit `app.json`:
```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "android": {
      "package": "com.yourcompany.yourapp"
    }
  }
}
```

## 🧪 Development Scripts

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web

# Lint code
npm run lint

# Reset project to blank template
npm run reset-project
```

## 🐛 Troubleshooting

### Common Issues

**1. Metro bundler issues:**
```bash
# Clear cache and restart
npx expo start -c
```

**2. Android build fails:**
```bash
# Clean Android build
cd android
./gradlew clean
cd ..
npx expo run:android
```

**3. Dependencies issues:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install
```

**4. EAS Build timeout:**
- Check your internet connection
- Try building again (sometimes server issues are temporary)
- Check EAS Build status page

### WebView Not Loading

If the WebView shows a blank screen:
1. Check your internet connection
2. Verify the URL is correct and accessible
3. Check if the website blocks WebView access
4. Enable JavaScript in WebView (already enabled by default)

## 📱 Testing on Physical Devices

### Using Expo Go (Quick Testing)

1. Install **Expo Go** from:
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
   - [Apple App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)

2. Run `npm start` in your project

3. Scan the QR code:
   - **Android**: Use the Expo Go app
   - **iOS**: Use the Camera app

### Using Development Build

For full native functionality:
```bash
eas build --profile development --platform android
```

Install the generated APK/IPA on your device.

## 🚢 Deployment

### Android (Google Play Store)

1. Build production APK:
   ```bash
   eas build --profile production --platform android
   ```

2. Download the APK from EAS dashboard

3. Upload to Google Play Console

### iOS (Apple App Store)

1. Build production IPA:
   ```bash
   eas build --profile production --platform ios
   ```

2. Download the IPA from EAS dashboard

3. Upload to App Store Connect using Transporter

### Direct Distribution (Android)

You can distribute the APK directly to users:
1. Build with preview or production profile
2. Download the APK from EAS dashboard
3. Share the APK file with users
4. Users need to enable "Install from Unknown Sources"

## 📚 Learn More

### Expo Documentation
- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)

### React Native Resources
- [React Native Documentation](https://reactnative.dev/)
- [React Native WebView](https://github.com/react-native-webview/react-native-webview)

### Community
- [Expo Discord](https://chat.expo.dev)
- [Expo Forums](https://forums.expo.dev/)
- [Expo GitHub](https://github.com/expo/expo)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Humayun Khan**
- Website: [devhumayun.me](https://devhumayun.me)
- Package: `com.humayunk01.devhumayun`

## 🔄 Version History

- **1.0.0** (Current)
  - Initial release
  - WebView integration with devhumayun.me
  - Android and iOS support
  - EAS Build configuration

## 💡 Tips

- **Performance**: The app uses React Compiler for optimized performance
- **Updates**: Use EAS Update for over-the-air updates without app store submission
- **Analytics**: Consider adding Expo Analytics or Firebase Analytics
- **Offline Support**: Consider implementing offline fallback screens
- **Push Notifications**: Can be added using `expo-notifications`

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Search [Expo Forums](https://forums.expo.dev/)
3. Ask in [Expo Discord](https://chat.expo.dev)
4. Open an issue in the repository

---

**Built with ❤️ using Expo and React Native**
