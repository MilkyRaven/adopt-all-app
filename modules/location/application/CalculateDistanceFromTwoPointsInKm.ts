import { CalculateDistanceFromTwoPointsRepository } from "../domain/CalculateDistanceFromTwoPointsRepository";
import { Location } from "../domain/Location";

export class CalculateDistanceFromTwoPointsInKm {
  constructor(private repository: CalculateDistanceFromTwoPointsRepository) {}
  execute(from: Location, to: Location): number {
    return this.repository.calculateDistanceFromTwoPointsInKm(from, to);
  }
}
