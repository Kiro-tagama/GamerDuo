import { View, Text } from "react-native";
import { stylesHome } from "../style/style";

interface Card{
  name: string
}

export function Card() {
  return(
    <View style={stylesHome.card}>
      <View style={stylesHome.card2}>
        <View style={{flexDirection:"row",marginBottom:10}}>
          <Text style={stylesHome.cardImg}>img</Text>
          <View style={stylesHome.cardInfo}>
            <Text>nome</Text>
            <Text>outro</Text>
          </View>
        </View>
        
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <View style={stylesHome.cardInfo}>
            <Text>inf1</Text>
          </View>
          <View style={stylesHome.cardInfo}>
            <Text>inf2</Text>
          </View>
        </View>
      </View>
    </View>
  )
}