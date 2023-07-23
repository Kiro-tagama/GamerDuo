import { useState } from "react";
import { colors, themaDark, themaLigth } from "../style/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useColorScheme } from "react-native";

interface PropsPage{
  name:'home'|'chat'|'profile'|'inChat'|'login'
}

interface infoCard{
  id: string;
  nome: string;
  img: string;
  agentFav: number;
}

export default function useMenu() {
  const urlPage=useRoute()
  // @ts-ignore
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

  function like(i:infoCard) {
    console.log('like\n',i)
  }
  function noLike(i:infoCard) {
    console.log('des like\n',i); 
  }

  return {page,active,nav,like,noLike,swiperRef, setSwiperRef}
}