import { Firebase } from "./Firebase"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useState } from "react"

const auth = getAuth(Firebase)
const db = getFirestore(Firebase)

export function Auth() {
  const [user,setUser]=useState<any>()
  
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
        )
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
          setUser(userData); // Atualize sua função setUser para definir os dados do usuário
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

  return {loginAcount,createAcount,user}
}