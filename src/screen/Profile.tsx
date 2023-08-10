import { View, Text, Image, TouchableHighlight } from "react-native";
import { Menu } from "../components/menu/Menu";
import { useStyle } from "../style/style";
import { PerfilCards } from "../components/profile/PerfilCards";
import { useRoute } from "@react-navigation/native";
import { colors } from "../style/theme";
import { useContext } from "react";
import { ContextArea } from "../firebase/ContextoProvider";
import { ProfileInfos } from "../components/profile/ProfileInfos";

export function Profile(){
  // @ts-ignore
  const {user}=useContext(ContextArea)
  const { stylesTexts, stylesProfile } =useStyle()

  const {params}=useRoute()
  // @ts-ignore
  const data= params == null || params.id == user.id ? user: params 
  
  return(
    <>
      <View style={{flex:1, alignItems:'center'}}>
        {data.img?
          <Image
          source={{uri:data.img}}
          style={stylesProfile.imgProfile}
          />
          : null
        }
        <Text style={stylesTexts.h2}>{data.name}</Text>

        <ProfileInfos data={data}/>

        { params == null && data.bio == undefined || data.bio.length <= 0 
          ?
          <Text style={stylesTexts.small}>Segure por um tempo a tua foto de perfil no menu abaixo para edita-lo</Text>
          :null
        }
      </View>
      <Menu/>
    </>
  )
}
{/* <PerfilCards cardData={data}/>
        
        { // @ts-ignore
        params == null||params.id == user.id ?
          <TouchableHighlight
            style={[stylesChat.cardChat,{width:'90%',justifyContent:'center',alignItems:'center',padding:0}]}
            underlayColor={colors.white}
            onPress={()=>{}}
          >
            <Text style={stylesTexts.h1}>+</Text>
          </TouchableHighlight>
          :null
        } */}