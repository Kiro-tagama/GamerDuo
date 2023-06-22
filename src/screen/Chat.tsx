import { Text, View, FlatList, TouchableOpacity,Image } from "react-native";
import { Menu } from "../components/Menu";
import { colors, stylesTexts } from "../style/style";
import { perfis } from '../api/fakeProfiles';
import useMenu from "../hooks/useMenu";

interface PropsList{
    id: number;
    nome: string;
    img: string;
    agentFav: number;
}

export function Chat() {
  const {nav}=useMenu()

  function CardChat({perfil}:PropsList){
    
    return(
      <TouchableOpacity
        onPress={()=>nav.navigate('inChat',perfil)}
        style={{flexDirection:'row',padding:10,borderColor:colors.midWhite,borderWidth:1,alignItems:'center',margin:2,borderRadius:30}}
      >
        <Image
          style={{height:65,width:65,borderRadius:60}}
          source={{uri:perfil.img}}
        />
        <View style={{marginHorizontal:10}}>
          <Text style={stylesTexts.normal}>{perfil.nome}</Text>
          <Text style={stylesTexts.small}>{perfil.nome}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return(
    <>
    <View style={{flex:1}}>
      <Text style={[stylesTexts.h1,{textAlign:'center',margin:10}]}>Chat</Text>
      <FlatList
        data={perfis}
        renderItem={({item}) => <CardChat perfil={item}/>}
        keyExtractor={(item:PropsList) => item.id}
      />
    </View>
    <Menu/>
    </>
  )
}