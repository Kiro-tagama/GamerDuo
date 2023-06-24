import { Text, View, FlatList} from "react-native";
import { Menu } from "../components/Menu";
import { stylesTexts } from "../style/style";
import { perfis } from '../api/fakeProfiles';
import { CardChat } from "../components/CardChat";

export function Chat() {

  return(
    <>
    <View style={{flex:1}}>
      <Text style={[stylesTexts.h1,{textAlign:'center',margin:10}]}>
        Chat
      </Text>
      <FlatList
        data={perfis}
        renderItem={({item}) => <CardChat perfil={item}/>}
        keyExtractor={(item:any) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
    <Menu/>
    </>
  )
}