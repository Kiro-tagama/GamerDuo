import { createContext } from "react";
import { Auth } from "./Auth";
import { Match } from "./Match";

export const ContextArea = createContext({})

export function ContextProvider({children}:any) {
  
  const {createAcount,loginAcount,deslog,user}= Auth()
  const {like,noLike} = Match()

  return(
    <ContextArea.Provider value={{
      user,
      createAcount,loginAcount,deslog,
      like,noLike
    }}>
      {children}
    </ContextArea.Provider>
  )

}