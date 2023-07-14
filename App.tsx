import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme } from 'react-native';
import {  stylesApp } from './src/style/style';

import { NavigationContainer, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import { Router } from './src/global/Route';
import { ContextProvider } from './src/firebase/ContextoProvider';

export default function App() {
  const scheme = useColorScheme()
console.log(scheme);
  
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
    <ContextProvider>
      <View style={[stylesApp.container,{
        backgroundColor:
        scheme === "dark" ? DarkTheme.colors.background : DefaultTheme.colors.background}]}>
        <Router/>
        <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      </View>
    </ContextProvider>
    </NavigationContainer>
  );
}

