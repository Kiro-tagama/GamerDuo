import { View, ImageBackground } from "react-native";
import { useStyle } from "../../style/style";
import { agents } from "../../api/valorantApi";
import { CardInfo } from "./CardInfo";
import useMenu from "../../hooks/useMenu";

interface Card{
  profile:{
    bio: string;
    name: string;
    img: string;
    agentFav: number;
    consoles: Array<any>; //arrumar depois
  },
  number:number
}

export function Card({profile,number}:Card){
  const { stylesHome } = useStyle()
  const {active} = useMenu()
  const agent=agents[3]
  
  return(
    <View style={[stylesHome.card,active,{backgroundColor:"#"+agent.backgroundGradientColors[0]||"#222"}]}>

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