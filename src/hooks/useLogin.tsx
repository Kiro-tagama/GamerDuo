import { useContext, useState } from "react";
import { ContextArea } from "../firebase/ContextoProvider";

export function useLogin() {
  // @ts-ignore
  const {createAcount,loginAcount}=useContext(ContextArea)

  const [type, setType] = useState<'login'|'cadastra'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [anime, setAnime] = useState<boolean>(false)
  const [viewPass, setViewPass] = useState<boolean>(true)

  async function handleLogin(){
    setAnime(true)
    {type == 'login' ? 
      await loginAcount(email,password):
      await createAcount(name,email,password)
    }
    setTimeout(()=>{setAnime(false)},2000)
  }

  function handleType (){
    {type == 'login' ?
      setType('cadastra'):
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