import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ name, placeholder, value, onChangeText, secureTextEntry=false }) => {
  const { containerStyle, nameStyle, inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} placeholder={placeholder} style={inputStyle} />
    </View>
  )
}

const styles = {
  containerStyle: {
    marginTop: 5,
    marginBottom: 5
  },
  inputStyle: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 5
  }
}

export { Input };
