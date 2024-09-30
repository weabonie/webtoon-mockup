import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderBarProps {
  title: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>{title}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',  // Customize background color
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default HeaderBar;
