import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { LocationRepository, LocationWithTimestamp } from "../domain/Location";

export class ExpoLocation implements LocationRepository {
  async getCurrentLocation(): Promise<LocationWithTimestamp | null> {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission denied");
        return null;
      }
      const location = await getCurrentPositionAsync({});
      return {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        timestamp: location.timestamp,
      };
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  }
}
