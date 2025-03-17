import { Animal } from "../domain/entities/Animal";
import { AnimalRepository } from "../domain/repositories/AnimalRepository";

export class FindAnimals {
  constructor(private repository: AnimalRepository) {}
  async execute(query?: string): Promise<Animal[]> {
    return this.repository.findAnimals(query);
  }
}
