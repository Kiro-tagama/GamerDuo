import { View,Text } from "react-native"
import { useStyle } from "../../style/style";
import { useContext } from "react";
import { ContextArea } from "../../firebase/ContextoProvider";

interface PropsMensagem{
  mensagem:{
    id:string,
    name:string,
    text:string,
    date:[],
    time:any[]
  }
}

export function Mensagem({mensagem}:PropsMensagem) {
  //@ts-ignore
  const {user}=useContext(ContextArea)
  const { stylesTexts, stylesChat } =useStyle()
  
  return(
    <View style={[
    stylesChat.mensagem,
    {
      marginLeft:user.id==mensagem.id?"auto":0,
      marginRight:user.id!=mensagem.id?"auto":0,
    }]}>
      <Text style={[stylesTexts.normal,{color:stylesChat.mensagem.color}]}>{mensagem.text}</Text>
      <Text style={[stylesTexts.small,{marginLeft:'auto'}]}>{mensagem.time[0]}:{mensagem.time[1]}</Text>
    </View>
  )
}