import { Text, View,Image } from 'react-native';
import { stylesHome } from '../style/style';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';
import { perfis } from '../api/fakeProfiles';
import useMenu from '../hooks/useMenu';
import { useEffect, useState } from 'react';


export function Home() {

  const {page} = useMenu()
  const perfil=perfis[0]

  const [tela,setTela]=useState(page)
  
  function funcPage() {
    if(page == "home"){
      return <Card profile={perfil}/>
    }
    else if(page == "chat"){
      return <Text>chat</Text>
    }
    else{
      return <Text>profile</Text>
    }
  }

  useEffect(()=>{console.log(tela);
  },[page])

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


