import { Animal } from "../entities/Animal";

export interface AnimalRepository {
  findAnimals(query?: string): Promise<Animal[]>;
}
