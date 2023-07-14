import { Firebase } from "./Firebase"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(Firebase)

export function createAcount(name:string,email:string,pass:string) {
  createUserWithEmailAndPassword(auth, email, pass)
  .then((user)=>{
    const data = user.user;
    console.log(data);
    //conect a db
    
  })
  .catch((err)=>{
    console.log('err ao criar conta:')
    console.log(err.code)
    console.log(err.message)
    debugger
  })
}

export function loginAcount(email:string,pass:string) {
  signInWithEmailAndPassword(auth,email,pass)
  .then((user)=>{
    const login=user.user
  })
  .catch((err)=>{
    console.log('err ao logar conta:')
    console.log(err.code)
    console.log(err.message)
    debugger
  })
}