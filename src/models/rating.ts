/**
 * Rating and review model
 */
export interface Rating {
  id: string;
  bookingId: string;
  fromUserId: string;
  toUserId: string;
  /** Rating from 1-5 stars */
  stars: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  surveyResponses: Record<string, boolean>;
  createdAt: Date;
}
