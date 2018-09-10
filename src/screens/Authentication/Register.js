import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Alert, Keyboard } from 'react-native';
import Colors from '../../themes/Colors';
import { Text } from '../../components/Text';
import Container from '../../components/Container';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import TouchableText from '../../components/TouchableText';
import ShowAlertError from '../../utils/AlertView';
import Tools from '../../utils/Tools';

const { width } = Dimensions.get('window');

class CreateAccount extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'dark',
    statusBarColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'tuan',
      lastName: 'duong',
      email: 'tuan.duong@enouvo.com',
      phoneNumber: '012345671',
      password: '123456',
      confirmPassword: '123456',
    };
  }

  componentWillMount() {}

  componentWillReceiveProps(newProps) {
    if (newProps.error !== null && !this.props.error) {
      ShowAlertError(newProps.error);
    }
  }

  onChangeFirstName = (text) => {
    this.setState({ firstName: text });
  };

  onChangeLastName = (text) => {
    this.setState({ lastName: text });
  };

  onChangeEmail = (text) => {
    this.setState({ email: text });
  };

  onChangePhoneNumber = (text) => {
    this.setState({ phoneNumber: text });
  };

  onChangePassword = (text) => {
    this.setState({ password: text });
  };

  onChangeConfirmPassword = (text) => {
    this.setState({ confirmPassword: text });
  };

  onSubmitTextInput(textInput) {
    if (textInput === this.TEXTINPUT_FIRSTNAME) {
      this.childComponentLastName.onFocus();
    }
    if (textInput === this.TEXTINPUT_LASTNAME) {
      this.childComponentEmaile.onFocus();
    }
    if (textInput === this.TEXTINPUT_EMAIL) {
      this.childComponentPhone.onFocus();
    }
    if (textInput === this.TEXTINPUT_PHONENUMBER) {
      this.childComponentPassword.onFocus();
    }
    if (textInput === this.TEXTINPUT_PASSWORD) {
      this.childComponentConfirm.onFocus();
    }
    if (textInput === this.TEXTINPUT_CONFIRM) {
      Keyboard.dismiss();
      this.onRegister();
    }
  }

  onRegister = () => {
    if (!Tools.validateField(this.state.firstName)) {
      return Alert.alert('', 'First name can not be empty.', [
        { text: 'Ok', onPress: () => this.childComponentFirstName.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.lastName)) {
      return Alert.alert('', 'Last name can not be empty.', [
        { text: 'Ok', onPress: () => this.childComponentLastName.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.email)) {
      return Alert.alert('Myaccountant', 'Email can not be empty.', [
        { text: 'Ok', onPress: () => this.childComponentEmail.onFocus() },
      ]);
    }
    if (!Tools.validateEmail(this.state.email)) {
      return Alert.alert('Myaccountant', 'Email not correct.', [
        { text: 'Ok', onPress: () => this.childComponentEmail.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.phoneNumber)) {
      return Alert.alert('Myaccountant', 'Phone number can not be empty.', [
        { text: 'Ok', onPress: () => this.childComponentPhone.onFocus() },
      ]);
    }
    if (this.state.phoneNumber.length < 9 || this.state.phoneNumber.length > 12) {
      return Alert.alert('Myaccountant', 'Phone number must have 9-12 digits.', [
        { text: 'Ok', onPress: () => this.childComponentPhone.onFocus() },
      ]);
    }
    if (this.state.password.length < 6) {
      return Alert.alert('Myaccountant', 'Password must have at least 6 characters', [
        { text: 'Ok', onPress: () => this.childComponentPassword.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.confirmPassword)) {
      return Alert.alert('Myaccountant', 'Confirm Password can not be empty.', [
        { text: 'Ok', onPress: () => this.childComponentConfirm.onFocus() },
      ]);
    }
    if (!(this.state.confirmPassword === this.state.password)) {
      return Alert.alert('Myaccountant', 'Password must be the same.', [
        { text: 'Ok', onPress: () => this.childComponentPassword.onFocus() },
      ]);
    }
    // const data = {
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   email: this.state.email,
    //   phoneNumber: this.state.phoneNumber,
    //   password: this.state.password
    // };
    const userData = {
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
    };

    this.props.register(userData);
  };

  onLogin = () => {
    this.props.navigator.dismissModal();
  };

  TEXTINPUT_FIRSTNAME = 'TEXTINPUT_FIRSTNAME';
  TEXTINPUT_LASTNAME = 'TEXTINPUT_LASTNAME';
  TEXTINPUT_EMAIL = 'TEXTINPUT_EMAIL';
  TEXTINPUT_PHONENUMBER = 'TEXTINPUT_PHONENUMBER';
  TEXTINPUT_PASSWORD = 'TEXTINPUT_PASSWORD';
  TEXTINPUT_CONFIRM = 'TEXTINPUT_CONFIRM';

  AWARESCROLLVIEW = 'AWARESCROLLVIEW';

  childComponentFirstName = null;
  childComponentLastName = null;
  childComponentEmail = null;
  childComponentPhone = null;
  childComponentPassword = null;
  childComponentConfirm = null;
  render() {
    return (
      <Container loading={this.props.loading} haveTextInput>
        <View style={styles.logoView} />
        <View style={styles.row}>
          <CustomTextInput
            style={styles.customTextInput}
            autoCapitalize="sentences"
            autoCorrect={false}
            returnKeyType="next"
            size={25}
            color={Colors.greyLight}
            value={this.state.firstName}
            placeholder="FirstName"
            onChangeText={this.onChangeFirstName}
            onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_FIRSTNAME)}
            ref={(instance) => {
              this.childComponentFirstName = instance;
            }}
          />
          <CustomTextInput
            style={styles.customTextInput}
            autoCapitalize="sentences"
            autoCorrect={false}
            returnKeyType="next"
            size={25}
            color={Colors.greyLight}
            value={this.state.lastName}
            placeholder="Last Name"
            onChangeText={this.onChangeLastName}
            onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_LASTNAME)}
            ref={(instance) => {
              this.childComponentLastName = instance;
            }}
          />
        </View>
        <CustomTextInput
          style={styles.marginBottom}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          size={25}
          color={Colors.greyLight}
          value={this.state.email}
          placeholder="Email"
          onChangeText={this.onChangeEmail}
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_EMAIL)}
          ref={(instance) => {
            this.childComponentEmail = instance;
          }}
        />
        <CustomTextInput
          style={styles.marginBottom}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="numeric"
          size={25}
          color={Colors.greyLight}
          value={this.state.phoneNumber}
          placeholder="Phone Number"
          onChangeText={this.onChangePhoneNumber}
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_EMAIL)}
          ref={(instance) => {
            this.childComponentPhone = instance;
          }}
        />
        <CustomTextInput
          style={styles.marginBottom}
          autoCapitalize="none"
          autoCorrect={false}
          icon="ic-password"
          size={25}
          color={Colors.greyLight}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry
          onChangeText={this.onChangePassword}
          returnKeyType="next"
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_PASSWORD)}
          ref={(instance) => {
            this.childComponentPassword = instance;
          }}
        />
        <CustomTextInput
          style={styles.marginBottom}
          autoCapitalize="none"
          autoCorrect={false}
          icon="ic-confirmpassword"
          size={25}
          color={Colors.greyLight}
          value={this.state.confirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={this.onChangeConfirmPassword}
          returnKeyType="done"
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_CONFIRM)}
          ref={(instance) => {
            this.childComponentConfirm = instance;
          }}
        />
        <CustomButton title="Register Now" onPress={this.onRegister} style={styles.loginButton} />
        <View style={styles.signInView}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableText title="Sign In" onPress={this.onLogin} />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  logoView: {
    width: 100,
    height: 100,
    borderColor: Colors.grey,
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: 50,
  },
  loginButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: { alignSelf: 'center', textAlign: 'center' },
  customTextInput: {
    width: width / 2 - 20,
    marginHorizontal: 0,
  },
  marginBottom: { marginBottom: 10 },
  signInView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreateAccount;
