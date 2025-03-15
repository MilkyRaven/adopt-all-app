import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { Location, LocationWithTimestamp } from "../domain/Location";
import { LocationService } from "../domain/Location";

export class ExpoLocationService implements LocationService {
    async requestPermission(): Promise<boolean> {
        const { status } = await requestForegroundPermissionsAsync();
        return status === "granted";
    }
    async fetchCurrentLocation(): Promise<LocationWithTimestamp | null> {
        try {
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