import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { CustomerStackParamList } from './types';

// Shared Screens
import HomeScreen from '../screens/shared/HomeScreen';
import ChooseRoleScreen from '../screens/shared/ChooseRoleScreen';
import OnboardingScreen from '../screens/shared/OnboardingScreen';
import CreateAccountEmailScreen from '../screens/shared/CreateAccountEmailScreen';
import CreateAccountPhoneScreen from '../screens/shared/CreateAccountPhoneScreen';
import LoginEmailScreen from '../screens/shared/LoginEmailScreen';
import LoginPhoneScreen from '../screens/shared/LoginPhoneScreen';
import LoginVerifyScreen from '../screens/shared/LoginVerifyScreen';
import ForgotPasswordScreen from '../screens/shared/ForgotPasswordScreen';
import VerifyForgotPasswordScreen from '../screens/shared/VerifyForgotPasswordScreen';
import ResetPasswordScreen from '../screens/shared/ResetPasswordScreen';
import CreateProfilePhoneScreen from '../screens/shared/CreateProfileLoginWithPhoneScreen';
import CreateProfileEmailScreen from '../screens/shared/CreateProfileLoginWithEmailScreen';
import ProfileScreen from '../screens/shared/ProfileScreen';
import MenuScreen from '../screens/shared/MenuScreen';
import NotificationsScreen from '../screens/shared/NotificationsScreen';
import AddVehicleScreen from '../screens/shared/AddVehicleScreen';
import BankAccountSettingsScreen from '../screens/shared/BankAccountSettingsScreen';
import GetIdVerifiedScreen from '../screens/shared/GetIdVerifiedScreen';
import DocumentAndSelfieVerificationScreen from '../screens/shared/DocumentAndSelfieVerificationScreen';
import UploadPhotoOfIdScreen from '../screens/shared/UploadPhotoOfIdScreen';
import AllowCameraScreen from '../screens/shared/AllowCameraScreen';
import AccessTheCameraScreen from '../screens/shared/AccessTheCameraScreen';
import ChatNoChatAvailableScreen from '../screens/shared/ChatNoChatAvailableScreen';

// Customer Screens
import BookAServiceSelectVehicleScreen from '../screens/customer/BookAServiceSelectVehicleScreen';
import BookAServiceSelectPackageScreen from '../screens/customer/BookAServiceSelectPackageScreen';
import BookAServiceLocationScreen from '../screens/customer/BookAServiceLocationScreen';
import BookAServiceOverviewScreen from '../screens/customer/BookAServiceOverviewScreen';
import BookAServicePaymentScreen from '../screens/customer/BookAServicePaymentScreen';
import AddNewPaymentMethodScreen from '../screens/customer/AddNewPaymentMethodScreen';
import MyBookingsScreen from '../screens/customer/MyBookingsScreen';
import PaymentReceiptScreen from '../screens/customer/PaymentReceiptScreen';
import BookingDetailsRateCustomerScreen from '../screens/customer/BookingDetailsRateCustomerScreen';
import RateCustomerScreen from '../screens/customer/RateCustomerScreen';

const Stack = createNativeStackNavigator<CustomerStackParamList>();

const CustomerNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Home */}
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* Auth & Onboarding */}
      <Stack.Screen name="ChooseRole" component={ChooseRoleScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="CreateAccountEmail" component={CreateAccountEmailScreen} />
      <Stack.Screen name="CreateAccountPhone" component={CreateAccountPhoneScreen} />
      <Stack.Screen name="LoginEmail" component={LoginEmailScreen} />
      <Stack.Screen name="LoginPhone" component={LoginPhoneScreen} />
      <Stack.Screen name="LoginVerify" component={LoginVerifyScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyForgotPassword" component={VerifyForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="CreateProfilePhone" component={CreateProfilePhoneScreen} />
      <Stack.Screen name="CreateProfileEmail" component={CreateProfileEmailScreen} />

      {/* Profile & Settings */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="BankAccountSettings" component={BankAccountSettingsScreen} />
      <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />

      {/* Identity Verification */}
      <Stack.Screen name="GetIdVerified" component={GetIdVerifiedScreen} />
      <Stack.Screen name="DocumentAndSelfieVerification" component={DocumentAndSelfieVerificationScreen} />
      <Stack.Screen name="UploadPhotoOfId" component={UploadPhotoOfIdScreen} />
      <Stack.Screen name="AllowCamera" component={AllowCameraScreen} />
      <Stack.Screen name="AccessTheCamera" component={AccessTheCameraScreen} />

      {/* Chat */}
      <Stack.Screen name="ChatNoChatAvailable" component={ChatNoChatAvailableScreen} />

      {/* Booking Flow */}
      <Stack.Screen name="BookAServiceSelectVehicle" component={BookAServiceSelectVehicleScreen} />
      <Stack.Screen name="BookAServiceSelectPackage" component={BookAServiceSelectPackageScreen} />
      <Stack.Screen name="BookAServiceLocation" component={BookAServiceLocationScreen} />
      <Stack.Screen name="BookAServiceOverview" component={BookAServiceOverviewScreen} />
      <Stack.Screen name="BookAServicePayment" component={BookAServicePaymentScreen} />
      <Stack.Screen name="AddNewPaymentMethod" component={AddNewPaymentMethodScreen} />

      {/* Bookings */}
      <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
      <Stack.Screen name="PaymentReceipt" component={PaymentReceiptScreen} />
      <Stack.Screen name="BookingDetailsRateCustomer" component={BookingDetailsRateCustomerScreen} />
      <Stack.Screen name="RateCustomer" component={RateCustomerScreen} />
    </Stack.Navigator>
  );
};

export default CustomerNavigator;
