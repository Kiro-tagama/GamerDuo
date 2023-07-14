import { View, Text, Image, TouchableHighlight } from "react-native";
import { Menu } from "../components/Menu";
import { useLogin } from "../hooks/useLogin";
import { stylesChat, stylesTexts } from "../style/style";
import { PerfilCards } from "../components/PerfilCards";
import { useRoute } from "@react-navigation/native";
import { colors } from "../style/theme";
import { useContext } from "react";
import { ContextArea } from "../firebase/ContextoProvider";

export function Profile() {
  const {user}=useContext(ContextArea)
  const {params}=useRoute()
  
  const data= params== null ? user:params

  return(
    <>
      <View style={{flex:1, alignItems:'center'}}>
        <Image
          source={{uri:data.img}}
          style={{height:100,width:100,borderColor:colors.white,borderWidth:2,borderRadius:50,margin:10,marginTop:40}}
        />
        <Text style={stylesTexts.h2}>{data.nome}</Text>

        <View style={{margin:20}}/>

        <PerfilCards user={data}/>
        
        {data.id == 1 ?
          <TouchableHighlight
            style={[stylesChat.cardChat,{width:'90%',justifyContent:'center',alignItems:'center',padding:0}]}
            underlayColor={colors.white}
            onPress={()=>{}}
          >
            <Text style={stylesTexts.h1}>+</Text>
          </TouchableHighlight>
          :null
        }
      </View>
      <Menu/>
    </>
  )
}