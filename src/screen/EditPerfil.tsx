import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useStyle } from "../style/style";

import { EditProfileInfos } from "../components/profile/EditProfileInfos";
import { EditProfileImg } from "../components/profile/EditProfileImg";
import { EditProfileCheckbox } from "../components/profile/EditProfileCheckbox";
import { EditProfileButtons } from "../components/profile/EditProfileButtons";

export function EditPerfil() {
  const { stylesTexts } = useStyle();
  const nav = useNavigation();

  return (
    <View style={{flex: 1,paddingHorizontal: 12}}>
      <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableHighlight
        //botão de voltar...
        onPress={() => nav.goBack()}
        underlayColor={stylesTexts.normal.color}
        style={{
          borderRadius: 30,
          height:50,
          width:50,
          justifyContent:"center",
          alignItems:'center'
        }}
        >
          <AntDesign
            name="left"
            size={24}
            color={stylesTexts.normal.color}
          />
        </TouchableHighlight>
        <Text style={stylesTexts.h2}>Editar.</Text>
      </View>

      <ScrollView  key={1} showsVerticalScrollIndicator={false}>
        <EditProfileImg />
        <EditProfileInfos/>
        <EditProfileCheckbox type="platforms"/>
        <EditProfileCheckbox type="games"/>
        
        <EditProfileButtons/>
      </ScrollView>
    </View>
  );
}

