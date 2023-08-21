import { Text, View, FlatList} from "react-native";
import { Menu } from "../components/menu/Menu";
import { useStyle } from "../style/style";
import { ChatCard } from "../components/chat/ChatCard";
import { useContext, useEffect, useState } from "react";
import { ContextArea } from "../firebase/ContextoProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllchats } from "../api/api";

export function Chat() {
  const { stylesTexts } =useStyle()

  //@ts-ignore
  const {user}=useContext(ContextArea)
  const [chats,setChats]=useState<any|null>(null)

  useEffect(()=>{
    async function getChats() {
      setChats(AsyncStorage.getItem("dataUser"))
      
      const dataChats=await getAllchats(user.id)
      setChats(dataChats)
      await AsyncStorage.setItem("dataChats", JSON.stringify(dataChats))
    }
    getChats()
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
        renderItem={({item}) =><ChatCard perfil={item}/>}
        keyExtractor={(item:any) => item.id}
        showsVerticalScrollIndicator={false}
        />
      }
    </View>
    <Menu/>
    </>
  )
}