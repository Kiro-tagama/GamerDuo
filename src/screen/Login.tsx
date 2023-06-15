import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('Login realizado com sucesso!');
  };

  const handleSignUp = () => {
    // Navegar para a tela de cadastro
    console.log('Navegar para a tela de cadastro');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bem-vindo</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Login</Text>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginBottom: 10 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Logar</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20 }}>Não tenho conta</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5 }}
        onPress={handleSignUp}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

