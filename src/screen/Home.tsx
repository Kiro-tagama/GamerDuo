import { Text, View } from 'react-native';
import { stylesHome } from '../style/style';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';

export function Home() {

  const perfil=[
    {
      id:1,
      nome:'teste',
      profileImg:''
    }
  ]

  return (
    <View style={stylesHome.container}>
      <Text style={{color:"#eee",textAlign:'center',height:60,backgroundColor:'red'}}>list</Text>
      <Card />
      <Menu />
    </View>
  );
}


