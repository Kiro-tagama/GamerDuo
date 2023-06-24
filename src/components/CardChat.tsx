import { TouchableOpacity, Image, View, Text } from "react-native";
import { stylesChat, stylesTexts } from "../style/style";
import useMenu from "../hooks/useMenu";
import { conversa } from "../api/fakeProfiles";

interface PropsList{
  perfil:{
    id: number;
    nome: string;
    img: string;
    agentFav: number;
  }
}

export function CardChat({perfil}:PropsList){
  const {nav}=useMenu()

  var txt =conversa[conversa.length-1].mensagem 

  return(
    <TouchableOpacity
      onPress={()=>nav.navigate('inChat',perfil)}
      style={stylesChat.cardChat}
    >
      <Image
        style={{height:65,width:65,borderRadius:60}}
        source={{uri:perfil.img}}
      />
      <View style={{marginHorizontal:10}}>
        <Text style={stylesTexts.normal}>{perfil.nome}</Text>
        <Text style={stylesTexts.small}>{txt.substring(0, 34)} {txt.length >= 35 ? '...':null}</Text>
      </View>
    </TouchableOpacity>
  )
}