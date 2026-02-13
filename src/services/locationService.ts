/**
 * Location service for geo-fencing and ETA
 *
 * Implements:
 * - CUST-TRACK-03 (ETA)
 * - DET-NAV-03 (geo-fence validation)
 */
export interface LocationCoords {
  latitude: number;
  longitude: number;
}

export interface LocationService {
  getCurrentLocation(): Promise<LocationCoords>;
  isWithinGeofence(params: {
    targetLat: number;
    targetLng: number;
    radiusYards: number;
  }): Promise<boolean>;
  getEta(params: {
    fromLat: number;
    fromLng: number;
    toLat: number;
    toLng: number;
  }): Promise<number>; // Returns milliseconds
  watchLocation(callback: (coords: LocationCoords) => void): () => void;
}
