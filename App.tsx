import { StatusBar } from 'expo-status-bar';

import { themaDark, themaLigth } from './src/style/theme';

import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/global/Route';

import { ContextProvider } from './src/firebase/ContextoProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';

import { useNotification } from './src/hooks/useNotification';

export default function App() {
  const scheme = useColorScheme()
  const theme = scheme == "dark"? themaDark : themaLigth

  const {sendMatchNotification,sendMensagemNotificarion}= useNotification()
  //sendMatchNotification()
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <Router theme={theme}/>
          <StatusBar style= {scheme == "dark"? 'light': 'dark'}/>
        </NavigationContainer>
      </SafeAreaProvider>
    </ContextProvider>
  );
}

