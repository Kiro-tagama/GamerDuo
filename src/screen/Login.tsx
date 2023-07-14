import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { stylesLogin, stylesTexts } from '../style/style';
import { useLogin } from '../hooks/useLogin';
import { colors } from '../style/theme';

export function Login() {
  const {type, name, setName, email, setEmail,
    password, setPassword, handleLogin, handleType}=useLogin()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[stylesTexts.h1,{marginVertical:0}]}>Gamer Duo</Text>
      <Text style={stylesTexts.h2}>Bem-vindo</Text>
      <Text style={[stylesTexts.h2,{marginTop:40,marginBottom:20}]}>{type == 'login' ? "Login" : "Cadastro"}</Text>
      {type == 'login' ? null :
      <TextInput
        style={stylesLogin.input}
        placeholder="Nome"
        onChangeText={text => setName(text)}
        value={name}
        placeholderTextColor={colors.gray}
      />}
      <TextInput
        style={stylesLogin.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        placeholderTextColor={colors.gray}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
        placeholderTextColor={colors.gray}
      />
      <TouchableOpacity
        style={[stylesLogin.bt,{margin:30}]}
        onPress={handleLogin}
      >
        <Text style={[stylesTexts.h2,{color:colors.black}]}>{type == 'login' ? "Logar" : "Cadastrar"}</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={{marginTop:20}}
        onPress={handleType}
      >
        {type == 'login' ?
        <>
        <Text style={stylesTexts.normal}>Não tenho conta</Text>
        <Text style={[stylesTexts.normal,{textAlign:"center",textDecorationLine:"underline"}]}>Criar conta</Text>
        </>:
        <>
        <Text style={stylesTexts.normal}>Já tenho conta</Text>
        <Text style={[stylesTexts.normal,{textAlign:"center",textDecorationLine:"underline"}]}>Voltar ao login</Text>
        </>}
      </TouchableOpacity>
    </View>
  );
}

