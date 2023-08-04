import { useContext } from "react";
import { ContextArea } from "../../firebase/ContextoProvider";

import { TouchableOpacity, Image, View, Text } from "react-native";
import { useStyle } from "../../style/style";
import useMenu from "../../hooks/useMenu";

interface PropsList{
  perfil:{
    id: number;
    names: any[];
    img: string;
    mensagem:[
      {
        text:string,
        time:[{},{}]}
    ],
  }
}

export function ChatCard({perfil}:PropsList){
  //@ts-ignore
  const {user}=useContext(ContextArea)
  const {nav}=useMenu()
  const { stylesChat, stylesTexts } =useStyle()
  
  //@ts-ignore
  const txt= perfil.mensagem.length != 0 ? perfil.mensagem[perfil.mensagem.length-1].text : "Inicie uma conversa"
  //@ts-ignore
  const hora= perfil.mensagem.length != 0 ? perfil.mensagem[perfil.mensagem.length-1].time : null
  const data= perfil.names[0].id === user.id ? perfil.names[1] : perfil.names[0]

  return(
    <TouchableOpacity
      // @ts-ignore
      onPress={()=>nav.navigate('inChat',{data,id:perfil.id})}
      style={stylesChat.cardChat}
    >
      <Image
        style={{height:65,width:65,borderRadius:20}}
        source={{uri:data.img}}
      />
      <View style={{marginHorizontal:10,flex:1}}>
        <Text style={stylesTexts.normal}>{data.name}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={stylesTexts.small}>{txt.substring(0, 34)} {txt.length >= 35 ? '...':null}</Text>
          <Text style={stylesTexts.small}>{hora?hora[0]+":"+hora[1]:null}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}