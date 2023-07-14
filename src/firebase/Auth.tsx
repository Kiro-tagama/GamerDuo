import { Firebase } from "./Firebase"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { addDoc, collection, doc, getDoc, getFirestore, } from 'firebase/firestore'
import { useState } from "react"

const auth = getAuth(Firebase)
const db = getFirestore(Firebase)

export function Auth() {
  const [user,setUser]=useState<any>()
  
  function createAcount(name:string,email:string,pass:string) {
    createUserWithEmailAndPassword(auth, email, pass)
    .then(async (user)=>{
    const data = user.user
    console.log(data)
    try{
      const docRef = await addDoc(collection(db, "users"),
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
      )
      console.log("Document written with ID: ", docRef.id)
    } catch(e){
      console.error(e)
    }
  })
  .catch((err)=>{
    console.log('err ao criar conta:')
    console.log(err.code)
    console.log(err.message)
    debugger
  })
}

 function loginAcount(email:string,pass:string) {
  signInWithEmailAndPassword(auth,email,pass)
  .then(async (user)=>{
    const data=user.user
    setUser(data.uid)
    // try {
    //   const getUser=await getDoc(doc(db, "users"))
    //   console.log(getUser.data());
    // } catch (e) {
      
    // }
  })
  .catch((err)=>{
    console.log('err ao logar conta:')
    console.log(err.code)
    console.log(err.message)
    debugger
  })
}

  return {loginAcount,createAcount,user}
}