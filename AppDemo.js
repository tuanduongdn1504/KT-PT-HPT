/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor() {
    super();
    this.state = { userName: '', passWord: '' };
  }
  changeA = () => {};
  changeB = () => {};
  onSubmit = () => {
    console.log('userName', this.state.userName);
    console.log('passWord', this.state.passWord);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Register now </Text>
        <View style={styles.instructions}>
          <TextInput placeholder="A" onChangeText={this.changeA} value={this.state.userName} />
          <TextInput placeholder="B" onChangeText={this.changeB} value={this.state.passWord} />
          <Button title="Login" onPress={this.onSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
