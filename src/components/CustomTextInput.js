import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../themes/Colors';
// import { normalize, SubTitle, Text } from './Text';
import Divider from './Divider';

const { width } = Dimensions.get('window');
const TEXT_IMPUT = 'TEXT_INPUT';
class CustomTextInput extends Component {
  onFocus() {
    this.refs.TEXT_INPUT.focus();
  }

  renderTextInput(type) {
    // if (type !== 'nomal' && Platform.OS === 'ios') {
    //   return (
    //     <RCTKeyboardToolbarTextInput
    //       {...this.props}
    //       ref={TEXT_IMPUT}
    //       style={styles.textInput}
    //       keyboardType="numeric"
    //       rightButtonText={type}
    //       placeholderTextColor={Colors.greyLight}
    //       // value={this.state.value}
    //       // onChangeText={this.onChangeText}
    //       // placeholder="$0"
    //       // onDone={this.dismissKeyboard}
    //     />
    //   );
    // }
    return (
      <TextInput
        {...this.props}
        ref={TEXT_IMPUT}
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholderTextColor={Colors.greyLight}
      />
    );
  }

  render() {
    return (
      <View style={[styles.container, this.props.style && this.props.style]}>
        {this.renderTextInput()}
      </View>
    );
  }
}

CustomTextInput.propTypes = {};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: 50,
    alignSelf: 'center',
    paddingHorizontal: 15,
    width: width - 30,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.grey,
  },
  // row: {
  //   flexDirection: 'row'
  // }
});

export default CustomTextInput;
