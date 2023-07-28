import { useContext, useEffect, useRef, useState } from "react";

import { getFirestore,onSnapshot,doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Firebase } from "../firebase/Firebase";
import { useRoute } from "@react-navigation/native";
import { ContextArea } from "../firebase/ContextoProvider";

export function useChat() {
  const {params}=useRoute()
  //@ts-ignore
  const {user}=useContext(ContextArea)
  
  const flatListRef = useRef()
  const [conversa,setConversa]= useState()
  const [txt,setTxt]=useState('')
  
  const scrollToBottom = () => {
    if (flatListRef.current) {
      //@ts-ignore
      flatListRef.current.scrollToEnd({ index: conversa.length - 1, animated: true });
    }
  };

  const db = getFirestore(Firebase)
  useEffect(()=>{
      //@ts-ignore
    onSnapshot(doc(db, "chats", params.id), (doc) => {
      //@ts-ignore
      setConversa(doc.data())
    });
  },[])

  async function sendMensagem() {
    const data=new Date()
    const dia=[data.getDate(),data.getMonth(),data.getFullYear()]
    const hora=[data.getHours(),data.getMinutes(),data.getSeconds()]

    if (txt.length>=1) {
      //@ts-ignore
      await updateDoc(doc(db, "chats", params.id), {
        mensagem: arrayUnion({
          name:user.name,
          text:txt,
          date:dia,
          time:hora})
      })
    }
  }

  return{flatListRef,conversa,scrollToBottom,txt,setTxt,sendMensagem}
}