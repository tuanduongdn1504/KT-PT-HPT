import React from 'react';
import { Navigation } from 'react-native-navigation';
// import { iconsMap, iconsLoaded } from './utils/AppIcons';
import { registerScreens } from './navigation/screens';

export const store = null;

export const navigatorStyle = {
  navBarBackgroundColor: '#fff',
  navBarTextColor: '#000000',
  navBarButtonColor: 'black',
  orientation: 'portrait',
  navBarTextFontFamily: 'Roboto-Regular',
  navBarNoBorder: false,
  navBarTextFontSize: 16.5,
  topBarBorderColor: '#e9e9e9',
  topBarElevationShadowEnabled: false,
  statusBarTextColorScheme: 'dark',
  statusBarColor: 'white',
};

export function push(navigator, config, navigatorButtons, navHidden, overrideBackPress = false) {
  navigator.push({
    ...config,
    backButtonTitle: '',
    navigatorButtons: {
      ...navigatorButtons,
      leftButtons: [
        {
          // icon: iconsMap['ic-arrow-back'],
          id: 'backEvent',
          buttonColor: 'white',
        },
      ],
    },
    navigatorStyle: { ...navigatorStyle, navBarHidden: navHidden || false },
    overrideBackPress,
  });
}

export function showModal(
  navigator,
  config,
  navigatorButtons,
  navHidden,
  overrideBackPress = false,
) {
  navigator.showModal({
    ...config,
    navigatorButtons: {
      ...navigatorButtons,
      leftButtons: [
        {
          // icon: iconsMap['ic-x'],
          id: 'closeEvent',
          buttonColor: 'white',
        },
      ],
    },
    navigatorStyle: {
      ...navigatorStyle,
      navBarHidden: navHidden || false,
    },
    overrideBackPress,
  });
}

export function startLoginContent() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'user.login',
      title: 'Login',
      navigatorStyle: {
        navBarHidden: true,
        statusBarTextColorScheme: 'dark',
        statusBarColor: 'white',
      },
    },
    animationType: 'none',
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadIntial();
  }

  loadIntial() {
    Promise.all([this.loadStore()]).then(() => {
      this.startApp();
    });
  }
  async loadStore() {
    return new Promise(() => {
      registerScreens();
    });
  }

  startApp = () => {
    startLoginContent();
  };
}

export default App;
