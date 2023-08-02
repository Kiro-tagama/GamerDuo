import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
  ScrollView,
  Vibration,
  TouchableHighlight,
  Image,
} from "react-native";
import { Key, useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useStyle } from "../style/style";
import { colors } from "../style/theme";
import { ContextArea } from "../firebase/ContextoProvider";

// @ts-ignore
function MyCheckbox({ onChange, checked }) {
  const { stylesTexts } = useStyle();
  return (
    <Pressable
      style={[
        styles.checkboxBase,
        checked && { backgroundColor: stylesTexts.normal.color },
      ]}
      onPress={onChange}
    >
      {checked && <Ionicons name="checkmark" size={24} color={colors.red} />}
    </Pressable>
  );
}

function Divider() {
  const { stylesTexts } = useStyle();
  return (
    <View
      style={{
        backgroundColor: stylesTexts.normal.color,
        height: 1.5,
        width: "100%",
        marginVertical: 20,
      }}
    ></View>
  );
}

/*
  vamos tirar esse tanto de useState e deixar só um

    - const {user} = useContext(contextArea)
    - useState(user) // vai receber os dados ja salvo
    - quando o usuario entrar vai carregar um useEffect que vai chamar a api getUser(user.id)
    - que vai setar o dado local e o usuario local salvando com async storege 

    - para atualizar no firebase ... tirado do arquivo de match do firebase
    async function noLike(i:infoCard) {
      await updateDoc(doc(db,"users", user.id),{
        desmatchs: arrayUnion(i.id) // colocar o estado aqui
      })
      .then(()=>console.log('deslike\n',i.id))
      .catch((err)=>console.log(err))
    }

    - o "html" ta muito grande, seria bom separar por componentes
*/

export function EditPerfil() {
  const { stylesTexts, stylesLogin } = useStyle();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [RocketLeagueChecked, setRocketLeagueChecked] = useState(false);
  const [valorantChecked, setValorantChecked] = useState(false);
  const [minecraftChecked, setMinecraftChecked] = useState(false);
  const [csgoChecked, setCsgoChecked] = useState(false);
  const [image, setImage] = useState("https://i.imgur.com/Okxoyye.jpeg"); //mudar para a foto atual do usuario...
  const nav = useNavigation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const platforms = ["PlayStation", "Xbox", "PC", "NintendoSwitch", "Mobile"];

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };

  const [platf, setPlatf] = useState(
    platforms.reduce((acc: any, platform) => {
      acc[platform] = false;
      return acc;
    }, {})
  );

  function validationInfos() {
    if (nome == "" || email == "") {
      setErrorMessage("Campo obrigatório*");
      Vibration.vibrate(500);
    } else {
      setErrorMessage(null);
    }
  }


  function Infos() {
    return (
      <View>
        {/* IMAGEM */}

        <View
          style={[
            stylesLogin.input,
            {
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              height: "auto",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={stylesTexts.h2}>Fotos de perfil</Text>
            <Pressable onPress={handleImagePicker}>
              <AntDesign
                name="upload"
                size={30}
                color={stylesTexts.normal.color}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            <Pressable onPress={handleImagePicker}>
              <Image
                source={{ uri: image }}
                style={{
                  width: 85,
                  height: 125,
                  borderRadius: 10,
                  margin: 5,
                }}
              />
            </Pressable>
          </View>
        </View>

        {/* INFOS */}

        <Pressable onPress={Keyboard.dismiss} style={styles.infos}>
          <Text style={stylesTexts.h2}>Nome</Text>
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          <TextInput
            placeholder="João da Silva"
            style={[stylesLogin.input, { width: "100%", marginTop: 4 }]}
            placeholderTextColor={colors.gray}
            onChangeText={(text: any) => setNome(text)}
            value={nome}
          />
        </Pressable>

        <Pressable onPress={Keyboard.dismiss} style={styles.infos}>
          <Text style={stylesTexts.h2}>Email</Text>
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          <TextInput
            placeholder="Ex: joaosilva@gmail.com"
            editable={false}
            style={[stylesLogin.input, { width: "100%", marginTop: 4 }]}
            placeholderTextColor={colors.gray}
            onChangeText={(text: string) => setEmail(text)}
            value={email}
          />
        </Pressable>

        <Pressable onPress={Keyboard.dismiss} style={styles.infos}>
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
            onChangeText={(text: string) => setBio(text)}
            value={bio}
          />
        </Pressable>
      </View>
    )
  }


  function Botoes() {
    return (
      <View style={{ marginVertical: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={[stylesLogin.bt, { width: "48%", marginBottom: 0 }]}
            onPress={() => {
              /*cancelar ações*/
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
        <Divider />
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
    );
  }

  function Plataformas() {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={stylesTexts.h2}>Plataforma</Text>
        {platforms.map((i: string) => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
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

  function Jogos() {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={stylesTexts.h2}>Jogos</Text>
        <View
          style={
            styles.itemList /* esse stylo é desnecessario e pode ser chamado só uma vez */
          }
        >
          <MyCheckbox
            onChange={() => setValorantChecked(!valorantChecked)}
            checked={valorantChecked}
          ></MyCheckbox>
          <Pressable
            onPress={() => setValorantChecked(!valorantChecked)}
            style={{ width: "100%" }}
          >
            <Text style={stylesTexts.normal}>Valorant</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setMinecraftChecked(!minecraftChecked)}
            checked={minecraftChecked}
          />
          <Pressable
            onPress={() => setMinecraftChecked(!minecraftChecked)}
            style={{ width: "100%" }}
          >
            <Text style={stylesTexts.normal}>Minecraft</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setCsgoChecked(!csgoChecked)}
            checked={csgoChecked}
          />
          <Pressable
            onPress={() => setCsgoChecked(!csgoChecked)}
            style={{ width: "100%" }}
          >
            <Text style={stylesTexts.normal}>Conter-Strike</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setRocketLeagueChecked(!RocketLeagueChecked)}
            checked={RocketLeagueChecked}
          />
          <Pressable
            onPress={() => setRocketLeagueChecked(!RocketLeagueChecked)}
            style={{ width: "100%" }}
          >
            <Text style={stylesTexts.normal}>Rocket-League</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
      //botão de voltar...
        onPress={() => nav.goBack()}
        style={{
          width: 24,
          height: 24,
          marginTop: 10,
          borderRadius: 30,
          marginBottom: 10,
        }}
      >
        <AntDesign
          name="left"
          size={24}
          color={stylesTexts.normal.color}
          style={{ marginRight: 5 }}
        />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Infos />
        <Plataformas />
        <Jogos />
        <Botoes />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },

  infos: {
    paddingVertical: 5,
  },

  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.gray,
    backgroundColor: "transparent",
    margin: 5,
  },
  itemList: {
    flexDirection: "row",
    alignItems: "center",
  },
});
