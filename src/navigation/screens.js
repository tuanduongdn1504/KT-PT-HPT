import { Navigation } from 'react-native-navigation';

// USER
// import UserHomeScreen from '../screens/Home';
import UserLogin from '../screens/Authentication';
import UserForgotPassword from '../screens/Authentication/ForgotPassword';
import UserRegister from '../screens/Authentication/Register';

// / ========================== END IMPORT =====================================================

// / ========================== REGISTER SCREENS / COMPONENTS===================================
export function registerScreens() {
  // Navigation.registerComponent('user.home', () => UserHomeScreen);
  Navigation.registerComponent('user.login', () => UserLogin);
  Navigation.registerComponent('user.forgotPassword', () => UserForgotPassword);
  Navigation.registerComponent('user.register', () => UserRegister);
}

export default {};
