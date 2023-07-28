import { TouchableOpacity, Image, View, Text } from "react-native";
import { useStyle } from "../../style/style";
import useMenu from "../../hooks/useMenu";
import { conversa } from "../../api/fakeProfiles";
import { ContextArea } from "../../firebase/ContextoProvider";
import { useContext } from "react";

interface PropsList{
  perfil:{
    id: number;
    names: any[];
    img: string;
    mensagem: any[],
  }
}

export function ChatCard({perfil}:PropsList){
  //@ts-ignore
  const {user}=useContext(ContextArea)
  const {nav}=useMenu()
  const { stylesChat, stylesTexts } =useStyle()

  var txt =conversa[conversa.length-1].mensagem
  
  const data= perfil.names[0].id === user.id ? perfil.names[1] : perfil.names[0]

  return(
    <TouchableOpacity
      // @ts-ignore
      onPress={()=>nav.navigate('inChat',{data,id:perfil.id})}
      style={stylesChat.cardChat}
    >
      <Image
        style={{height:65,width:65,borderRadius:60}}
        source={{uri:data.img}}
      />
      <View style={{marginHorizontal:10}}>
        <Text style={stylesTexts.normal}>{data.name}</Text>
        <Text style={stylesTexts.small}>{txt.substring(0, 34)} {txt.length >= 35 ? '...':null}</Text>
      </View>
    </TouchableOpacity>
  )
}