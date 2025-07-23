
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [language, setLanguage] = useState('en');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [address, setAddress] = useState('');
  const [paymentType, setPaymentType] = useState('cash');

  const labels = {
    en: {
      welcome: 'Welcome to Jal Dhara',
      name: 'Your Name',
      mobile: 'Mobile Number',
      address: 'Delivery Address',
      qty: '1L Bottle Quantity',
      payment: 'Payment Type',
      order: 'Place Order',
      cash: 'Cash',
      online: 'Online',
      lang: 'Language',
      notice: 'Your data is used only for order processing and never shared.'
    },
    hi: {
      welcome: 'जल धारा में आपका स्वागत है',
      name: 'आपका नाम',
      mobile: 'मोबाइल नंबर',
      address: 'पता',
      qty: '1 लीटर बोतल की संख्या',
      payment: 'भुगतान का तरीका',
      order: 'ऑर्डर करें',
      cash: 'कैश',
      online: 'ऑनलाइन',
      lang: 'भाषा',
      notice: 'आपका डाटा केवल ऑर्डर प्रोसेस के लिए उपयोग होता है।'
    }
  };

  const text = labels[language];

  const placeOrder = () => {
    if (!name || !mobile || !address) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    Alert.alert('Success', `Order placed for ${quantity} bottle(s)!`);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{text.welcome}</Text>

      <Text>{text.name}</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder={text.name}
      />

      <Text>{text.mobile}</Text>
      <TextInput
        style={styles.input}
        value={mobile}
        onChangeText={setMobile}
        placeholder={text.mobile}
        keyboardType="phone-pad"
      />

      <Text>{text.address}</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder={text.address}
        multiline
      />

      <Text>{text.qty}</Text>
      <Picker
        selectedValue={quantity}
        onValueChange={(itemValue) => setQuantity(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>

      <Text>{text.payment}</Text>
      <Picker
        selectedValue={paymentType}
        onValueChange={(itemValue) => setPaymentType(itemValue)}
        style={styles.input}
      >
        <Picker.Item label={text.cash} value="cash" />
        <Picker.Item label={text.online} value="online" />
      </Picker>

      <Text>{text.lang}</Text>
      <Picker
        selectedValue={language}
        onValueChange={(lang) => setLanguage(lang)}
        style={styles.input}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="हिंदी" value="hi" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={placeOrder}>
        <Text style={{ color: 'white', textAlign: 'center' }}>{text.order}</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, fontSize: 12, color: 'gray' }}>{text.notice}</Text>
    </ScrollView>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    marginTop: 10
  }
};
