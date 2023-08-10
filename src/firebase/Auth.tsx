import { Firebase } from "./Firebase"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useEffect, useState } from "react"

import AsyncStorage from '@react-native-async-storage/async-storage';
import { delUser } from "../api/api";

const auth = getAuth(Firebase)
const db = getFirestore(Firebase)

export function Auth() {
  const [user,setUser]=useState<any>()
  const [errLogin,setErrLogin]=useState(false)

  useEffect(()=>{
    async function StoregeUser() {
      const storageUser = await AsyncStorage.getItem("dataUser")
      storageUser ? setUser(JSON.parse(storageUser)) : null
    }
    StoregeUser()
  },[])
  
  function createAcount(name:string,email:string,pass:string) {
    createUserWithEmailAndPassword(auth, email, pass)
    .then(async (user)=>{
    const data = user.user
    console.log(data.uid);
      try{
        const userRef = doc(collection(db, "users"), data.uid)
        await setDoc(userRef,
          {
            id:data.uid,
            name:name,
            email:email,
            img:'https://cdn-icons-png.flaticon.com/512/1177/1177568.png',
            matchs:[],
            desmatchs:[],
            chats:[],
          }
        ).then(()=>loginAcount(email,pass))
      } catch(e){
        console.error(e)
      }
    })
    .catch((err)=>{
      setErrLogin(true)
      console.log('err ao criar conta:')
      console.log(err.code)
      console.log(err.message)
      return
    })
  }

  function loginAcount(email:string,pass:string) {
    signInWithEmailAndPassword(auth,email,pass)
    .then(async (user)=>{
      const data=user.user
      try {
        const userDoc = await getDoc(doc(db, "users", data.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          await AsyncStorage.setItem("dataUser", JSON.stringify(userData))
          setUser(userData)
        } else {
          console.log("Usuário não encontrado no Firestore");
        }
      } catch (e) {
        console.error(e)
      }
    })
    .catch((err)=>{
      setErrLogin(true)
      console.log('err ao logar conta:')
      console.log(err.code)
      console.log(err.message)
      return
    })
  }

  async function deslog() {
    await signOut(auth)
  
    await AsyncStorage.clear()
    .then(()=>{
      setUser(null)
    })
    .catch(err=>console.log(err))
    
    console.log('saiu');
  }

  async function deleteMe() {
    await delUser(user.id)
    await signOut(auth)
    await AsyncStorage.clear()
    .then(()=>{
      setUser(null)
    })
  }

  return {loginAcount,createAcount,deslog,deleteMe,user,setUser,errLogin,setErrLogin}
}