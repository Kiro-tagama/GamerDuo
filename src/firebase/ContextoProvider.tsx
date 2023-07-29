import { createContext } from "react";
import { Auth } from "./Auth";
import { Match } from "./Match";

export const ContextArea = createContext({})

export function ContextProvider({children}:any) {
  
  const {createAcount,loginAcount,deslog,user,errLogin,setErrLogin}= Auth()
  const {like,noLike} = Match()

  return(
    <ContextArea.Provider value={{
      user,
      createAcount,loginAcount,deslog,errLogin,setErrLogin,
      like,noLike
    }}>
      {children}
    </ContextArea.Provider>
  )

}