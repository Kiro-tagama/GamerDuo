import { View, Text, ScrollView } from "react-native";
import { useStyle } from "../../style/style";

export function ProfileInfos({data}:any) {
  const { stylesTexts,stylesLogin } =useStyle()
  const subT= [stylesTexts.h3,{marginTop:10,marginBottom:5}]

  const platforms=["PlayStation","Xbox","PC","NintendoSwitch","Mobile"]
  const games=["R6","vava","COD","1","2"]

  return(
    <ScrollView key={null} style={{flex:1,width:'90%'}}>
      <Text style={subT}>Bio</Text>
      <Text style={stylesTexts.normal}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi fuga quibusdam voluptatum neque aut eaque? Aperiam, voluptates porro non nam consequuntur labore magni, rem facilis suscipit earum tenetur sint culpa?</Text>
      <Text style={subT}>Plataforma</Text>
      <View style={{flexDirection:"row",flexWrap:'wrap'}}>
        {platforms.map(i=><Text 
          style={{
            backgroundColor:stylesLogin.bt.backgroundColor,
            color:stylesLogin.btText.color,
            margin:2,padding:2,borderRadius:8
          }}> {i} </Text>)}
      </View>
      <Text style={subT}>Jogos</Text>
      <View style={{flexDirection:"row",flexWrap:'wrap'}}>
        {games.map(i=><Text 
          style={{
            backgroundColor:stylesLogin.bt.backgroundColor,
            color:stylesLogin.btText.color,
            margin:2,padding:2,borderRadius:8
          }}> {i} </Text>)}
      </View>
      <Text style={subT}>Fotos</Text>
    </ScrollView>
  )
}