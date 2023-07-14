import { createContext } from "react";
import { Auth } from "./Auth";

export const ContextArea = createContext({})

export function ContextProvider({children}:any) {
  const {createAcount,loginAcount,user}= Auth()
  return(
    <ContextArea.Provider value={{
      user,
      createAcount,loginAcount
    }}>
      {children}
    </ContextArea.Provider>
  )

}