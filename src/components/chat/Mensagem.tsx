import { View,Text } from "react-native"
import { stylesTexts } from "../../style/style";
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
  return(
    <View style={{
      backgroundColor:colors.white,marginVertical:5,padding:5,borderRadius:10,maxWidth:"90%",
      marginLeft:user==mensagem.id?"auto":0,
      marginRight:user!=mensagem.id?"auto":0,
    }}>
      <Text style={[stylesTexts.normal,{color:colors.black}]}>{mensagem.mensagem}</Text>
      <Text style={[stylesTexts.small,{marginLeft:'auto'}]}>{mensagem.horario}</Text>
    </View>
  )
}