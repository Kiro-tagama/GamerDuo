import { useState } from "react";
import { mainProfile } from "../api/fakeProfiles";

export function useLogin() {
  
  const [type, setType] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user,setUser]=useState<any>(mainProfile[0])

  function handleLogin(){
    if (type == 'login') {
      console.log('logar');
      {email=="0"?setUser(mainProfile[0]):setUser(mainProfile[1])}

    } else {
      console.log('cadartra');
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