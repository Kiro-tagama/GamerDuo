import {
  View,
  Text,
  TextInput,
} from "react-native";

import { useStyle } from "../../style/style";
import { colors } from "../../style/theme";
import { useEditProfile } from "../../hooks/useEditProfile";
import { useContext } from "react";
import { ContextArea } from "../../firebase/ContextoProvider";

export function EditProfileInfos() {
  // @ts-ignore
  const {user, setUser}=useContext(ContextArea)

  const {errorMessage, setErrorMessage} = useEditProfile()
  const { stylesTexts, stylesLogin } = useStyle();

  return (
    <View>
      <Text style={stylesTexts.h2}>Nome</Text>
        {errorMessage ? (
          <Text style={stylesTexts.errorMessage}>{errorMessage}</Text>
        ) : null}
      <TextInput
        placeholder="João da Silva"
        style={[stylesLogin.input, { width: "100%", marginTop: 4 }]}
        placeholderTextColor={colors.gray}
        onChangeText={(text)=>setUser({...user,name:text})}
        value={user.name}
      />

      <Text style={stylesTexts.h2}>Email</Text>
      {errorMessage ? (
        <Text style={stylesTexts.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TextInput
        placeholder="Ex: joaosilva@gmail.com"
        editable={false}
        style={[stylesLogin.input, { width: "100%", marginTop: 4 }]}
        placeholderTextColor={colors.gray}
        onChangeText={(text)=>setUser({...user,email:text})}
        value={user.email}
      />

      <Text style={stylesTexts.h2}>Biografia</Text>
      <TextInput
        style={[
          stylesLogin.input,
          { width: "100%", marginTop: 4, height: 120 },
        ]}
        placeholder="Ex: Me chamo joão e tenho 20 anos..."
        placeholderTextColor={colors.gray}
        editable
        multiline
        numberOfLines={4}
        onChangeText={(text)=>setUser({...user,bio:text})}
        value={user.bio}
      />
    </View>
  )
}