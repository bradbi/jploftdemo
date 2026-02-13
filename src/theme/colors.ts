/**
 * Renue app color palette
 *
 * Based on Figma design system
 */
export const colors = {
  // Primary brand colors
  primary: '#4CAF50', // Green theme for car care
  primaryDark: '#388E3C',
  primaryLight: '#81C784',

  // Secondary colors
  secondary: '#2196F3',
  secondaryDark: '#1976D2',
  secondaryLight: '#64B5F6',

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  background: '#F5F5F5',
  surface: '#FFFFFF',

  // Text colors
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  textDisabled: '#9CA3AF',
  textOnPrimary: '#FFFFFF',

  // Status colors
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  info: '#2196F3',

  // Border colors
  border: '#E5E7EB',
  borderFocused: '#4CAF50',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const;

export type ColorName = keyof typeof colors;
