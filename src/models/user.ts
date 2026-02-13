/**
 * User model for both Customer and Detailer
 */
export interface User {
  id: string;
  email: string;
  phone?: string;
  fullName: string;
  profileImageUrl?: string;
  role: UserRole;
  createdAt: Date;
}

export type UserRole = 'customer' | 'detailer';
