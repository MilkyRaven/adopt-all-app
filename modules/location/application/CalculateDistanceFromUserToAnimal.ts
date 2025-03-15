import { CalculateDistanceFromUserToAnimalRepository } from "../domain/CalculateDistanceFromUserToAnimalRepository";
import { Location } from "../domain/Location";

export class CalculateDistanceFromUserToAnimal {
  constructor(
    private repository: CalculateDistanceFromUserToAnimalRepository
  ) {}
  execute(from: Location, to: Location): number {
    return this.repository.calculateDistanceFromTwoPointsInKm(from, to);
  }
}
