import { useContext, useEffect, useRef, useState } from "react";

import { getFirestore,onSnapshot,doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Firebase } from "../firebase/Firebase";
import { useRoute } from "@react-navigation/native";
import { ContextArea } from "../firebase/ContextoProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllchats } from "../api/api";

export function useChat() {
  const {params}=useRoute()
  //@ts-ignore
  const {user}=useContext(ContextArea)

  const db = getFirestore(Firebase)
  useEffect(()=>{
    //@ts-ignore
    onSnapshot(doc(db, "chats", params.id), (doc) => {setConversa(doc.data())});
  },[])
  
  
  const flatListRef = useRef()
  const [conversa,setConversa]= useState()
  const [txt,setTxt]=useState('')
  
  const scrollToBottom = () => {
    if (flatListRef.current) {
      //@ts-ignore
      flatListRef.current.scrollToEnd({ index: conversa.length - 1, animated: true });
    }
  };

  async function sendMensagem() {
    if (txt.length<=0) return

    const data=new Date()
    const dia=[data.getDate(),data.getMonth(),data.getFullYear()]
    const hora=[data.getHours(),data.getMinutes() < 10? "0"+data.getMinutes() :data.getMinutes(),data.getSeconds()]

    //@ts-ignore
    await updateDoc(doc(db, "chats", params.id), {
      mensagem: arrayUnion({
        name:user.name,
        id:user.id,
        text:txt,
        date:dia,
        time:hora})
    }).then()
    .catch(e=>console.log(e))
    setTxt('')
  }

  return{flatListRef,conversa,scrollToBottom,txt,setTxt,sendMensagem}
}