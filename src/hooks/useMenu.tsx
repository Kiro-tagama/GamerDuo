import { useContext, useEffect, useState } from "react";
import { colors, themaDark, themaLigth } from "../style/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { getAlluser } from "../api/api";
import { ContextArea } from "../firebase/ContextoProvider";

interface PropsPage{
  name:'home'|'chat'|'profile'|'inChat'|'login'
}

export default function useMenu() {
  const urlPage=useRoute()
  //@ts-ignore
  const {user}=useContext(ContextArea)
  //@ts-ignore
  const [page, setPage]= useState<PropsPage>(urlPage.name)

  const nav=useNavigation()
  
  const theme = useColorScheme() == "dark"? themaDark : themaLigth
  const active={
    backgroundColor:theme.colors.text,
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 4,
  }

  const [swiperRef, setSwiperRef] = useState<any>();
  const [perfil,setPerfil]=useState<any>(null)

  useEffect(()=>{
    async function data(){
      setPerfil(await getAlluser(user.id))
    }
    data()
  },[])

  return {page,active,nav,swiperRef, setSwiperRef,perfil}
}