import { TouchableHighlight,TouchableOpacity, View, Image, Text, Modal } from "react-native";
import { Feather, MaterialIcons, Octicons } from '@expo/vector-icons';
import useMenu from "../../hooks/useMenu";
import { useContext, useEffect, useState } from "react";
import { ContextArea } from "../../firebase/ContextoProvider";
import { useStyle } from "../../style/style";
import { EditPerfil } from "../../screen/EditPerfil";

export function MenuOptions() {
  const {page,active,nav} = useMenu()
  // @ts-ignore
  const {user,deslog}=useContext(ContextArea)
  const { stylesMenu } = useStyle()

  const [modal,setModal]=useState(false)
  
  // @ts-ignore
  useEffect(()=>{page != "profile" ? setModal(false):null},[])

  const colorActive={
    dark:stylesMenu.active.backgroundColor,
    ligth:"#eee"
  }

  return(
    <>
    <View style={stylesMenu.opt}>
      <TouchableHighlight
        style={[stylesMenu.opts,
          /* @ts-ignore */
        page == "home" ? active : null]}
        onPress={() => {
          /* @ts-ignore */
          nav.navigate('home');
        } }
      >
        <Feather name="layers" size={30} color={/* @ts-ignore */
        page == 'home' ? colorActive.dark : colorActive.ligth} />
      </TouchableHighlight>

      <TouchableHighlight
        style={[stylesMenu.opts,
          /* @ts-ignore */
        page == "chat" ? active : null]}
        onPress={() => {
          /* @ts-ignore */
          nav.navigate('chat');
        } }
      >
        <Feather name="message-circle" size={30} color={/* @ts-ignore */
        page == 'chat' ? colorActive.dark : colorActive.ligth} />
      </TouchableHighlight>


      <TouchableHighlight
        style={[stylesMenu.opts,
        /* @ts-ignore */
        page == "profile" ? active : null]}
        onPress={() => {
          if (modal == true) {
            return setModal(false)
          }
          /* @ts-ignore */
          nav.navigate('profile');
        }}
        onLongPress={()=>{
          /* @ts-ignore */
          if (page != "profile") return 
          setModal(true)
        }}
      >

        {user.img ?
          <Image
            style={{ width: '90%', height: '90%', borderRadius: 30 }}
            source={{ uri: user.img }} />
          :
          <Feather name="user" size={30} color={/* @ts-ignore */
          page == "profile" ? colorActive.dark : colorActive.ligth} />
        }
      </TouchableHighlight>
    </View>

    <Modal
      transparent={true}
      visible={modal}
      animationType='fade'
    >
      <TouchableOpacity 
        style={{flex:1,justifyContent:'flex-end',paddingBottom:75}} 
        onPress={()=>setModal(false)}>
          <View style={{gap:10,padding:10,flexDirection:'row',justifyContent:'center',marginLeft:'auto',width:"74%"}}>
            <TouchableOpacity 
              style={[stylesMenu.opts,{backgroundColor:stylesMenu.active.color}]}
              onPress={()=>{
                /* @ts-ignore */
                nav.navigate( 'EditPerfil' )}}
            >
              <Octicons name="gear" size={24} color={stylesMenu.active.backgroundColor} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[stylesMenu.opts,{backgroundColor:stylesMenu.active.color}]}
              onPress={()=>{
                /* @ts-ignore */
                nav.navigate( 'infoApp' )}}
            >
              <Feather name="info" size={24} color={stylesMenu.active.backgroundColor} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[stylesMenu.opts,{backgroundColor:stylesMenu.active.color}]}
              onPress={()=>{deslog()}}
            >
              <MaterialIcons name="logout" size={24} color="red" />
            </TouchableOpacity>
            
          </View>
      </TouchableOpacity>
    </Modal>
    </>
  )
}