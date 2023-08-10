import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useStyle } from "../../style/style";
import { colors } from "../../style/theme";
import { useEditProfile } from "../../hooks/useEditProfile";
import { useContext, useState } from "react";
import { ContextArea } from "../../firebase/ContextoProvider";

export function EditProfileButtons() {
  const {validationInfos} = useEditProfile()

  const { stylesTexts, stylesLogin } = useStyle();
  const nav = useNavigation();
  
  //@ts-ignore
  const {deleteMe}=useContext(ContextArea)
  const [modal,setModal] = useState<boolean>(false)

  return (
    <>
    <View style={{ marginVertical: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={[stylesLogin.bt, { width: "48%", marginBottom: 0 }]}
          onPress={() => {
            nav.goBack();
          } }
        >
          <Text style={[stylesTexts.h3, stylesLogin.btText]}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[stylesLogin.bt, { width: "48%", marginBottom: 0 }]}
          onPress={() => {
            validationInfos();
          } }
        >
          <Text style={[stylesTexts.h3, stylesLogin.btText]}>Salvar</Text>
        </TouchableOpacity>
      </View>
      {/* divisor */}
      <View
        style={{
          backgroundColor: stylesTexts.normal.color,
          height: 1.5,width: "100%",
          marginVertical: 20,
        }}
      />
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
            setModal(true)
          } }
        >
          <Text style={[stylesTexts.h3, { color: colors.red }]}>
            Apagar Conta
          </Text>
        </TouchableHighlight>
      </View>
    </View>
    
    <Modal
      transparent={true}
      visible={modal}
      animationType='fade'
    >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center",alignItems:'center',backgroundColor:stylesLogin.btText.color+'aa' }}
          onPress={() => setModal(false)}>
          <View style={{
            backgroundColor:stylesTexts.normal.color,
            padding:20,borderRadius:30,
            alignItems:"center",width:"90%"
            }}>
            <Text style={[stylesTexts.h1,{color:stylesLogin.btText.color}]}>Apagar conta</Text>
            <Text style={[stylesTexts.h3,{color:stylesLogin.btText.color,marginBottom:10}]}>
              Ao apagar sua conta não poderá a recuperar novamente!!
              certeza que quer deletar sua conta?
            </Text>
            <TouchableOpacity onPress={() => setModal(false)}>
              <Text style={[stylesTexts.h2,{color:stylesLogin.btText.color}]}>Cancelar</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor:stylesLogin.btText.color,
                height: 1.5,width:"100%",
                marginVertical: 20,
              }}
            ><Text>oi</Text></View>
            <TouchableOpacity onPress={()=> deleteMe()}>
              <Text style={[stylesTexts.h3,{color:colors.red}]}>Apagar conta</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}