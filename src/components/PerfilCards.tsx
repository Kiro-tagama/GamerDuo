import { View, Image, Text, TouchableHighlight } from "react-native"
import { agents } from "../api/valorantApi"
import { Feather } from "@expo/vector-icons";
import { colors } from "../style/theme";
import { useContext } from "react";
import { ContextArea } from "../firebase/ContextoProvider";
import { useStyle } from "../style/style";

export function PerfilCards({cardData}:any) {
  // @ts-ignore
  const {user}=useContext(ContextArea)
  const { stylesChat, stylesTexts } =useStyle()
  const agent=agents[0]

  return(
    <View style={[stylesChat.cardChat,{width:'90%'}]}>
      <Image
        style={{height:60,width:60,margin:10}}
        source={{uri:agent.displayIconSmall}}
      />
      <View style={{flex:1}}>
        <View style={{flexDirection:"row",justifyContent:'space-between',marginHorizontal:10}}>
          <Text style={stylesTexts.normal}>NickName</Text>
          <Text style={stylesTexts.normal}>5000 lvl</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between',marginHorizontal:10}}>
          <Text style={stylesTexts.normal}>{agent.displayName}</Text>
          <Text style={stylesTexts.normal}>kd 1.2</Text>
          <Text style={stylesTexts.normal}>ouro 1</Text>
        </View>
      </View>
      
      { cardData.id == user.id ?
        <TouchableHighlight
          style={{
            position:"absolute",
            right:-10,top:-15,
            backgroundColor:stylesChat.mensagem.backgroundColor,
            padding:5,
            borderRadius:5
          }}
        >
          <Feather name="edit" size={24} color={stylesChat.mensagem.color} />
        </TouchableHighlight>
        :null
      }
    </View>
  )
}