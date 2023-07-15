import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { stylesApp } from './src/style/style';
import { themaDark } from './src/style/theme';

import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/global/Route';

import { ContextProvider } from './src/firebase/ContextoProvider';

export default function App() {
  
  return (
    <ContextProvider>
      <NavigationContainer theme={themaDark}>
        <View style={[stylesApp.container,{backgroundColor:themaDark.colors.background}]}>
          <Router/>
          <StatusBar style='light'/>
        </View>
      </NavigationContainer>
    </ContextProvider>
  );
}

