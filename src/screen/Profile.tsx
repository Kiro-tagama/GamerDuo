import { View, Text, Image } from "react-native";
import { Menu } from "../components/menu/Menu";
import { useStyle } from "../style/style";
import { useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { ContextArea } from "../firebase/ContextoProvider";
import { ProfileInfos } from "../components/profile/ProfileInfos";
import { getUser } from "../api/api";

export function Profile(){
  // @ts-ignore
  const {user}=useContext(ContextArea)
  const { stylesTexts, stylesProfile } =useStyle()

  const {params}=useRoute()

  const [profile,setProfile]= useState<any>(params)
  useEffect(()=>{
    async function name() {
      setProfile(await getUser(profile.id))
    }name()
  },[profile])

  // @ts-ignore
  const data= params == null || params.id == user.id ? user : profile 
  
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

        { data.bio || data.platform || data.games?
          <ProfileInfos data={data}/>: <View style={{flex:1}}/>}

        { data == user && data.bio == "" ?
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