/**
 * React Navigation type definitions for Renue app
 *
 * This file defines all screen names and their parameters.
 * Both Customer and Detailer navigators share common screens.
 */

// ============================================================================
// Shared Screens (used by both Customer and Detailer)
// ============================================================================

export type SharedStackParamList = {
  // Auth & Onboarding
  ChooseRole: undefined;
  Onboarding: undefined;
  CreateAccountEmail: undefined;
  CreateAccountPhone: undefined;
  LoginEmail: undefined;
  LoginPhone: undefined;
  LoginVerify: { phone?: string; email?: string };
  ForgotPassword: undefined;
  VerifyForgotPassword: { email: string };
  ResetPassword: { token: string };
  CreateProfilePhone: undefined;
  CreateProfileEmail: undefined;

  // Profile & Settings
  Profile: undefined;
  Menu: undefined;
  Notifications: undefined;
  BankAccountSettings: undefined;

  // Vehicle Management
  AddVehicle: undefined;

  // Identity Verification
  GetIdVerified: undefined;
  DocumentAndSelfieVerification: undefined;
  UploadPhotoOfId: undefined;
  AllowCamera: undefined;
  AccessTheCamera: undefined;

  // Chat
  ChatBooking: { bookingId: string };
  ChatNoChatAvailable: undefined;
  ChatUser: { userId: string; userName: string };

  // Home
  Home: undefined;
};

// ============================================================================
// Customer-Specific Screens
// ============================================================================

export type CustomerStackParamList = SharedStackParamList & {
  // Booking Flow
  BookAServiceSelectVehicle: undefined;
  BookAServiceSelectPackage: { vehicleId: string };
  BookAServiceLocation: { vehicleId: string; packageId: string };
  BookAServiceOverview: {
    vehicleId: string;
    packageId: string;
    addOnIds?: string[];
    address: string;
    latitude: number;
    longitude: number;
  };
  BookAServicePayment: {
    vehicleId: string;
    packageId: string;
    addOnIds?: string[];
    address: string;
    latitude: number;
    longitude: number;
    totalPrice: number;
  };
  AddNewPaymentMethod: undefined;

  // Bookings
  MyBookings: undefined;
  PaymentReceipt: { bookingId: string };
  BookingDetailsRateCustomer: { bookingId: string };
  RateCustomer: { bookingId: string; detailerId: string };
};

// ============================================================================
// Detailer-Specific Screens
// ============================================================================

export type DetailerStackParamList = SharedStackParamList & {
  // Detailer Auth & Onboarding
  SplashDetailer: undefined;
  ChooseRoleDetailer: undefined;
  OnboardingDetailer: undefined;
  LoginEmailDetailer: undefined;
  LoginPhoneDetailer: undefined;
  LoginVerifyDetailer: { phone?: string; email?: string };
  CreateAccountEmailDetailer: undefined;
  CreateAccountPhoneDetailer: undefined;
  CreateProfileDetailer: undefined;
  CreateProfileDetailerAccountVerified: undefined;

  // Detailer Home & Status
  HomeDetailer: undefined;
  HomeDetailerOffline: undefined;

  // Detailer Bookings
  MyBookingsDetailer: undefined;
  BookingDetails: { bookingId: string };
  BookingDetailsConfirmArrival: { bookingId: string };
  BookingDetailsArrival: { bookingId: string };
  BookingDetailsBeforePhotos: { bookingId: string };
  BookingDetailsAfterPhotos: { bookingId: string };
  BookingDetailsCompleteService: { bookingId: string };
  ArrivalConfirm: { bookingId: string };

  // Ratings & Performance
  RatingsPerformance: undefined;
  RateDetailer: { bookingId: string; customerId: string };
};

// ============================================================================
// Root Navigator (switches between Customer and Detailer)
// ============================================================================

export type RootStackParamList = {
  CustomerApp: undefined;
  DetailerApp: undefined;
};

// ============================================================================
// Navigation Props Types
// ============================================================================

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

// Customer navigation prop
export type CustomerNavigationProp = NativeStackNavigationProp<CustomerStackParamList>;

// Detailer navigation prop
export type DetailerNavigationProp = NativeStackNavigationProp<DetailerStackParamList>;

// Route prop helpers
export type CustomerRouteProp<T extends keyof CustomerStackParamList> = RouteProp<
  CustomerStackParamList,
  T
>;

export type DetailerRouteProp<T extends keyof DetailerStackParamList> = RouteProp<
  DetailerStackParamList,
  T
>;
