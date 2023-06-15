import { useState } from "react";

interface propsPage {
  page: 'home' | 'chat' | 'profile'
}

export default function useScreens(props:propsPage) {
  const [page, setPage]= useState(props.page)

  return {page,setPage}
}