import {useContext, useState} from "react"
import { TouchableOpacity } from "react-native";
import { Modal, Image, View, Text} from "react-native";
import { useStyle } from "../style/style";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../style/theme";
import { LinearGradient } from "expo-linear-gradient";
import { ContextArea } from "../firebase/ContextoProvider";
import { useNavigation } from "@react-navigation/native";

export function useNotification() {
  const [notif,setNotif]= useState<number>(0)

  const [modal,setModal]= useState<boolean>(false)
  const [matchData,setMatchData]= useState({
    img:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    chatID:"fsdfdsfsdfsffdfsfs"
  }) 

  function NotificationModal() {
    // @ts-ignore
    const {user}=useContext(ContextArea)
    const {stylesTexts,stylesMenu}=useStyle()
    const nav= useNavigation()

    return(
      <Modal
        visible={modal}
      > 
        <Image
          source={{uri:matchData.img}}
          style={{flex:1}}
        />
        {user?<Image
          source={{uri:user.img}}
          style={{flex:1}}
        />:null}
        <View style={{position:"absolute",height:'100%',width:"100%",justifyContent:'space-between',flexDirection:"column",alignItems:"center"}}>
          <LinearGradient
            colors={[colors.black,"transparent"]}
            style={{justifyContent:'center',alignItems:'center',width:"100%",height:80}}
          >
            <Text style={[stylesTexts.h1,{color:colors.white}]}>Seu Duo</Text>
          </LinearGradient>

          <LinearGradient
            colors={["transparent",colors.black,"transparent"]}
            style={{justifyContent:'center',alignItems:'center',width:"100%",height:80*2}}
          >
            <TouchableOpacity
              style={[stylesMenu.opt,{justifyContent:"center",alignItems:"center",paddingHorizontal:20,backgroundColor:"#222c"}]}
              onPress={()=>{
                setModal(false)
                //@ts-ignore
                //nav.navigate('inChat',passar os dados)
              }}
            >
              <FontAwesome name="hand-spock-o" size={24} color={colors.white} />
              <Text style={[stylesTexts.h3,{color:colors.white}]}>Diga Olá!!</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["transparent",colors.black]}
            style={{justifyContent:'center',alignItems:'center',width:"100%",height:80}}
          >
            <TouchableOpacity onPress={()=>setModal(false)}>
              <Text style={[stylesTexts.h3,{color:colors.white}]}>Fechar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    )  
  }

  return {NotificationModal}
}