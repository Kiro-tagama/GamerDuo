import { View, Text, ScrollView } from "react-native";
import { useStyle } from "../../style/style";

export function ProfileInfos({data}:any) {
  const { stylesTexts,stylesLogin } =useStyle()
  const subT= [stylesTexts.h3,{marginTop:10,marginBottom:5}]

  return(
    <ScrollView key={1} style={{flex:1,width:'90%'}}>
      <Text style={subT}>Bio</Text>
      <Text style={stylesTexts.normal}>{data.bio ||null}</Text>
      <Text style={subT}>Plataforma</Text>
      <View style={{flexDirection:"row",flexWrap:'wrap'}}>
        {
          Object.keys(data.platforms)
          .filter(item => data.platforms[item])
          .map(i=>
            <Text 
            style={{
              backgroundColor:stylesLogin.bt.backgroundColor,
              color:stylesLogin.btText.color,
              margin:2,padding:2,borderRadius:8
            }}> {i} </Text>
        )}
      </View>
      <Text style={subT}>Jogos</Text>
      <View style={{flexDirection:"row",flexWrap:'wrap'}}>
        {
          Object.keys(data.games)
          .filter(item => data.games[item])
          .map(i=>
            <Text 
            style={{
              backgroundColor:stylesLogin.bt.backgroundColor,
              color:stylesLogin.btText.color,
              margin:2,padding:2,borderRadius:8
            }}> {i} </Text>
          )}
      </View>
      {/* <Text style={subT}>Fotos</Text> */}
    </ScrollView>
  )
}