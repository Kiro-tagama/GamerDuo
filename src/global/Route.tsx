import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Login } from "../screen/Login"
import { Home } from "../screen/Home"
import { Chat } from "../screen/Chat"
import { InChat } from "../screen/InChat"
import { Profile } from "../screen/Profile"
import { useLogin } from "../hooks/useLogin"

const Stack= createNativeStackNavigator()

function Router() {
  const {user}=useLogin()
  
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {user == null ?
      <Stack.Screen name="login" component={Login}/>
      : //se tiver usuario ele pega as telas a baixo
      <>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="chat" component={Chat}/>
        <Stack.Screen name="inChat" component={InChat}/>
        <Stack.Screen name="profile" component={Profile}/>
      </>
      }
    </Stack.Navigator>
  )
}

export {Router}