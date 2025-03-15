//TO-DO: puedo querer separar estas dos interfaces
export interface Location {
    latitude: number;
    longitude: number;
    timestamp: number;

}

export interface LocationService {
    requestPermission(): Promise<boolean>;
    fetchCurrentLocation(): Promise<Location | null>;
}