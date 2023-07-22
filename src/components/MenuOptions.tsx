import { TouchableHighlight,TouchableOpacity, View, Image, Text, Modal } from "react-native";
import { stylesMenu } from "../style/style";
import { Feather, MaterialIcons, Octicons } from '@expo/vector-icons';
import useMenu from "../hooks/useMenu";
import { useContext, useState } from "react";
import { ContextArea } from "../firebase/ContextoProvider";

export function MenuOptions() {
  const {page,active,nav} = useMenu()
  // @ts-ignore
  const {user,deslog}=useContext(ContextArea)
  const [modal,setModal]=useState(false)

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
        page == 'home' ? "#222" : "#eeeeeecc"} />
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
        page == 'chat' ? "#222" : "#eeeeeecc"} />
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
          page == "profile" ? "#222" : "#eeeeeecc"} />
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
              style={[stylesMenu.opts,{backgroundColor:"#eee"}]}
              onPress={()=>{/*page edition or modal edition app*/ }}
            >
              <Octicons name="gear" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[stylesMenu.opts,{backgroundColor:"#eee"}]}
              onPress={()=>{/*page info or modal info app*/ }}
            >
              <Feather name="info" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[stylesMenu.opts,{backgroundColor:"#eee"}]}
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