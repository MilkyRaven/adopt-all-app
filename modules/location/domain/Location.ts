//TO-DO: puedo querer separar estas dos interfaces
export interface Location {
  lat: number;
  lon: number;
}

export interface LocationWithTimestamp extends Location {
  timestamp: number;
}

export interface PlaceInfo {
  name?: string;
  street?: string;
  city?: string;
  region?: string;
  country?: string;
}

export interface LocationWithPlace extends LocationWithTimestamp {
  place?: PlaceInfo;
}
export interface LocationRepository {
  getCurrentLocation(): Promise<LocationWithTimestamp | null>;
  reverseGeocode(location: Location): Promise<PlaceInfo | null>;
}
