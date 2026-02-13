/**
 * Renue - On-demand mobile car detailing platform
 *
 * Figma: https://www.figma.com/design/P4LcNCjMduupuflADQiQlx
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CustomerNavigator from './navigation/CustomerNavigator';
import DetailerNavigator from './navigation/DetailerNavigator';
import type { UserRole } from './models';

const App: React.FC = () => {
  // TODO: Replace with actual auth state from AuthService
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {currentRole === 'detailer' ? (
          <DetailerNavigator />
        ) : (
          <CustomerNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
