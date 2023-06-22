import { Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { colors, stylesHome, stylesLogin, stylesMenu, stylesTexts } from '../style/style';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import useMenu from '../hooks/useMenu';

export function InChat() {
  const {nav}=useMenu()
  const [name,setName]=useState<string>()
  const {params}=useRoute()
  
  return(
    <View style={{flex:1,alignItems:'center',padding:10,margin:5}}>
      <View style={{width:'100%',flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',alignItems:'center'}}>
        <TouchableHighlight
          onPress={()=>nav.goBack()}
          style={{borderColor:colors.white,borderWidth:.5}}
          underlayColor={colors.white}
        >
          <Text style={stylesTexts.normal}> {"<"} </Text>
        </TouchableHighlight>
        <Text style={stylesTexts.normal}>{params.nome}</Text>
        <TouchableOpacity>
          <Image
            source={{uri:params.img}}
            style={{width:50,height:50,}}
          />
        </TouchableOpacity>
      </View>

      {/* mensagens */}
      <View style={{flex:1}}></View>

      <View style={[{width:'100%',flexDirection:'row',padding:10,justifyContent:'space-between',alignItems:'center'},stylesLogin.input]}>
        <TextInput
          style={{fontSize:20,color:colors.white,flex:1,marginRight:10}}
          placeholder="Nome"
          onChangeText={(text:string) => setName(text)}
          value={name}
          placeholderTextColor={colors.gray}
        />
        <TouchableHighlight
          style={{borderColor:colors.white,borderWidth:.5}}
          underlayColor={colors.white}
        >
          <Text style={stylesTexts.normal}> {">"} </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}