import { TouchableHighlight, View, Text, Image } from "react-native";
import { stylesMenu } from "../style/style";
import { Feather } from '@expo/vector-icons';
import useMenu from "../hooks/useMenu";
import { useLogin } from "../hooks/useLogin";

export function Menu(){

  const {page,active,nav,like,noLike} = useMenu()
  const {user}=useLogin()

  return(
    <View style={{flexDirection:'row',justifyContent:'center', marginVertical:15}}>
      {page == 'home'?
        <TouchableHighlight style={stylesMenu.bt}
        onPress={()=>like()}
        underlayColor="#ff7d63">
          <Feather name="x" size={30} color="#eee" />
        </TouchableHighlight>
        :null
      }

      <View style={stylesMenu.opt}>
        <TouchableHighlight 
          style={[stylesMenu.opts, page =="home" ? active: null]}
          onPress={()=>{
            nav.navigate('home') 
          }}
          >
          <Feather name="layers" size={30} color={page == 'home' ? "#222" : "#eeeeeecc"} /></TouchableHighlight>
        <TouchableHighlight 
          style={[stylesMenu.opts, page =="chat" ? active: null]} 
          onPress={()=>{
            nav.navigate('chat')
          }}
          >
          <Feather name="message-circle" size={30} color={page == 'chat' ? "#222" : "#eeeeeecc"} /></TouchableHighlight>
        <TouchableHighlight 
          style={[stylesMenu.opts, page =="profile" ? active: null]}
          onPress={()=>{
            nav.navigate('profile')
          }}
          >
            <Image
              style={{width:'90%',height:'90%',borderRadius:30}}
              source={{uri:user.imgProfile}}
            />
          </TouchableHighlight>
      </View>
      
      {page == 'home'?
        <TouchableHighlight 
        style={stylesMenu.bt} 
        onPress={()=>noLike}
        underlayColor="#b2ff6e">
          <Feather name="heart" size={30} color="#eee"/>
        </TouchableHighlight>
        :null
      }
    </View>
  )
}