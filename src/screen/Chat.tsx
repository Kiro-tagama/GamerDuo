import { Text, View, FlatList, ActivityIndicator} from "react-native";
import { Menu } from "../components/menu/Menu";
import { useStyle } from "../style/style";
import { perfis } from '../api/fakeProfiles';
import { ChatCard } from "../components/chat/ChatCard";
import { useState, useEffect, useContext } from "react";
import { getAllchats } from "../api/api";
import { ContextArea } from "../firebase/ContextoProvider";

export function Chat() {
  //@ts-ignore
  const {user}=useContext(ContextArea)
  const { stylesTexts } =useStyle()
  const [chats,setChats]=useState<any|null>(null)

  useEffect(()=>{
    async function name() {
      setChats(await getAllchats(user.id))
    }
    name()
  },[])

  return(
    <>
    <View style={{flex:1}}>
      <Text style={[stylesTexts.h1,{textAlign:'center',margin:10}]}>
        Chat
      </Text>
      {chats==null?
        <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
          <Text style={stylesTexts.normal}>Calma, daqui a pouco aparece alguém</Text>
        </View>
        :
        <FlatList
        data={chats}
        renderItem={({item}) =>{
          // @ts-ignore
          return <ChatCard perfil={item}/>
        }}
        keyExtractor={(item:any) => item.id}
        showsVerticalScrollIndicator={false}
        />
      }
    </View>
    <Menu/>
    </>
  )
}