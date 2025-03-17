import { Animal } from "../entities/Animal";

export interface AnimalRepository {
  findAnimals(): Promise<Animal[]>;
}
