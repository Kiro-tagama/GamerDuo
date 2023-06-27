import { Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { colors, stylesChat, stylesTexts } from '../style/style';
import useMenu from '../hooks/useMenu';
import { AntDesign } from '@expo/vector-icons';

interface PropsParams{
  params:{
    id: number;
    nome: string;
    img: string;
    agentFav: number;
  }
}


export function MenuInChat({params}:PropsParams){
  const {nav} =useMenu()

  return(
    <View style={stylesChat.base}>
      <TouchableHighlight
        onPress={()=>nav.goBack()}
        style={stylesChat.bt}
        underlayColor={colors.white}
      >
        <AntDesign name="left" size={24} color={colors.white} style={{marginRight:5}}/>
      </TouchableHighlight>
      <Text style={stylesTexts.normal}>{params.nome}</Text>
      <TouchableOpacity
        // @ts-ignore 
        onPress={()=>nav.navigate('profile',params)}
      >
        <Image
          source={{uri:params.img}}
          style={{width:50,height:50,borderRadius:30}}
        />
      </TouchableOpacity>
    </View>
  )
}