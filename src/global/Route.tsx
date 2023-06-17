import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screen/Login"
import { Home } from "../screen/Home"
import { mainProfile } from "../api/fakeProfiles"

const Stack= createNativeStackNavigator()

export const user=mainProfile[0]

export function Router() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {user == null ?
      <Stack.Screen name="login" component={Login}/>
      : //se tiver usuario ele pega as telas a baixo
      <>
        <Stack.Screen name="home" component={Home}/>
      </>
      }
    </Stack.Navigator>
  )
}