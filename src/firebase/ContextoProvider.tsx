import { createContext } from "react";
import { createAcount,loginAcount } from "./useAuth";

export const ContextArea = createContext({})

export function ContextProvider({children}:any) {

  return(
    <ContextArea.Provider value={
      10
    }>
      {children}
    </ContextArea.Provider>
  )

}