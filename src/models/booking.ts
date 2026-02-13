import type { ServicePackage, AddOn } from './servicePackage';

/**
 * Booking model for service requests
 */
export interface Booking {
  id: string;
  customerId: string;
  detailerId?: string;
  vehicleId: string;
  package: ServicePackage;
  addOns: AddOn[];
  scheduledAt: Date;
  address: string;
  latitude: number;
  longitude: number;
  status: BookingStatus;
  totalPrice: number;
  tipAmount?: number;
  specialInstructions?: string;
  beforePhotoUrls: string[];
  afterPhotoUrls: string[];
  createdAt: Date;
}

export type BookingStatus =
  | 'pending'
  | 'accepted'
  | 'enRoute'
  | 'arrived'
  | 'inProgress'
  | 'completed'
  | 'cancelled';
