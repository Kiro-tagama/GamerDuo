import { View, Text, Image, ImageBackground } from "react-native";
import { stylesHome, stylesTexts } from "../../style/style";
import { agents } from "../../api/valorantApi";
import { CardInfo } from "./CardInfo";

interface Card{
  profile:{
    id: string;
    name: string;
    img: string;
    agentFav: number;
    consoles: Array<any>; //arrumar depois
  }
}

export function Card({profile}:Card){
  const agent=agents[0]
  
  return(
    <View style={[stylesHome.card,{backgroundColor:"#"+agent.backgroundGradientColors[0]}]}>

    <ImageBackground source={{uri:agent.background}}
      style={{height:"123%",justifyContent:'flex-end'}}>
    <ImageBackground source={{uri:agent.bustPortrait}} 
      style={{flex:1,height:"100%",width:'100%',justifyContent:'flex-end',marginTop:100}}>

      <CardInfo profile={profile}/>

    </ImageBackground>
    </ImageBackground>
    </View>
  )
}