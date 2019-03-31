import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Button = ({ style, children, onPress }) => {
  const { btnStyle, textStyle } = styles;
  return (
    <View style={[btnStyle, style]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  btnStyle: {
    backgroundColor: '#f8ad1d',
    padding: 15,
    borderRadius: 4
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center'
  }
}

export { Button };
