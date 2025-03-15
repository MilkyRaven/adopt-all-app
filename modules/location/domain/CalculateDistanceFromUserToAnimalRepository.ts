import { Location } from "./Location";

export interface CalculateDistanceFromUserToAnimalRepository {
  calculateDistanceFromTwoPointsInKm(from: Location, to: Location): number;
}
