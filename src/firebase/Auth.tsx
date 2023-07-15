import { Firebase } from "./Firebase"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useEffect, useState } from "react"

import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = getAuth(Firebase)
const db = getFirestore(Firebase)

export function Auth() {
  const [user,setUser]=useState<any>()

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
        const docRef = await setDoc(userRef,
          {
            id:data.uid,
            name:name,
            email:email,
            img:'',
            profilesValorant:[],
            matchs:[],
            consoles:[
              {"id":0,"consta":false,"name":"pc"},
              {"id":1,"consta":false,"name":"xbox"},
              {"id":3,"consta":false,"name":"psn"},
            ]
          }
        ).then(()=>loginAcount(email,pass))
      } catch(e){
        console.error(e)
      }
    })
    .catch((err)=>{
      console.log('err ao criar conta:')
      console.log(err.code)
      console.log(err.message)
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
      console.log('err ao logar conta:')
      console.log(err.code)
      console.log(err.message)
      debugger
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

  return {loginAcount,createAcount,deslog,user}
}