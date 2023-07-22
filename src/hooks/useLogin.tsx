import { useContext, useState } from "react";
import { ContextArea } from "../firebase/ContextoProvider";

export function useLogin() {
  // @ts-ignore
  const {createAcount,loginAcount}=useContext(ContextArea)

  const [type, setType] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [anime, setAnime] = useState(false)
  const [viewPass, setViewPass] = useState(true)

  function handleLogin(){
    if (type == 'login') {
      console.log('logar');
      setAnime(true)
        loginAcount(email,password)
      setAnime(false)
    } else {
      console.log('cadastra');
      setAnime(true)
        createAcount(name,email,password)
      setAnime(false)
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
    handleLogin, handleType,
    anime,
    viewPass, setViewPass
  }
}