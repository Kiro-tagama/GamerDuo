import { View, Text, Image } from "react-native";
import { useStyle } from "../../style/style";
import { agents } from "../../api/valorantApi";

interface Card{
  profile:{
    bio: string;
    name: string;
    img: string;
    agentFav: number;
    consoles: Array<any>; //arrumar depois
  }
}

export function CardInfo({profile}:Card) {
  const { stylesHome, stylesTexts } =useStyle()
  const agent=agents[0]
  return(
    <View style={stylesHome.card2}>
      <View style={{flexDirection:"row",marginBottom:10}}>
        <Image
          style={stylesHome.cardImg}
          source={{uri:profile.img}}
        />
        <View style={{padding:10,flex:1,margin:3}}>
          <Text style={stylesTexts.normal}>{profile.name}</Text>
          <Text style={stylesTexts.normal}>{profile.bio}</Text>
        </View>
      </View>
      
      {/* <View style={{flexDirection:"row",justifyContent:'space-between'}}>
        <View style={stylesHome.cardInfo}>
          <Image
            style={{height:60,width:60}}
            source={{uri:agent.displayIconSmall}}
            />
          <Text style={stylesTexts.normal}>{agent.displayName}</Text>
        </View>
        <View style={stylesHome.cardInfo}>
          <Text>inf2</Text>
        </View>
      </View> */}
    </View>
  )
}