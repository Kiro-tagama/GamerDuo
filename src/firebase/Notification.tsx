import { useState } from "react";

export function Notification() {
  const [notfMatch,setNotfMatch]=useState<boolean>(false)

  async function sendMatchNotification(ExpoToken:string) {
    // pega token e o id do chat
    // envia a notificação
    const message = {
      to: ExpoToken,
      sound: 'default',
      title: 'Novo Match',
      data: { someData: 'goes here' },
    };
  
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    // envia a notificação para o chat
  }
  
  async function sendMenssageNotification(data:any) {
    const message = {
      to: data.expoToken,
      sound: 'default',
      title: 'Mensagem de '+data.name ,
      body: data.text,
      data: { someData: 'goes here' },
    };
    
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }).catch(err => console.log(err))
  }
  
  return {notfMatch,setNotfMatch,sendMatchNotification,sendMenssageNotification}
}