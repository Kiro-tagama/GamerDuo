import { useContext, useState } from "react";
import { ContextArea } from "../firebase/ContextoProvider";

export function useLogin() {
  const {createAcount,loginAcount}=useContext(ContextArea)

  const [type, setType] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
    if (type == 'login') {
      console.log('logar');
      loginAcount(email,password)
    } else {
      console.log('cadastra');
      createAcount(name,email,password)
    }
  }

  function handleType (){
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