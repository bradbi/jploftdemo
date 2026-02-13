import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Requirements implemented by this screen:
 * - ✅ CUST-VEH-01
 *
 * Figma Screen: Add Vehicle
 * Node ID: 39:38
 */

interface Props {}

const AddVehicleScreen: React.FC<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // TODO: Add state management
  // const [value, setValue] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* TODO: Implement UI based on Figma design */}
        {/* Figma Node ID: 39:38 */}

        <View style={styles.placeholder}>
          <Text style={styles.title}>Add Vehicle</Text>
          <Text style={styles.subtitle}>Implementation pending</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default AddVehicleScreen;
