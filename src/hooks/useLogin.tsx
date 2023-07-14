import { useContext, useState } from "react";
import { mainProfile } from "../api/fakeProfiles";
import { ContextArea } from "../firebase/ContextoProvider";
import { createAcount } from "../firebase/useAuth";

export function useLogin() {
  
  const [type, setType] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [user,setUser]=useState<any>(mainProfile[0])

  function handleLogin(){
    if (type == 'login') {
      console.log('logar');
    } else {
      console.log('cadartra');
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
    type, user,
    name, setName,
    email, setEmail,
    password, setPassword,
    handleLogin, handleType
  }
}