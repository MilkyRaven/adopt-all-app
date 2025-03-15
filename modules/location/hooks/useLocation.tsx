import { useEffect, useState } from "react";
import { Location, LocationService } from "../domain/Location";

export function useLocation(locationService: LocationService) {
    const [location, setLocation] = useState<Location | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const hasPermission = await locationService.requestPermission();
            if (!hasPermission) {
                setError("Location permission denied ❌");
                setLoading(false);
                return;
            }
            const currentLocation = await locationService.fetchCurrentLocation();
            if (currentLocation) {
                setLocation(currentLocation);
            } else {
                setError("Failed to get location");
            }
            setLoading(false);
        })();
    }, []);

    return { location, error, loading };
}
