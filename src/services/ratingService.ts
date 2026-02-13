import type { Rating } from '../models';

/**
 * Rating and review service
 *
 * Implements:
 * - CUST-RATE-01, CUST-RATE-02
 * - DET-SURVEY-01
 */
export interface PerformanceStats {
  totalBookings: number;
  completedBookings: number;
  averageRating: number;
  onTimePercentage: number;
  repeatCustomerRate: number;
}

export interface RatingService {
  submitRating(rating: Rating): Promise<void>;
  getRating(bookingId: string, fromUserId: string): Promise<Rating | null>;
  getAverageRating(userId: string): Promise<number>;
  getPerformanceStats(detailerId: string): Promise<PerformanceStats>;
}
