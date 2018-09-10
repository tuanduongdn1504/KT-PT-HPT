// import React, { Component } from 'react';
// import { View, StyleSheet, Keyboard, Alert } from 'react-native';

// class ForgotPassword extends Component {
//   static navigatorStyle = {
//     navBarHidden: true,
//     statusBarTextColorScheme: 'dark',
//     statusBarColor: 'white'
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: 'vinh.nguyen@enouvo.com'
//     };
//   }

//   componentWillReceiveProps(newProps) {
//     if (!_.isEmpty(newProps.message) && _.isEmpty(this.props.message)) {
//       Alert.alert('', `${newProps.message}`);
//       this.onChangeEmail('');
//     } else if (newProps.error && !this.props.error) {
//       ShowAlertError(newProps.error);
//     }
//   }

//   onChangeEmail = text => {
//     this.setState({ email: text });
//   };

//   onForgotPassword = () => {
//     Keyboard.dismiss();
//     if (!Tools.validateField(this.state.email)) {
//       return Alert.alert('Email can not be empty.');
//     }
//     if (!Tools.validateEmail(this.state.email)) {
//       return Alert.alert('Email not correct.');
//     }
//     const data = {
//       Email: this.state.email
//     };
//     this.props.forgotPassword(data);
//   };

//   onDismiss = () => {
//     this.props.navigator.dismissModal();
//   };

//   render() {
//     return (
//       <Container loading={this.props.loading} haveTextInput>
//         <View style={styles.logoView} />
//         <CustomTextInput
//           style={{ marginBottom: 10 }}
//           autoCapitalize="none"
//           autoCorrect={false}
//           keyboardType="email-address"
//           returnKeyType="done"
//           icon="ic-email"
//           size={25}
//           color={Colors.greyLight}
//           value={this.state.email}
//           placeholder="Email"
//           onChangeText={this.onChangeEmail}
//           onSubmitEditing={this.onForgotPassword}
//           ref={instance => {
//             this.childComponentEmail = instance;
//           }}
//         />
//         <CustomButton
//           title="Reset password"
//           onPress={this.onForgotPassword}
//           style={styles.loginButton}
//         />

//         <Text style={styles.text}>About & privacy</Text>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   logoView: {
//     width: 100,
//     height: 100,
//     borderColor: Colors.grey,
//     borderWidth: 1,
//     alignSelf: 'center',
//     marginVertical: 50
//   },
//   loginButton: {
//     marginTop: 20,
//     marginBottom: 10
//   },
//   text: { marginTop: 10, alignSelf: 'center' }
// });

// export default ForgotPassword;
