import { View, Image, Text, TouchableHighlight } from "react-native"
import { agents } from "../api/valorantApi"
import { colors, stylesChat, stylesTexts } from "../style/style"
import { Feather } from "@expo/vector-icons";

export function PerfilCards({user}:any) {
  const agent=agents[0]
  let data=user.id

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
      
      {data == 1 ?
        <TouchableHighlight
          style={{position:"absolute",right:-5,top:-5}}
        >
          <Feather name="edit" size={24} color={colors.white} />
        </TouchableHighlight>
        :null
      }
    </View>
  )
}