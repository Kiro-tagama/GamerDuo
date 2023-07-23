import { Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import useMenu from '../../hooks/useMenu';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../style/theme';
import { useStyle } from '../../style/style';

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
  const { stylesChat, stylesTexts } = useStyle()

  return(
    <View style={stylesChat.base}>
      <TouchableHighlight
        onPress={()=>nav.goBack()}
        style={stylesChat.bt}
        underlayColor={stylesChat.base.color}
      >
        <AntDesign name="left" size={24} color={stylesChat.base.color} style={{marginRight:5}}/>
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