import { Text, View } from 'react-native';
import { stylesHome } from '../style/style';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';

export function Home() {

  const perfil=[
    {
      id:1,
      nome:'john doe',
      profileImg:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80'
    }
  ]

  return (
    <View style={stylesHome.container}>
      <Text style={{color:"#eee",textAlign:'center',height:60,backgroundColor:'red'}}>list</Text>
      <Card profile={perfil[0]}/>
      <Menu />
    </View>
  );
}


