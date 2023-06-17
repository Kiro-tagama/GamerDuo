import { View, Text, Image, ImageBackground } from "react-native";
import { stylesHome, stylesTexts } from "../style/style";
import { agents } from "../api/valorantApi";

interface Card{
  profile:{
    id: number;
    nome: string;
    img: string;
    agentFav: number;
  }
}

export function Card({profile}:Card){
  const agent=agents[profile.agentFav] 
  
  return(
    <View style={[stylesHome.card,{backgroundColor:"#"+agent.backgroundGradientColors[0]}]}>

    <ImageBackground source={{uri:agent.background}}
      style={{height:"123%",justifyContent:'flex-end'}}>
    <ImageBackground source={{uri:agent.bustPortrait}} 
      style={{flex:1,height:"100%",width:'100%',justifyContent:'flex-end',marginTop:100}}>

      <View style={stylesHome.card2}>
        <View style={{flexDirection:"row",marginBottom:10}}>
          <Image
            style={stylesHome.cardImg}
            source={{uri:profile.img}}
            />
          <View style={{padding:10,flex:1,margin:3}}>
            <Text style={stylesTexts.normal}>{profile.nome}</Text>
            <Text style={stylesTexts.normal}>{profile.id}</Text>
          </View>
        </View>
        
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
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
        </View>
      </View>

    </ImageBackground>
    </ImageBackground>
    </View>
  )
}