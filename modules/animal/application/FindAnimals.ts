import { Animal } from "../domain/entities/Animal";
import { AnimalRepository } from "../domain/repositories/AnimalRepository";

export class FindAnimals {
  constructor(private repository: AnimalRepository) {}
  async execute(): Promise<Animal[]> {
    return this.repository.findAnimals();
  }
}
