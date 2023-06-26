import { useState } from "react";
import { colors } from "../style/style";
import { useNavigation, useRoute } from "@react-navigation/native";

interface PropsPage{
  propsPage:'home'|'chat'|'profile'|'inChat'|'login'
}

interface infoCard{
  id: number;
  nome: string;
  img: string;
  agentFav: number;
}

export default function useMenu() {
  const urlPage=useRoute()

  // @ts-ignore
  const [page, setPage]= useState<PropsPage>(urlPage.name)

  const nav=useNavigation()
  
  const active={
    backgroundColor:colors.white,
    shadowColor: colors.white,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 1,

    elevation: 4,
  }

  function like(i:infoCard) {
    console.log('like\n',i)
  }
  function noLike(i:infoCard) {
    console.log('des like\n',i); 
  }

  return {page,active,nav,like,noLike}
}