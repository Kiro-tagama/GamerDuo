import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useStyle } from "../../style/style";
import { colors } from "../../style/theme";
import { useEditProfile } from "../../hooks/useEditProfile";
import { useContext } from "react";
import { ContextArea } from "../../firebase/ContextoProvider";

export function EditProfileButtons() {
  const {user, setUser}=useContext(ContextArea)
  const {validationInfos} = useEditProfile()

  const { stylesTexts, stylesLogin } = useStyle();
  const nav = useNavigation();

  return (
    <View style={{ marginVertical: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={[stylesLogin.bt, { width: "48%", marginBottom: 0 }]}
          onPress={() => {
            nav.goBack()
          }}
        >
          <Text style={[stylesTexts.h3, stylesLogin.btText]}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[stylesLogin.bt, { width: "48%", marginBottom: 0 }]}
          onPress={() => {
            validationInfos();
          }}
        >
          <Text style={[stylesTexts.h3, stylesLogin.btText]}>Salvar</Text>
        </TouchableOpacity>
      </View>
      {/* divisor */}
      <View
        style={{
          backgroundColor: stylesTexts.normal.color,
          height: 1.5,
          width: "100%",
          marginVertical: 20,
        }}
      ></View>
      <View>
        <TouchableHighlight
          style={[
            stylesLogin.input,
            {
              borderColor: colors.red,
              width: "100%",
              justifyContent: "center",
            },
          ]}
          underlayColor={colors.red}
          onPress={() => {
            /*apagar conta*/
          }}
        >
          <Text style={[stylesTexts.h3, { color: colors.red }]}>
            Apagar Conta
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}