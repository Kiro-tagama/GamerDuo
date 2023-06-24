import { TouchableOpacity, Image, View, Text } from "react-native";
import { stylesChat, stylesTexts } from "../style/style";
import useMenu from "../hooks/useMenu";

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
        <Text style={stylesTexts.small}>{perfil.nome}</Text>
      </View>
    </TouchableOpacity>
  )
}