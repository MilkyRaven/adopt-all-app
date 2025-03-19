import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
} from "expo-location";
import {
  Location,
  LocationRepository,
  LocationWithTimestamp,
  PlaceInfo,
} from "../domain/Location";

export class ExpoLocation implements LocationRepository {
  async reverseGeocode(location: Location): Promise<PlaceInfo | null> {
    try {
      const results = await reverseGeocodeAsync({
        latitude: location.lat,
        longitude: location.lon,
      });

      if (results && results.length > 0) {
        const result = results[0];
        return {
          name: result.name || undefined,
          street: result.street || undefined,
          city: result.city || undefined,
          region: result.region || undefined,
          country: result.country || undefined,
        };
      }
      return null;
    } catch (error) {
      console.error("Error performing the reverse geocoding:", error);
      return null;
    }
  }

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
