import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = () => {
  const { containerStyle, imageContainerStyle, imageStyle, textHeadStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={imageContainerStyle}>
        <Image style={imageStyle} source={{ uri: `https://firebase.google.com/_static/images/firebase/touchicon-180.png` }} />
      </View>
      <Text style={textHeadStyle}>Firebase Auth</Text>
      <Text style={textStyle}>Using Email And Password</Text>
    </View>
  )
}

const styles = {
  containerStyle: {
    backgroundColor: '#f8ad1d',
    width: '100%',
    paddingTop: 80,
    paddingBottom: 120,
    alignItems: 'center',
    marginBottom: -60
  },
  imageContainerStyle: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 100
  },
  imageStyle: {
    width: 60,
    height: 60
  },
  textHeadStyle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '900'
  },
  textStyle: {
    color: '#fff',
    fontSize: 16
  }
}

export default Header;
