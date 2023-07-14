import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {  stylesApp } from './src/style/style';

import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/global/Route';
import { ContextProvider } from './src/firebase/ContextoProvider';
import { themaDark } from './src/style/theme';

export default function App() {
  return (
    <NavigationContainer theme={themaDark}>
      <ContextProvider>
        <View style={[stylesApp.container,{backgroundColor:themaDark.colors.background}]}>
          <Router/>
          <StatusBar style='light'/>
        </View>
      </ContextProvider>
    </NavigationContainer>
  );
}

