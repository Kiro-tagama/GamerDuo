import { TouchableHighlight, View} from "react-native";
import { stylesMenu } from "../style/style";
import { Feather } from '@expo/vector-icons';
import useMenu from "../hooks/useMenu";
import { MenuOptions } from "./MenuOptions";

export function Menu({prop}:any){
  const {page} = useMenu()

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

      <MenuOptions/>
      
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