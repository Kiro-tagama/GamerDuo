import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MenuInChat } from '../components/MenuInChat';
import { conversa } from '../api/fakeProfiles';
import { useRef } from 'react';
import { Mensagem } from '../components/chat/Mensagem';
import { InputInChat } from '../components/chat/InputInChat';

export function InChat() {
  const {params}=useRoute()

  const flatListRef = useRef()

  const scrollToBottom = () => {
    if (flatListRef.current) {
      //@ts-ignore
      flatListRef.current.scrollToEnd({ index: conversa.length - 1, animated: true });
    }
  };

  return(
    <View style={{flex:1,marginHorizontal:10}}>
      <MenuInChat 
      //@ts-ignore
      params={params}/>
      <View style={{flex:1}}>
        <FlatList
          //@ts-ignore
          ref={flatListRef}
          data={conversa}
          renderItem={({item}) => <Mensagem mensagem={item} user={1}/>}
          keyExtractor={(item) => item.horario}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={scrollToBottom}
        />
      </View>
      <InputInChat/>
    </View>
  )
}