// const React = require('react');
// const { ViewPropTypes } = (ReactNative = require('react-native'));
import React from 'react';
import { View, StyleSheet, Animated, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from './Touchable';
import { Colors } from '../themes';
import { SubText } from './Text';

class DefaultTabBar extends React.Component {
  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    fontFamily: PropTypes.string,
    renderTab: PropTypes.func,
    hideUnderLine: PropTypes.bool,
  };

  static defaultProps = {
    activeTextColor: 'black',
    inactiveTextColor: '#cecece',
    backgroundColor: null,
    fontFamily: 'Roboto-Light',
  };

  renderTab = (name, page, isTabActive, onPressHandler) => {
    const { activeTextColor, inactiveTextColor, textStyle } = this.props;

    return (
      <Touchable
        style={styles.flexOne}
        key={name}
        accessible
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab, textStyle]}>
          <SubText
            style={{
              color: isTabActive ? activeTextColor : inactiveTextColor,
              fontFamily: this.props.fontFamily,
            }}
          >
            {name}
          </SubText>
        </View>
      </Touchable>
    );
  };

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: 50,
      height: 3,
      backgroundColor: 'yellow',
      bottom: 8,
    };
    const offset = (containerWidth / numberOfTabs - 50) / 2;
    const left = {
      transform: [
        {
          translateX: this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0 + offset, containerWidth / numberOfTabs + offset],
          }),
        },
      ],
    };
    // const left = this.props.scrollValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0 + offset, containerWidth / numberOfTabs + offset],
    // });
    const underLineColor = 'blue';
    return (
      <View
        style={[
          styles.tabs,
          {
            backgroundColor: this.props.backgroundColor,
            borderColor: this.props.hideUnderLine ? 'transparent' : Colors.divider,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
          this.props.style,
        ]}
      >
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            { backgroundColor: underLineColor },
            this.props.underlineStyle,
            left,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#f8f8f8',
  },
});

module.exports = DefaultTabBar;
