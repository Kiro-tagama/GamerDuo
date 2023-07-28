import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MenuInChat } from '../components/chat/MenuInChat';
import { Mensagem } from '../components/chat/Mensagem';
import { InputInChat } from '../components/chat/InputInChat';
import { useChat } from '../hooks/useChat';

export function InChat() {
  const {flatListRef,conversa,scrollToBottom}=useChat()
  const {params}=useRoute()

  return(
    <View style={{flex:1,marginHorizontal:10}}>
      <MenuInChat 
      //@ts-ignore
      params={params.data}/>
      <View style={{flex:1}}>
        <FlatList
          //@ts-ignore
          ref={flatListRef}
          data={conversa}
          renderItem={({item}) => <Mensagem mensagem={item} user={1}/>}
          //keyExtractor={(item) => item.horario}
          showsVerticalScrollIndicator={false}
          //onContentSizeChange={scrollToBottom}
        />
      </View>
      <InputInChat/>
    </View>
  )
}