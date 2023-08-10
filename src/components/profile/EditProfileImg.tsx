import { View, Text, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { AntDesign } from "@expo/vector-icons";
import { useStyle } from "../../style/style";
import { useEditProfile } from "../../hooks/useEditProfile";
import { useContext } from "react";
import { ContextArea } from "../../firebase/ContextoProvider";

export function EditProfileImg() {
  // @ts-ignore
  const {user, setUser}=useContext(ContextArea)
  const { stylesTexts, stylesLogin } = useStyle();

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setUser({...user,img:result.assets[0].uri});
      console.log(result.assets[0].uri);
    }
  };

  return(
    <View
      style={[
        stylesLogin.input,
        {
          height: "auto",
          width:"auto",
          justifyContent: "space-between",
          flexDirection: "row",
          padding:0,
          paddingHorizontal:0
          
        },
      ]}
    >
      
      <Pressable onPress={handleImagePicker}>
        <Image
          source={{ uri: user.img }}
          style={{
            width: 85*1.8,
            height: 125*1.5,
            borderBottomLeftRadius:30,
            borderTopLeftRadius:30
          }}
          resizeMode="cover"
        />
      </Pressable>
      

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flex:1
        }}
      >
        <Text style={[stylesTexts.h2,{marginVertical:10}]}>Fotos de perfil</Text>
        <Pressable onPress={handleImagePicker}>
          <AntDesign
            name="upload"
            size={30}
            color={stylesTexts.normal.color}
          />
        </Pressable>
      </View>
      
    </View>
  )
}