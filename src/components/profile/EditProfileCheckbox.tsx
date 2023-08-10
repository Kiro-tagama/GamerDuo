import {
  View,
  Text,
  StyleSheet,
  Pressable
} from "react-native";
import { useContext, useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useStyle } from "../../style/style";
import { colors } from "../../style/theme";
import { ContextArea } from "../../firebase/ContextoProvider";

interface PropsDados{
  type: "platforms" | "games"
}

export function EditProfileCheckbox({type}:PropsDados) {
  // @ts-ignore
  const {user, setUser}=useContext(ContextArea)
  const { stylesTexts, stylesLogin } = useStyle();

  const platforms = ["PlayStation", "Xbox", "PC", "NintendoSwitch", "Mobile"];
  const games=["R6","vava","COD"]

  const use = type == "games" ? games : platforms

  const [platf, setPlatf] = useState(
    use.reduce((acc: any, platform) => {
      acc[platform] = user.hasOwnProperty(type) && user[type].hasOwnProperty(platform) ? user[type][platform] : false;
      return acc;
    }, {})
  );

  useEffect(()=>{
    if (type == "games") {
      setUser({...user,games:platf});
    }else{
      setUser({...user,platforms:platf});
    }
  },[platf])
  
  function MyCheckbox({ onChange, checked }: any) {
    return (
      <Pressable
        style={[
          { width: 24,height: 24,
            justifyContent: "center",alignItems: "center",
            borderRadius: 4,borderWidth: 0.5,
            borderColor: colors.gray,
            margin: 5,
          },
          checked && { backgroundColor: stylesTexts.normal.color },
        ]}
        onPress={onChange}
      >
        {checked && <Ionicons name="checkmark" size={24} color={stylesLogin.btText.color} />}
      </Pressable>
    );
  }

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={stylesTexts.h2}>{type == "games" ? "Jogos" : "Plataformas"}</Text>
      {use.map((i: string, index:number) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            key={index}
          >
            <MyCheckbox
              //recorri ao gpt pq n lembrava como fazer essa parte ksk
              onChange={() =>
                setPlatf((prevPlatf: any) => ({
                  ...prevPlatf,
                  [i]: !prevPlatf[i],
                }))
              }
              checked={platf[i]}
            />
            <Pressable
              onPress={() =>
                setPlatf((prevPlatf: any) => ({
                  ...prevPlatf,
                  [i]: !prevPlatf[i],
                }))
              }
              style={{ width: "100%" }}
            >
              <Text style={stylesTexts.normal}>{i}</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}