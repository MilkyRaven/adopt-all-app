//TO-DO: puedo querer separar estas dos interfaces
export interface Location {
  lat: number;
  lon: number;
}
export interface LocationWithTimestamp extends Location {
  timestamp: number;
}
export interface LocationRepository {
  getCurrentLocation(): Promise<LocationWithTimestamp | null>;
}
