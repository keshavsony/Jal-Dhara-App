import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Jal Dhara 🚰</Text>
      <Text style={styles.subtitle}>Order clean water easily</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Place New Order"
          onPress={() => navigation.navigate('Order')}
          color="#007bff"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
