import { Animal } from "./modules/animal/domain/Animal";
import { Application } from "./modules/application/domain/Application";

export const animals: Animal[] = [
  {
    id: "1",
    name: "Lucky",
    species: "Cat",
    neutered: true,
    age: "Junior",
    image: "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    entryDate: "3 de Marzo de 2025",
    location: { lat: 42.8805, lon: -8.5457 },
  },

  {
    id: "2",
    name: "Luna",
    species: "Dog",
    neutered: true,
    age: "Junior",
    image: "https://images.unsplash.com/photo-1611250282006-4484dd3fba6b",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    entryDate: "10 de Marzo de 2025",
    location: { lat: 40.4168, lon: -3.7038 },
  },
  {
    id: "3",
    name: "Mochi",
    species: "Rat",
    neutered: false,
    age: "Senior",
    image: "https://images.unsplash.com/photo-1575485670541-824ff288aaf8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    entryDate: "1 de Marzo de 2025",
    location: { lat: 41.3888, lon: 2.159 },
  },
  {
    id: "4",
    name: "Linda",
    species: "Pig",
    neutered: true,
    age: "Mid",
    image: "https://images.unsplash.com/photo-1541689221361-ad95003448dc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    entryDate: "10 de Enero de 2025",
    location: { lat: 37.3886, lon: -5.9823 },
  },
];

export const applications: Application[] = [
  {
    id: "1",
    animalId: 2,
    fullName: "Milky Kiwi",
    email: "milkykiwidev@gmail.com",
    comments: "I have a big yard and I love animals!",
    createdAt: "1 de Marzo de 2025",
  },
];
