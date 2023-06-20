import { Text, View } from "react-native";
import { Menu } from "../components/Menu";
import { stylesTexts } from "../style/style";

export function Chat() {
  return(
    <>
    <View>
      <Text style={stylesTexts.h1}>Chat</Text>

    </View>
    <Menu/>
    </>
  )
}