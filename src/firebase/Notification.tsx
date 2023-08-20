import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { Firebase } from "./Firebase"
import { Auth } from "./Auth"
import * as expoNotifications from 'expo-notifications';

import { useState } from "react";

const db = getFirestore(Firebase)

expoNotifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function Notification() {
  const {user,setUser} = Auth()
  const [notfMatch,setNotfMatch]=useState<boolean>(false)

  const token = async ()=>(await expoNotifications.getExpoPushTokenAsync()).data
  console.log(token);

  async function validationToken() {
    if (user.expoToken != token) {
      await updateDoc(doc(db, "users", user.id), {chats:token})
      .then(() => console.log("set token: " + token))
      .catch((err) => console.log("err ao alterar token"));
    } 
  }

  function sendMatchNotification(params:string) {
    // pega token e o id do chat
    // envia a notificação
    expoNotifications.scheduleNotificationAsync({
      content:{
        //to: params,
        title: "Match!",
        body: "Você tem um novo match!",
        priority: "higt",
      },
      trigger: null,
    });
    // envia a notificação para o chat
  }
  
  function sendMenssageNotification(params:string) {
    // pega token e o id do chat and menssage
    // envia a notificação
    expoNotifications.scheduleNotificationAsync({
      content:{
        //to: params,
        title: "Match!",
        body: "Você tem um novo match!",
        priority: "higt",
      },
      trigger: null,
    })
    // envia a notificação para o chat
  }
  


  

  return {notfMatch,setNotfMatch,validationToken}
}