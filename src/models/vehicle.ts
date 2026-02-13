/**
 * Vehicle model for customer bookings
 */
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  size: VehicleSize;
  licensePlate?: string;
}

export type VehicleSize = 'compact' | 'sedan' | 'suv' | 'truck' | 'van';
