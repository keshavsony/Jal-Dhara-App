import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeliveryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Management</Text>
      <Text style={styles.subtitle}>
        Delivery boy will see upcoming orders here.
      </Text>

      {/* Future feature: List of deliveries will be shown here */}
      <Text style={styles.message}>No deliveries assigned yet.</Text>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#555',
  },
  message: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
});
