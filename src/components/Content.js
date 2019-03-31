import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import firebase from 'firebase';

import { Container, Input, Button, Loader } from './common';

class Content extends Component {
  state = {
    ready: false,
    user: '',
    email: '',
    password: '',
    loading: false,
    error: ''
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBM-QZddkSzqwsV-11THUTkdGm86fVNDfg",
      authDomain: "fir-email-pass-auth.firebaseapp.com",
      databaseURL: "https://fir-email-pass-auth.firebaseio.com",
      projectId: "fir-email-pass-auth",
      storageBucket: "fir-email-pass-auth.appspot.com",
      messagingSenderId: "529417774036"
    };
    firebase.initializeApp(config);
    this.onAuthStateChanged();
  }

  onAuthStateChanged = async() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user, ready: true })
      } else {
        this.setState({ user: '', ready: true });
      }
    })
  }

  onSetError = text => {
    this.setState({ error: text });
  }

  onSetLoading = status => {
    this.setState({ loading: status });
  }

  onUserAuthSuccess = () => {
    this.onSetLoading(false);
  }

  onFormSubmit = () => {
    const { email, password } = this.state;
    if(!email || !password) {
      this.onSetError(`Input can't be blank`);
    } else {
      this.onSetLoading(true);
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.onUserAuthSuccess();
        })
        .catch((err) => {
          this.onSetError(`User Doesn't Exist, Creating...`);
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
              this.onUserAuthSuccess();
            })
            .catch((err) => {
              this.onSetError(`Something went wrong!`);
            })
        })
    }
  }

  onLogout = () => {
    this.onSetLoading(true);
    firebase.auth().signOut()
      .then(() => {
        this.onSetLoading(false);
      })
      .catch(() => {
        this.setState({ loading: false, error: 'Something went wrong!' });
      })
  }

  renderContent = () => {
    const { ready, email, password, loading, user } = this.state;

    const { btnStyle } = styles;
    if(!ready) {
      return (
        <Loader size="large" color="#000" />
      )
    }
    if(user) {
      return (
        <View>
          <Text>Secret Content!</Text>
          {loading ? <Loader size="large" color="#f8ad1d" /> : <Button onPress={this.onLogout} style={btnStyle}>
            Logout
          </Button>}
        </View>
      )
    }
    return (
      <View>
        {this.renderError()}
        <Input value={email} onChangeText={email => this.setState({ email })} placeholder="email@mail.com" />
        <Input value={password} onChangeText={password => this.setState({ password })} secureTextEntry placeholder="password" />
        {loading ? <Loader size="large" color="#f8ad1d" /> : <Button onPress={this.onFormSubmit} style={btnStyle}>
          Login/Register
        </Button>}
      </View>
    )
  }

  renderError = () => {
    const { error } = this.state;
    const { errorStyle } = styles;
    if(error) {
      return (
        <Text style={errorStyle}>{error}</Text>
      )
    }
  }

  render() {
    const { containerStyle, btnStyle, errorStyle } = styles;
    const { email, password, loading, error } = this.state;
    return (
      <View style={containerStyle}>
        <Container>
          {this.renderContent()}
        </Container>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    marginLeft: 25,
    marginRight: 25
  },
  btnStyle: {
    marginTop: 15
  },
  errorStyle: {
    backgroundColor: '#cb2431',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff',
    borderRadius: 4,
    marginBottom: 5
  }
}

export default Content;
