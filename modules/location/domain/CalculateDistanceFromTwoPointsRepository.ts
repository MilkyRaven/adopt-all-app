import { Location } from "./Location";

export interface CalculateDistanceFromTwoPointsRepository {
  calculateDistanceFromTwoPointsInKm(from: Location, to: Location): number;
}
