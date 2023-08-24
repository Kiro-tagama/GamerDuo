import { createContext } from "react";
import { Auth } from "./Auth";
import { Match } from "./Match";
import { Notification } from "./Notification";

export const ContextArea = createContext({})

export function ContextProvider({children}:any) {
  
  const {createAcount,loginAcount,deslog,user,setUser,errLogin,setErrLogin,deleteMe}= Auth()
  const {like,noLike} = Match()
  const {sendMatchNotification,sendMenssageNotification}= Notification()

  return(
    <ContextArea.Provider value={{
      user,setUser,
      createAcount,loginAcount,deslog,errLogin,setErrLogin,deleteMe,
      like,noLike,
      sendMatchNotification,sendMenssageNotification
    }}>
      {children}
    </ContextArea.Provider>
  )

}