import { TouchableHighlight, View, Image } from "react-native";
import { stylesMenu } from "../style/style";
import { Feather } from '@expo/vector-icons';
import useMenu from "../hooks/useMenu";
import { useContext } from "react";
import { ContextArea } from "../firebase/ContextoProvider";

export function Menu({prop}:any){
  const {page,active,nav} = useMenu()
  const {user}=useContext(ContextArea)
  
  return(
    <View style={{flexDirection:'row',justifyContent:'center', marginVertical:15}}>
      
      {/* @ts-ignore */
      page == 'home'?
        <TouchableHighlight style={stylesMenu.bt}
        onPress={()=>prop.swipeLeft()}
        underlayColor="#ff7d63">
          <Feather name="x" size={30} color="#eee" />
        </TouchableHighlight>
        :null
      }

      <View style={stylesMenu.opt}>
        <TouchableHighlight 
          style={[stylesMenu.opts, /* @ts-ignore */
          page == "home" ? active: null]}
          onPress={()=>{
            /* @ts-ignore */
            nav.navigate('home') 
          }}
          >
            <Feather name="layers" size={30} color={/* @ts-ignore */
              page == 'home' ? "#222" : "#eeeeeecc"} />
          </TouchableHighlight>
        <TouchableHighlight 
          style={[stylesMenu.opts,/* @ts-ignore */
          page == "chat" ? active: null]} 
          onPress={()=>{
            /* @ts-ignore */
            nav.navigate('chat')
          }}
          >
          <Feather name="message-circle" size={30} color={/* @ts-ignore */
          page == 'chat' ? "#222" : "#eeeeeecc"} /></TouchableHighlight>
        <TouchableHighlight 
          style={[stylesMenu.opts,/* @ts-ignore */
          page == "profile" ? active: null]}
          onPress={()=>{
            /* @ts-ignore */
            nav.navigate('profile')
          }}
          >
            <Image
              style={{width:'90%',height:'90%',borderRadius:30}}
              source={{uri:user.img}}
            />
          </TouchableHighlight>
      </View>
      
      {/* @ts-ignore */
      page == 'home'?
        <TouchableHighlight 
        style={stylesMenu.bt} 
        onPress={()=>prop.swipeRight()} //.swipeRight()
        underlayColor="#b2ff6e">
          <Feather name="heart" size={30} color="#eee"/>
        </TouchableHighlight>
        :null
      }
    </View>
  )
}