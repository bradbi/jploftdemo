/**
 * Push notification service
 *
 * Implements:
 * - CUST-TRACK-01, CUST-TRACK-04
 * - CUST-SVC-02
 */
export interface NotificationPayload {
  title?: string;
  body?: string;
  data?: Record<string, unknown>;
}

export interface NotificationService {
  initialize(): Promise<void>;
  getToken(): Promise<string | null>;
  onMessage(callback: (payload: NotificationPayload) => void): () => void;
  subscribeToBooking(bookingId: string): Promise<void>;
  unsubscribeFromBooking(bookingId: string): Promise<void>;
}
