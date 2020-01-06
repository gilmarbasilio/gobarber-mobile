import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
