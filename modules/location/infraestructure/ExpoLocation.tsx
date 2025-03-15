import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { Location } from "../domain/Location";
import { LocationService } from "../domain/Location";

export class ExpoLocationService implements LocationService {
    async requestPermission(): Promise<boolean> {
        const { status } = await requestForegroundPermissionsAsync();
        return status === "granted";
    }
    async fetchCurrentLocation(): Promise<Location | null> {
        try {
            const location = await getCurrentPositionAsync({});
            return {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                timestamp: location.timestamp,
            };
        } catch (error) {
            console.error("Error fetching location:", error);
            return null;
        }
    }
}