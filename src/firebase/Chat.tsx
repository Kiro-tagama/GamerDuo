import { collection, doc, getFirestore, onSnapshot, query } from "firebase/firestore"
import { Firebase } from "./Firebase"
import { useEffect, useState } from "react"

const db = getFirestore(Firebase)

export function Chat() {

  function getMensagens(chatId:string) {
    const chatRef = doc(db, 'chats', chatId);
    const messagesQuery = query(collection(chatRef, 'mensagens'));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const mensagens = snapshot.docs.map((doc) => doc.data());
      return mensagens
    });
    
  }

  return {getMensagens}
}