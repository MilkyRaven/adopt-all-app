import { LocationRepository, LocationWithTimestamp } from "../domain/Location";

export class GetUserLocation {
  constructor(private repository: LocationRepository) {}
  execute(): Promise<LocationWithTimestamp | null> {
    return this.repository.getCurrentLocation();
  }
}
