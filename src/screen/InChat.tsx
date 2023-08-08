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
      <View style={{flex:1,flexDirection:"row",alignItems:"flex-end"}}>
        {//@ts-ignore
        conversa != undefined && conversa.mensagem.length != 0 ?  
          <FlatList
            //@ts-ignore
            ref={flatListRef}
            //@ts-ignore
            data={conversa.mensagem}
            renderItem={({item}) => <Mensagem mensagem={item}/>}
            // definindo o horario da mensagem como id chave [0]H,[1]Min,[2]Seg
            keyExtractor={(item) => item.time[0].toString()+item.time[1].toString()+item.time[2].toString()}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={scrollToBottom}
          /> : null 
        }
      </View>
      <InputInChat/>
    </View>
  )
}