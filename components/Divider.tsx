import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DividerProps {
  color?: string;
  thickness?: number;
  marginVertical?: number;
}

const Divider: React.FC<DividerProps> = ({
  color = '#ccc', // Default color
  thickness = 1,  // Default thickness
  marginVertical = 5,  // Default vertical margin
}) => {
  return <View style={[styles.divider, { backgroundColor: color, height: thickness, marginVertical }]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%', // Full width
  },
});

export default Divider;
