import { getFirestore } from "firebase/firestore"
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

export async function Notification() {
  const {user,setUser} = Auth()
  const [notfMatch,setNotfMatch]=useState<boolean>(false)

  const token = (await expoNotifications.getExpoPushTokenAsync()).data
  console.log(token);
  
  


  

  return {notfMatch,setNotfMatch}
}