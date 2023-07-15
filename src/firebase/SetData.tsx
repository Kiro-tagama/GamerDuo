import { getFirestore } from "firebase/firestore"
import { Firebase } from "./Firebase"
import { Auth } from "./Auth"

const db = getFirestore(Firebase)

export function SetData() {
  //dados do usuario depois do login
  const {user} = Auth()

  // editar db (crud)


  return {}
}