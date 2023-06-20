import { TouchableHighlight, View, Text } from "react-native";
import { stylesMenu } from "../style/style";
import { Feather } from '@expo/vector-icons';
import { user } from "../global/Route";
import useMenu from "../hooks/useMenu";

export function Menu(){

  const {page,setPage,active} = useMenu()

  function like(like:'like'|'deslike') {

    if (like === "like") {
      return
    }else{
      return
    }
  }

  return(
    <View style={{flexDirection:'row',justifyContent:'center', marginVertical:15}}>
      {page == 'home'?
        <TouchableHighlight style={stylesMenu.bt}
        onPress={()=>like("deslike")}
        underlayColor="#ff7d63">
          <Feather name="x" size={30} color="#eee" />
        </TouchableHighlight>
        :null
      }

      <View style={stylesMenu.opt}>
        <TouchableHighlight 
          style={[stylesMenu.opts, page =="home" ? active: null]}
          onPress={()=>setPage('home')}
          >
          <Feather name="layers" size={30} color={page == 'home' ? "#222" : "#eeeeeecc"} /></TouchableHighlight>
        <TouchableHighlight 
          style={[stylesMenu.opts, page =="chat" ? active: null]} 
          onPress={()=>{setPage('chat')}}
          >
          <Feather name="message-circle" size={30} color={page == 'chat' ? "#222" : "#eeeeeecc"} /></TouchableHighlight>
        <TouchableHighlight 
          style={[stylesMenu.opts, page =="profile" ? active: null]}
          onPress={()=>setPage('profile')}
          >
          <Text style={{color:page == 'profile' ? "#000" : "#eee"}}>{user.nome[0]}</Text></TouchableHighlight>
      </View>
      
      {page == 'home'?
        <TouchableHighlight 
        style={stylesMenu.bt} 
        onPress={()=>like("like")}
        underlayColor="#b2ff6e">
          <Feather name="heart" size={30} color="#eee"/>
        </TouchableHighlight>
        :null
      }
    </View>
  )
}