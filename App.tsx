import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { stylesApp } from './src/style/style';

import { Home } from './src/screen/Home';
import { Login } from './src/screen/Login';

export default function App() {
  return (
    <View style={stylesApp.container}>
      <Login/>
      <StatusBar style="light" />
    </View>
  );
}

