import { useRef, useState } from "react";
import { colors } from "../style/style";
import { useNavigation, useRoute } from "@react-navigation/native";

interface PropsPage{
  propsPage:'home'|'chat'|'profile'|'inChat'|'login'
}

export default function useMenu() {
  const urlPage=useRoute()

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

  const [iSwipe,setISwipe]=useState(0)
  const swiperRef = useRef(null);

  function like() {
    swiperRef.current.swipeLeft();
    
  }
  function noLike() {
    
  }
  


  return {page,active,nav, swiperRef,like,noLike,iSwipe,setISwipe}
}