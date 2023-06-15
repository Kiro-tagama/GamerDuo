import { TouchableHighlight, View, Text } from "react-native";
import { stylesMenu } from "../style/style";
import { Feather } from '@expo/vector-icons';

export function Menu({page}:string){

  function like(like:'like'|'deslike') {

    if (like === "like") {
      return
    }else{
      return
    }
  }

  return(
    <View style={{flexDirection:'row',justifyContent:'center'}}>
      {page == 'home'?
        <TouchableHighlight style={stylesMenu.bt}
        onPress={()=>like("deslike")}
        underlayColor="#ff7d63">
          <Feather name="x" size={30} color="#eee" />
        </TouchableHighlight>
        :null
      }

      <View style={stylesMenu.opt}>
        <TouchableHighlight style={stylesMenu.opts}>
          <Feather name="layers" size={30} color="#eee" /></TouchableHighlight>
        <TouchableHighlight style={stylesMenu.opts}>
          <Feather name="message-circle" size={30} color="#eee" /></TouchableHighlight>
        <TouchableHighlight style={stylesMenu.opts}>
          <Text>P</Text></TouchableHighlight>
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