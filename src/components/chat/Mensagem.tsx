import { View,Text } from "react-native"
import { useStyle } from "../../style/style";
import { colors } from "../../style/theme";

interface PropsMensagem{
  mensagem:{
    id: number;
    mensagem: string;
    data: string;
    horario: string;
  },
  user:number
}

export function Mensagem({mensagem,user}:PropsMensagem) {
  const { stylesTexts, stylesChat } =useStyle()
  
  return(
    <View style={[
    stylesChat.mensagem,
    {
      marginLeft:user==mensagem.id?"auto":0,
      marginRight:user!=mensagem.id?"auto":0,
    }]}>
      <Text style={[stylesTexts.normal,{color:stylesChat.mensagem.color}]}>{mensagem.mensagem}</Text>
      <Text style={[stylesTexts.small,{marginLeft:'auto'}]}>{mensagem.horario}</Text>
    </View>
  )
}