import { useContext, useState } from "react"
import { Vibration } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ContextArea } from "../firebase/ContextoProvider"
import { Firebase } from "../firebase/Firebase";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export function useEditProfile() {
  // @ts-ignore
  const {user, setUser}=useContext(ContextArea)
  const nav = useNavigation();
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  async function validationInfos() {
    if (user.name == "" || user.email == "") {
      Vibration.vibrate(500);
      setErrorMessage("Campo obrigatório*");
    } else {
      const db = getFirestore(Firebase)
      setErrorMessage(null)
      await AsyncStorage.setItem("dataUser", JSON.stringify(user))
      setUser(user)

      await updateDoc(doc(db, "users", user.id), user)
      .then((i)=>console.log("salvo\n",user))
      .catch(e=>console.log(e))

      nav.goBack()
    }
  }

  return {errorMessage, setErrorMessage,validationInfos}
}