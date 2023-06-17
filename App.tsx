import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { colors, stylesApp } from './src/style/style';

import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/global/Route';

const MyTheme = {
  dark: true,
  colors: {
    primary: '',
    background: colors.black,
    card: '',
    text: colors.white,
    border: colors.gray,
    notification: '',
  },
};

export default function App() {
  return (
    <View style={stylesApp.container}>
      <NavigationContainer theme={MyTheme}>
        <Router/>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

