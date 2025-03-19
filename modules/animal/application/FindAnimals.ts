import { Animal } from "../domain/entities/Animal";
import { AnimalRepository } from "../domain/repositories/AnimalRepository";

export class FindAnimals {
  constructor(private repository: AnimalRepository) {}

  async execute(query?: string): Promise<Animal[]> {
    try {
      return await this.repository.findAnimals(query);
    } catch (error) {
      throw error;
    }
  }
}
