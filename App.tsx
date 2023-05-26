import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { stylesApp } from './src/style/style';

import { Home } from './src/screen/Home';

export default function App() {
  return (
    <View style={stylesApp.container}>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

