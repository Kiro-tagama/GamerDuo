import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Menu } from "../components/Menu";
import { stylesTexts } from "../style/style";
import { perfis } from '../api/fakeProfiles';

export function Chat() {

  function CardChat(){
    return(
      <TouchableOpacity
        style={{}}
      >
        <Text style={stylesTexts.normal}>oi</Text>
      </TouchableOpacity>
    )
  }

  return(
    <>
    <View>
      <Text style={stylesTexts.h1}>Chat</Text>
      <FlatList
        data={perfis}
        renderItem={({item}) => <CardChat/>}
        keyExtractor={item => item.id}
      />
    </View>
    <Menu/>
    </>
  )
}