import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Requirements implemented by this screen:
 * (No requirements mapped to this screen)
 *
 * Figma Screen: Chat No Chat Available
 * Node ID: 60:59
 */

interface Props {}

const ChatNoChatAvailableScreen: React.FC<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* TODO: Implement UI based on Figma design */}
        {/* Figma Node ID: 60:59 */}

        <View style={styles.placeholder}>
          <Text style={styles.title}>Chat No Chat Available</Text>
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

export default ChatNoChatAvailableScreen;
