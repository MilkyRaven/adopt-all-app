import { useEffect, useState } from "react";
import { LocationWithTimestamp } from "../domain/Location";
import { ExpoLocation } from "../infraestructure/ExpoLocation";
import { GetUserLocation } from "../application/GetUserLocation";

const locationService = new ExpoLocation();
const getUserLocation = new GetUserLocation(locationService);

export function useLocation() {
    const [location, setLocation] = useState<LocationWithTimestamp | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const currentLocation = await getUserLocation.execute();
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
