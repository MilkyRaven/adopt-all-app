import { getDistance } from "geolib";
import { CalculateDistanceFromTwoPointsRepository } from "../domain/CalculateDistanceFromTwoPointsRepository";
import { Location } from "../domain/Location";

export class CalculateDistanceGeolib
  implements CalculateDistanceFromTwoPointsRepository
{
  calculateDistanceFromTwoPointsInKm(from: Location, to: Location): number {
    const distanceInMeters = getDistance(
      { latitude: from.lat, longitude: from.lon },
      { latitude: to.lat, longitude: to.lon }
    );
    const distanceInKm = distanceInMeters / 1000;
    return parseFloat(distanceInKm.toFixed(1));
  }
}
