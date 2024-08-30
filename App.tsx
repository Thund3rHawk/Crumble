import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store/store';

import { enableScreens } from 'react-native-screens';

// Enable react-native-screens for performance optimization
enableScreens();

// Import your screens
import LoaderScreen from './src/screens/auth/Loading';
import Signin from './src/screens/auth/Signin';
import Home from './src/screens/landingpage/Home';
import Signup from './src/screens/auth/Signup';
import OTPVerify from './src/screens/auth/OTPVerify';
import Location from './src/screens/auth/Location';
import SigninSuccess from './src/screens/auth/SigninSuccess';
import Search from './src/screens/landingpage/Search';
import SearchResult from './src/screens/landingpage/SearchResult';
import Details from './src/screens/landingpage/Details';
import CartScreen from './src/screens/landingpage/CartScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoaderScreen">
          <Stack.Screen name="LoaderScreen" component={LoaderScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false, title: 'Sign In' }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false, title: 'Sign Up' }} />
          <Stack.Screen name="OTPVerify" component={OTPVerify} options={{ headerShown: false, title: 'Verify OTP' }} />
          <Stack.Screen name="Location" component={Location} options={{ headerShown: false, title: 'Location' }} />
          <Stack.Screen name="SigninSuccess" component={SigninSuccess} options={{ headerShown: false, title: 'Sign In Success' }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false, title: 'Home' }} />
          <Stack.Screen name="Search" component={Search} options={{ title: 'Search' }} />
          <Stack.Screen name="SearchResult" component={SearchResult} options={{ title: 'Search Result' }} />
          <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
          <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false, title: 'Cart' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
