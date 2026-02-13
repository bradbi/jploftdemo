import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { DetailerStackParamList } from './types';

// Shared Screens
import HomeScreen from '../screens/shared/HomeScreen';
import ChooseRoleScreen from '../screens/shared/ChooseRoleScreen';
import ProfileScreen from '../screens/shared/ProfileScreen';
import MenuScreen from '../screens/shared/MenuScreen';
import NotificationsScreen from '../screens/shared/NotificationsScreen';
import BankAccountSettingsScreen from '../screens/shared/BankAccountSettingsScreen';
import GetIdVerifiedScreen from '../screens/shared/GetIdVerifiedScreen';
import DocumentAndSelfieVerificationScreen from '../screens/shared/DocumentAndSelfieVerificationScreen';
import UploadPhotoOfIdScreen from '../screens/shared/UploadPhotoOfIdScreen';
import AllowCameraScreen from '../screens/shared/AllowCameraScreen';
import AccessTheCameraScreen from '../screens/shared/AccessTheCameraScreen';
import ChatNoChatAvailableScreen from '../screens/shared/ChatNoChatAvailableScreen';

// Detailer Screens
import SplashDetailerScreen from '../screens/detailer/SplashDetailerScreen';
import ChooseRoleDetailerScreen from '../screens/detailer/ChooseRoleDetailerScreen';
import OnboardingDetailerScreen from '../screens/detailer/OnboardingDetailerScreen';
import LoginEmailDetailerScreen from '../screens/detailer/LoginEmailDetailerScreen';
import LoginPhoneDetailerScreen from '../screens/detailer/LoginPhoneDetailerScreen';
import LoginVerifyDetailerScreen from '../screens/detailer/LoginVerifyDetailerScreen';
import CreateAccountEmailDetailerScreen from '../screens/detailer/CreateAccountEmailDetailerScreen';
import CreateAccountPhoneDetailerScreen from '../screens/detailer/CreateAccountPhoneDetailerScreen';
import CreateProfileDetailerScreen from '../screens/detailer/CreateProfileDetailerScreen';
import CreateProfileDetailerAccountVerifiedScreen from '../screens/detailer/CreateProfileDetailerAccountVerifiedScreen';
import HomeDetailerScreen from '../screens/detailer/HomeDetailerScreen';
import HomeDetailerOfflineScreen from '../screens/detailer/HomeDetailerOfflineScreen';
import MyBookingsDetailerScreen from '../screens/detailer/MyBookingsDetailerScreen';
import BookingDetailsScreen from '../screens/detailer/BookingDetailsScreen';
import BookingDetailsConfirmArrivalScreen from '../screens/detailer/BookingDetailsConfirmArrivalScreen';
import BookingDetailsArrivalScreen from '../screens/detailer/BookingDetailsArrivalScreen';
import BookingDetailsBeforePhotosScreen from '../screens/detailer/BookingDetailsBeforePhotosScreen';
import BookingDetailsAfterPhotosScreen from '../screens/detailer/BookingDetailsAfterPhotosScreen';
import BookingDetailsCompleteServiceScreen from '../screens/detailer/BookingDetailsCompleteServiceScreen';
import ArrivalConfirmScreen from '../screens/detailer/ArrivalConfirmScreen';
import RatingsPerformanceScreen from '../screens/detailer/RatingsPerformanceScreen';
import RateDetailerScreen from '../screens/detailer/RateDetailerScreen';

const Stack = createNativeStackNavigator<DetailerStackParamList>();

const DetailerNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeDetailer"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Detailer Home */}
      <Stack.Screen name="HomeDetailer" component={HomeDetailerScreen} />
      <Stack.Screen name="HomeDetailerOffline" component={HomeDetailerOfflineScreen} />

      {/* Detailer Auth & Onboarding */}
      <Stack.Screen name="SplashDetailer" component={SplashDetailerScreen} />
      <Stack.Screen name="ChooseRoleDetailer" component={ChooseRoleDetailerScreen} />
      <Stack.Screen name="OnboardingDetailer" component={OnboardingDetailerScreen} />
      <Stack.Screen name="LoginEmailDetailer" component={LoginEmailDetailerScreen} />
      <Stack.Screen name="LoginPhoneDetailer" component={LoginPhoneDetailerScreen} />
      <Stack.Screen name="LoginVerifyDetailer" component={LoginVerifyDetailerScreen} />
      <Stack.Screen name="CreateAccountEmailDetailer" component={CreateAccountEmailDetailerScreen} />
      <Stack.Screen name="CreateAccountPhoneDetailer" component={CreateAccountPhoneDetailerScreen} />
      <Stack.Screen name="CreateProfileDetailer" component={CreateProfileDetailerScreen} />
      <Stack.Screen name="CreateProfileDetailerAccountVerified" component={CreateProfileDetailerAccountVerifiedScreen} />

      {/* Shared Screens */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChooseRole" component={ChooseRoleScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="BankAccountSettings" component={BankAccountSettingsScreen} />
      <Stack.Screen name="GetIdVerified" component={GetIdVerifiedScreen} />
      <Stack.Screen name="DocumentAndSelfieVerification" component={DocumentAndSelfieVerificationScreen} />
      <Stack.Screen name="UploadPhotoOfId" component={UploadPhotoOfIdScreen} />
      <Stack.Screen name="AllowCamera" component={AllowCameraScreen} />
      <Stack.Screen name="AccessTheCamera" component={AccessTheCameraScreen} />
      <Stack.Screen name="ChatNoChatAvailable" component={ChatNoChatAvailableScreen} />

      {/* Detailer Bookings */}
      <Stack.Screen name="MyBookingsDetailer" component={MyBookingsDetailerScreen} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
      <Stack.Screen name="BookingDetailsConfirmArrival" component={BookingDetailsConfirmArrivalScreen} />
      <Stack.Screen name="BookingDetailsArrival" component={BookingDetailsArrivalScreen} />
      <Stack.Screen name="BookingDetailsBeforePhotos" component={BookingDetailsBeforePhotosScreen} />
      <Stack.Screen name="BookingDetailsAfterPhotos" component={BookingDetailsAfterPhotosScreen} />
      <Stack.Screen name="BookingDetailsCompleteService" component={BookingDetailsCompleteServiceScreen} />
      <Stack.Screen name="ArrivalConfirm" component={ArrivalConfirmScreen} />

      {/* Ratings & Performance */}
      <Stack.Screen name="RatingsPerformance" component={RatingsPerformanceScreen} />
      <Stack.Screen name="RateDetailer" component={RateDetailerScreen} />
    </Stack.Navigator>
  );
};

export default DetailerNavigator;
