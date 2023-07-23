import { Text, View, FlatList} from "react-native";
import { Menu } from "../components/menu/Menu";
import { useStyle } from "../style/style";
import { perfis } from '../api/fakeProfiles';
import { ChatCard } from "../components/chat/ChatCard";

export function Chat() {
  const { stylesTexts } =useStyle()
  return(
    <>
    <View style={{flex:1}}>
      <Text style={[stylesTexts.h1,{textAlign:'center',margin:10}]}>
        Chat
      </Text>
      <FlatList
        data={perfis}
        renderItem={({item}) =>{
          // @ts-ignore
          return <ChatCard perfil={item}/>
        }}
        keyExtractor={(item:any) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
    <Menu/>
    </>
  )
}