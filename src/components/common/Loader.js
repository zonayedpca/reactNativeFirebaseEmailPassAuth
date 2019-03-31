import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = ({ size, color }) => {
  return (
    <View>
      <ActivityIndicator size={size ? size : "small"} color={color ? color : "#fff"} />
    </View>
  )
}

export { Loader };
