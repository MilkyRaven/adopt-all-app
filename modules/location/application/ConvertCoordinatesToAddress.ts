import { Location, LocationRepository } from "../domain/Location";

export class ConvertCoordinatesToAddress {
  constructor(private repository: LocationRepository) {}
  execute(location: Location) {
    return this.repository.reverseGeocode(location);
  }
}
