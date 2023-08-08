import {useState} from "react"
import { setNotificationHandler, scheduleNotificationAsync } from "expo-notifications";

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export function useNotification() {
  const [notif,setNotif]= useState<number>(0)

  async function sendMatchNotification(id:string) {
    try {
      await scheduleNotificationAsync({
        content:{
          titulo:"Match",
          body: "Você acabou de dar <string>Matvh!!</strong>"
        },
        to:id,
        trigger:null
      })
    } catch (error) {
      
    }
  }
}