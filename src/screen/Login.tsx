import { View,Text, TextInput, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { useStyle } from '../style/style';
import { useLogin } from '../hooks/useLogin';
import { colors } from '../style/theme';
import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import { ContextArea } from '../firebase/ContextoProvider';

export function Login() {
  const {type, name, setName, email, setEmail, anime, viewPass, setViewPass,
    password, setPassword, handleLogin, handleType}=useLogin()
  
  const { stylesLogin, stylesTexts } = useStyle()

  // @ts-ignore
  const {errLogin,setErrLogin} = useContext(ContextArea)

  const popUpErr= ()=>{
    return(
      <Modal
        transparent={true}
        visible={errLogin}
        animationType='slide'
      >
        <TouchableOpacity 
          style={{flex:1,justifyContent:'center',alignItems:"center",backgroundColor:"#2222228f"}} 
          onPress={()=>setErrLogin(false)}
        >
          <View
            style={[stylesLogin.bt,{width:"auto",height:"auto",padding:30}]}
          >
            <Text style={[stylesTexts.h2,{color:colors.red,marginBottom:10}]}>Erro ao {type == 'login' ? "logar":"cadastrar"}</Text>
            {type == 'login' ? 
              <Text style={stylesLogin.btText}>
                E-mail ou senha invalido
              </Text>
              :
              <>
                <Text style={stylesLogin.btText}>Coloque um E-mail valido</Text>
                <Text style={stylesLogin.btText}>A senha deve ter no mínimo 6 dígitos</Text>
              </>  
            }
            <TouchableOpacity
              style={{marginTop:20}}
              onPress={()=>setErrLogin(false)}
            >
              <Text style={stylesLogin.btText}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  return (
    <>
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
        keyboardType="email-address"
      />
      <View style={stylesLogin.input}>
        <TextInput
          style={{fontSize:20,color:stylesLogin.input.color,flex:1}}
          placeholder="Senha"
          textContentType='password'
          onChangeText={text => setPassword(text)}
          value={password}
          placeholderTextColor={colors.gray}
          secureTextEntry={viewPass}
        />
        <TouchableOpacity
          onPress={()=>setViewPass(!viewPass)}
          style={{marginLeft:5}}
        >
          {viewPass?
            <Feather name="eye" size={24} color={stylesLogin.input.color} />:
            <Feather name="eye-off" size={24} color={stylesLogin.input.color} />
          }
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[stylesLogin.bt,{margin:30}]}
        onPress={handleLogin}
      >
        {anime? <ActivityIndicator size="large" color={stylesLogin.btText.color}/>:
        <Text style={[stylesTexts.h2,stylesLogin.btText]}>{type == 'login' ? "Logar" : "Cadastrar"}</Text>}
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
    {popUpErr()}
    </>
  );
}

