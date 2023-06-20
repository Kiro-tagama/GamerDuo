import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export function InChat() {
  return(
    <View style={{flex:1}}>
      <View>
        <TouchableOpacity>
          <Text> {"<"} </Text>
        </TouchableOpacity>
        <Text>Name</Text>
        <TouchableOpacity>
          <Text>P</Text>
        </TouchableOpacity>
      </View>

      {/* mensagens */}

      <View>
        <TextInput
          style={stylesLogin.input}
          placeholder="Nome"
          onChangeText={text => setName(text)}
          value={name}
          placeholderTextColor={colors.gray}
        />
        <TouchableOpacity>
          <Text> {">"} </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}