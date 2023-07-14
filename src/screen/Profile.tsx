import { View, Text, Image, TouchableHighlight } from "react-native";
import { Menu } from "../components/Menu";
import { useLogin } from "../hooks/useLogin";
import { colors, stylesChat, stylesTexts } from "../style/style";
import { PerfilCards } from "../components/PerfilCards";
import { useRoute } from "@react-navigation/native";

export function Profile() {
  const {user}=useLogin()
  const {params}=useRoute()
  console.log(user);
  
  
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