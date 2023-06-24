import { View,Image } from 'react-native';
import { stylesHome} from '../style/style';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';
import { perfis } from '../api/fakeProfiles';

export function Home() {

  const perfil=perfis[0]


  return (
    <>
    <View style={stylesHome.container}>
      <View style={{alignItems:'center',margin:10}}>
        <Image
          style={{height:60,width:60,borderRadius:30,resizeMode:'center',backgroundColor:'#eeeeee6c',padding:20}}
          source={{uri:'https://img.quizur.com/f/img610bf00c06c710.35752032.png'}}
          />
      </View>

      <Card profile={perfil}/>
      
    </View>
    <Menu/>
    </>
  );
}

function useSharedValue(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function withTiming(END_POSITION: number, arg1: { duration: number; }): any {
  throw new Error('Function not implemented.');
}

