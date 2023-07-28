import { addDoc, arrayUnion, collection, doc, getFirestore, setDoc, updateDoc } from "firebase/firestore"
import { Firebase } from "./Firebase"
import { Auth } from "./Auth"
import { getUser } from "../api/api";

const db = getFirestore(Firebase)

interface infoCard{
  id: string;
  nome: string;
  img: string;
  agentFav: number;
}

export function Match() {
  const {user} = Auth()

  async function like(i:infoCard) {
    await updateDoc(doc(db,"users", user.id),{
      matchs: arrayUnion(i.id)
    })
    .then(()=>{
      console.log('like\n',i.id)
    })
    .catch((err)=>console.log(err))
    
    //@ts-ignore
    setTimeout(()=>{createChat(i)}, 1500)
    // caso os dois usuarios criem ao mesmo tempo tem um delei de verificação
  }

  async function noLike(i:infoCard) {
    await updateDoc(doc(db,"users", user.id),{
      desmatchs: arrayUnion(i.id)
    })
    .then(()=>console.log('deslike\n',i.id))
    .catch((err)=>console.log(err))
  }

  async function createChat(i:infoCard) {
    const user1 = await getUser(user.id) //usuario local
    const user2 = await getUser(i.id)    //usuario passado pelo like

    if(user1.matchs.includes(user2.id) && user2.matchs.includes(user1.id) ){
      // cria o chat
      try {
        const docRef = await addDoc(collection(db, "chats"), {
          names:[
            {id:user1.id,name:user1.name,img:user1.img},
            {id:user2.id,name:user2.name,img:user2.img}
          ],
          mensagem:[]
        });
        await updateDoc(doc(db, "users", user1.id), {chats:arrayUnion(docRef.id)})
        await updateDoc(doc(db, "users", user2.id), {chats:arrayUnion(docRef.id)})
        await updateDoc(doc(db, "chats", docRef.id), {id:docRef.id})

        return console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        return console.error("Error adding document: ", e);
      }
    }

    return
  }

  return{like,noLike}
}