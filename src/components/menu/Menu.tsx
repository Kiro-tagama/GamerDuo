import { TouchableHighlight, View} from "react-native";
import { useStyle } from "../../style/style";
import { Feather } from '@expo/vector-icons';
import useMenu from "../../hooks/useMenu";
import { MenuOptions } from "./MenuOptions";

export function Menu({prop}:any){
  const {page} = useMenu()
  const { stylesMenu }=useStyle()

  return(
    <View style={{flexDirection:'row',justifyContent:'center', marginVertical:15}}>
      
      {/* @ts-ignore */
      page == 'home'?
        <TouchableHighlight style={stylesMenu.bt}
        onPress={()=>prop?prop.swipeLeft():null }
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
        onPress={()=>prop?prop.swipeRight():null} //.swipeRight()
        underlayColor="#b2ff6e">
          <Feather name="heart" size={30} color="#eee"/>
        </TouchableHighlight>
        :null
      }
    </View>
  )
}