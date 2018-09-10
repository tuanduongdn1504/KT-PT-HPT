import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../themes/Colors';

const Divider = ({ style }) => <View style={[styles.container, style && style]} />;

const styles = StyleSheet.create({
  container: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.Divider,
  },
});

export default Divider;
