import { useState } from "react";

export function useLogin() {
  const [type, setType] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(type=='login'){
      console.log('logar');
    }else{
      console.log('cadartra');
    }
  };

  const handleType = () => {
    if(type=='login'){
      setType('cadastra')
    }else{
      setType('login')
    }
  }

  return {
    type,
    name, setName,
    email, setEmail,
    password, setPassword,
    handleLogin, handleType
  }
}