import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Login } from "../screen/Login"
import { Home } from "../screen/Home"
import { Chat } from "../screen/Chat"
import { InChat } from "../screen/InChat"
import { Profile } from "../screen/Profile"

import { mainProfile } from "../api/fakeProfiles"
import { useNavigation } from "@react-navigation/native"

const Stack= createNativeStackNavigator()
const nav= ''

const user=mainProfile[0]

function Router() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {user == null ?
      <Stack.Screen name="login" component={Login}/>
      : //se tiver usuario ele pega as telas a baixo
      <>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="chat" component={Chat}/>
        <Stack.Screen name="inchat" component={InChat}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </>
      }
    </Stack.Navigator>
  )
}

export {Router,user}