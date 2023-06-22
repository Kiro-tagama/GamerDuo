import { View, Text, Image } from "react-native";
import { Menu } from "../components/Menu";
import { useLogin } from "../hooks/useLogin";
import { colors, stylesTexts } from "../style/style";
import useMenu from "../hooks/useMenu";

export function Profile() {
  const {user}=useLogin()

  return(
    <>
      <View style={{flex:1, alignItems:'center'}}>
        <Image
          source={{uri:user.imgProfile}}
          style={{height:100,width:100,borderColor:colors.white,borderWidth:2,borderRadius:50,margin:10}}
        />
        <Text style={stylesTexts.h2}>{user.nome}</Text>
      </View>
      <Menu/>
    </>
  )
}