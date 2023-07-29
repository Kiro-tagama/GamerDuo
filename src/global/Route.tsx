import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Login } from "../screen/Login"
import { Home } from "../screen/Home"
import { Chat } from "../screen/Chat"
import { InChat } from "../screen/InChat"
import { Profile } from "../screen/Profile"
import { useContext } from "react"
import { EditPerfil } from "../screen/EditPerfil"
import { InfoApp } from "../screen/InfoApp"

import {ContextArea} from '../firebase/ContextoProvider'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View } from "react-native"

const Stack= createNativeStackNavigator()

function Router({theme}:any) {
  //@ts-ignore
  const {user}=useContext(ContextArea)
  const insets = useSafeAreaInsets();

  return(
    <View style={{ flex: 1, paddingTop: insets.top, backgroundColor:theme.colors.background }}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {user == null ?
      <Stack.Screen name="login" component={Login}/>
      : //se tiver usuario ele pega as telas a baixo
      <>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="chat" component={Chat}/>
        <Stack.Screen name="inChat" component={InChat}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name='EditPerfil' component={EditPerfil}/>
        <Stack.Screen name='infoApp' component={InfoApp}/>
      </>
      }
    </Stack.Navigator>
    </View>
  )
}

export {Router}