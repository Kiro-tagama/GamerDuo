import { Text, View,Image } from 'react-native';
import { stylesHome } from '../style/style';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';
import { perfis } from '../api/fakeProfiles';


export function Home() {

  const perfil=perfis[2]

  return (
    <View style={stylesHome.container}>
      <View style={{alignItems:'center'}}>
        <Image
          style={{height:60,width:60,borderRadius:30,resizeMode:'center',backgroundColor:'#eeeeee6c'}}
          source={{uri:'https://img.quizur.com/f/img610bf00c06c710.35752032.png'}}
        />
      </View>
      <Card profile={perfil}/>

      <Menu page="home"/>
    </View>
  );
}


