import React, { PureComponent } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from './Text';

class TouchableText extends PureComponent {
  onPress = () => {
    this.props.onPress();
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[this.props.style && this.props.style, styles.container]}>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default TouchableText;

TouchableText.propTypes = {
  ...TouchableWithoutFeedback.propTypes,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});
