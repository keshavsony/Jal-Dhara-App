import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, Alert } from 'react-native';

const OrderScreen = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [payment, setPayment] = useState('Cash');
  const [language, setLanguage] = useState('English');

  const handleOrder = () => {
    if (name && mobile && address) {
      Alert.alert('Order Placed', `Thanks ${name}, your order is confirmed!`);
      // TODO: Add actual backend/storage logic
    } else {
      Alert.alert('Missing Info', 'Please fill all required fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Your Order</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Quantity (1L bottles)</Text>
      <Picker
        selectedValue={quantity}
        onValueChange={(value) => setQuantity(value)}
        style={styles.picker}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="10" value="10" />
      </Picker>

      <Text style={styles.label}>Payment Type</Text>
      <Picker
        selectedValue={payment}
        onValueChange={(value) => setPayment(value)}
        style={styles.picker}
      >
        <Picker.Item label="Cash" value="Cash" />
        <Picker.Item label="Online" value="Online" />
      </Picker>

      <Text style={styles.label}>Language</Text>
      <Picker
        selectedValue={language}
        onValueChange={(value) => setLanguage(value)}
        style={styles.picker}
      >
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Hindi" value="Hindi" />
      </Picker>

      <Button title="Submit Order" onPress={handleOrder} color="#007bff" />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 15,
  },
});
