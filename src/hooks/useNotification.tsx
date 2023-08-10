import {useState} from "react"
import { setNotificationHandler, scheduleNotificationAsync, AndroidImportance } from "expo-notifications";

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export function useNotification() {
  const [notif,setNotif]= useState<number>(0)

  async function sendMatchNotification() {
    await scheduleNotificationAsync({
      content:{
        title:"Match",
        body: "Você acabou de dar <strong>Match!!</strong>",
        priority: AndroidImportance.HIGH,
      },
      trigger:null,
    })
    .then(()=>{})
    .catch(err=>console.log(err))
  }

  async function sendMensagemNotificarion() {
    await scheduleNotificationAsync({
      content:{
        title:"Mensagem",
        body: "<div><h2>Nome</h2><p>mensagem...</p></div>"
      },
      trigger:null,
    })
    .then(()=>{})
    .catch(err=>console.log(err))
  }

  return {sendMatchNotification,sendMensagemNotificarion}
}