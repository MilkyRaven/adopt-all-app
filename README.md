# Adopt All App 🐶🐱🐷

Welcome to my project! I'm **Milky** and this is the first version of "Adopt All". The app is designed to **help connect people with animals in need of adoption**. It allows users to browse available animals, filter by various criteria, see animals near their location, and submit adoption applications. It also goes **beyond the idea of a "traditional pet"**, including animals like rats, pigs, and other species, because I believe every animal deserves a loving home. 💖

This was built in 5 days as part of a 7-day challenge. The first two days were focused on planning, refining ideas, and designing a basic wireframe in Figma to serve as a guideline [that you can find here](https://www.figma.com/design/L0bklqHG35m9LVmAQIqix9/Adopt-All). During this time, I also began setting up a custom backend with a REST API, which [you can explore here](https://github.com/MilkyRaven/adopt-all-backend).

<!-- This is a basic README to explain what the app does and how to configure and execute it. For more technical insights, you can check out the [blog post]() I wrote about this project. There you can find my thought process, struggles, solutions and what I would improve in the future. -->

Okay, now let's go with an overview of the app's features!

## Features

- **Animal Browsing**: View a list of animals available for adoption. When you click on an animal, you can see more details including a description and a button to submit an adoption application.
- **Location-Based Search**: Find animals near your current location with distance calculation. The app calculates your coordinates and displays the distance to each animal in the list.
- **Filtering**: Filter animals by various criteria to find a perfect buddy.
- **Adoption Applications**: Submit and manage your adoption applications
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing

## Project Structure

The project follows a clean architecture approach, inspired by Hexagonal Architecture and DDD. The structure is modular, but respecting the Expo Router convention.

```
adopt-all-app/
├── app/                  # Expo Router app directory
│   ├── (tabs)/           # Main app tabs
│   │   ├── explore/      # Animal browsing
│   │   ├── applications/ # Application management
│   │   └── settings/     # App settings
├── assets/               # Images, fonts, and other static assets
├── modules/              # Feature modules
│   ├── animal/           # Animal-related functionality
│   ├── application/      # Application-related functionality
│   ├── location/         # Location services
│   ├── settings/         # Settings functionality
│   ├── shared/           # Shared components and utilities
│   └── user/             # User-related functionality
└── __tests__/            # Test files
```

Each module follows a clean architecture pattern with:
- **domain**: Entities and repository interfaces
- **application**: Use cases
- **infrastructure**: Implementation details (API client)
- **presentation**: UI components

## Technologies Used

- **React Native**
- **Expo**
- **TypeScript**
- **Expo Router**: File-based routing for Expo apps
- **Axios**
- **Geolib**: Geospatial calculations
- **Expo Location**: Location services
- **Jest**

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/MilkyRaven/adopt-all-app
   cd adopt-all-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run on a device or emulator
   - Press `a` to run on Android emulator
   - Press `i` to run on iOS simulator
   - Scan the QR code with the Expo Go app on your physical device

---
Thanks for checking out the Adopt All app! 🐷 

<!-- As I mentioned earlier, for more technical insights, you can check out the [blog post](https://blog.milkykiwi.dev/building-an-adopt-all-app-with-react-native) I wrote about this project. There you can find my thought process, struggles, solutions and what I would improve in the future. If you have any questions or feedback, you can send me an email at milkykiwidev@gmail.com. -->
