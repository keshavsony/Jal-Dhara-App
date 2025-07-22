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
      cash: '
