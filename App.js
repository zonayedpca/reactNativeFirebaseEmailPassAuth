import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import Content from './src/components/Content';

export default class App extends React.Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Header />
        <Content />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
};
