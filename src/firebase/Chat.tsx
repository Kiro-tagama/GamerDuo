import { collection, doc, getFirestore, onSnapshot, query } from "firebase/firestore"
import { Firebase } from "./Firebase"
import { useEffect, useState } from "react"

const db = getFirestore(Firebase)

export function Chat() {

  function getMensagens(chatId:string) {
    // Referência ao documento do chat no Firestore
    const chatRef = doc(db, 'chats', chatId);

    // Query para obter as mensagens do chat específico, ordenadas por timestamp
    const messagesQuery = query(collection(chatRef, 'mensagens'));

    // Evento para receber atualizações em tempo real das mensagens do chat específico
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const mensagens = snapshot.docs.map((doc) => doc.data());
      // Atualize a interface com as mensagens recebidas em tempo real do chat específico
      return mensagens
    });
    
  }

  return {getMensagens}
}