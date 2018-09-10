import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }
  componentWillMount() {
    StatusBar.setHidden(false);
  }
  changeUser = (user) => {
    this.setState({ user });
  };
  changePassword = (password) => {
    this.setState({ password });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.viewLogo}>
          <Image source={require('../../Images/1503969754933-10330673.png')} resizeMode="cover" />
        </TouchableOpacity>
        <View style={styles.viewGroup}>
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email or Phone"
              onChangeText={this.changeUser}
              value={this.state.user}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              onChangeText={this.changePassword}
              value={this.state.password}
              secureTextEntry
            />
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.txtBtn}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewForgot}>
              <Text style={styles.txtForgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewHelp}>
            <TouchableOpacity style={styles.viewSignUp}>
              <Text style={styles.txtSignUp}>Sign Up for Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewBtnHelp}>
              <Text style={styles.txtBtnHelp}>?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d5a95',
    padding: 20,
  },
  viewLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewGroup: {
    flex: 3,
    justifyContent: 'space-between',
  },
  inputStyle: {
    backgroundColor: '#f6f7f8',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#757575',
    color: 'black',
    alignSelf: 'stretch',
    padding: 12,
    marginVertical: 10,
    height: 50,
  },
  viewBtn: {
    backgroundColor: '#153677',
    alignSelf: 'stretch',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  txtBtn: {
    color: '#f6f7f8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewForgot: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtForgot: {
    color: '#f6f7f8',
    fontSize: 20,
    textDecorationLine: 'underline',
  },

  viewHelp: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewSignUp: {
    paddingLeft: 95,
  },
  viewBtnHelp: {
    backgroundColor: '#153677',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txtBtnHelp: {
    color: '#f6f7f8',
    fontSize: 25,
    fontWeight: 'bold',
  },
  txtSignUp: {
    color: '#f6f7f8',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
