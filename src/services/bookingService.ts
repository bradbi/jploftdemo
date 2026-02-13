import type { Booking, ServicePackage, AddOn } from '../models';

/**
 * Booking service
 *
 * Implements:
 * - CUST-BOOK-01 through CUST-BOOK-06
 * - CUST-PAY-01 through CUST-PAY-05
 * - DET-JOB-01 through DET-JOB-04
 */
export interface BookingService {
  getPackages(): Promise<ServicePackage[]>;
  getAddOns(): Promise<AddOn[]>;
  calculatePrice(params: {
    vehicleId: string;
    packageId: string;
    addOnIds: string[];
    latitude: number;
    longitude: number;
  }): Promise<number>;
  createBooking(booking: Booking): Promise<Booking>;
  acceptBooking(bookingId: string): Promise<void>;
  declineBooking(bookingId: string): Promise<void>;
  confirmArrival(bookingId: string, lat: number, lng: number): Promise<void>;
  uploadBeforePhotos(bookingId: string, photoPaths: string[]): Promise<void>;
  uploadAfterPhotos(bookingId: string, photoPaths: string[]): Promise<void>;
  completeBooking(bookingId: string): Promise<void>;
  watchBooking(bookingId: string, callback: (booking: Booking) => void): () => void;
  watchUserBookings(userId: string, callback: (bookings: Booking[]) => void): () => void;
}
