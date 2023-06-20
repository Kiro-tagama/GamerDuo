import { useState } from "react";
import { colors } from "../style/style";

export default function useMenu() {
  const [page, setPage]= useState<'home'|'chat'|'profile'>('home')
  
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

  return {page,setPage,active}
}