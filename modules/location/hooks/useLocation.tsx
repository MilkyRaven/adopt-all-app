import { useEffect, useState } from "react";
import { LocationWithPlace, LocationWithTimestamp } from "../domain/Location";
import { ExpoLocation } from "../infraestructure/ExpoLocation";
import { GetUserLocation } from "../application/getUserLocation";
import { ConvertCoordinatesToAddress } from "../application/ConvertCoordinatesToAddress";

const locationService = new ExpoLocation();
const getUserLocation = new GetUserLocation(locationService);
const convertCoordinatesToAddress = new ConvertCoordinatesToAddress(locationService);

export function useLocation() {
    const [location, setLocation] = useState<LocationWithPlace | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const currentLocation = await getUserLocation.execute();
            if (currentLocation) {
                const placeInfo = await convertCoordinatesToAddress.execute(currentLocation);
                setLocation({
                    ...currentLocation,
                    place: placeInfo || undefined
                });
            } else {
                setError("Failed to get location");
            }
            setLoading(false);
        })();
    }, []);

    return { location, error, loading };
}
