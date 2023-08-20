import { Text, View, FlatList} from "react-native";
import { Menu } from "../components/menu/Menu";
import { useStyle } from "../style/style";
import { ChatCard } from "../components/chat/ChatCard";
import { useChat } from "../hooks/useChat";

export function Chat() {
  const { stylesTexts } =useStyle()
  const {chats} =useChat()

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