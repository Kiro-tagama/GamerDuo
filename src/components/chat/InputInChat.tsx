import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import { useStyle } from '../../style/style';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../style/theme';
import { useChat } from '../../hooks/useChat';

export function InputInChat() {
  const { stylesChat, stylesTexts } = useStyle()
  const {txt,setTxt,sendMensagem}= useChat()

  return(
    <View style={stylesChat.base}>
      <TextInput
        style={[stylesTexts.normal,{flex:1,marginHorizontal:10}]}
        placeholder="Nome"
        onChangeText={(text:string) => setTxt(text)}
        value={txt}
        placeholderTextColor={colors.gray}
      />
      <TouchableHighlight
        onPress={()=>sendMensagem}
        style={stylesChat.bt}
        underlayColor={stylesChat.base.color}
      >
        <Feather name="send" size={25} color={stylesChat.base.color} style={{marginTop:2,marginRight:2}} />
      </TouchableHighlight>
    </View>
  )
}