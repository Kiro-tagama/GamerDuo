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
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// @ts-ignore
function MyCheckbox({ onChange, checked }) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}
    >
      {checked && <Ionicons name="checkmark" size={24} color="red" />}
    </Pressable>
  );
}


export function EditPerfil() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [psnChecked, setPsnChecked] = useState(false)
  const [xboxChecked, setXboxChecked] = useState(false)
  const [pcChecked, setPcChecked] = useState(false)
  const [nintendoChecked, setNintendoChecked] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [RocketLeagueChecked, setRocketLeagueChecked] = useState(false)
  const [valorantChecked, setValorantChecked] = useState(false)
  const [minecraftChecked, setMinecraftChecked] = useState(false)
  const [csgoChecked, setCsgoChecked] = useState(false)
  const nav = useNavigation()

function validationInfos(){
  if (nome == '' || email == '') {
    //@ts-ignore
    setErrorMessage('Campo obrigatório*')
    Vibration.vibrate(500)
  }
  else{
    setErrorMessage(null)
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={()=>nav.goBack()}
        style={{
          width:24,
          height:24,
          marginTop:10,
          borderRadius:30,
          marginBottom:10,
        }}
      >
        <AntDesign name="left" size={24} color={'#ddd'} style={{marginRight:5}}/>
        </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Pressable onPress={Keyboard.dismiss} style={styles.infos}>
          <Text style={styles.titles}>Nome</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            placeholder="João da Silva"
            style={styles.textInput}
            placeholderTextColor="#ddd"
            onChangeText={(text: any) => setNome(text)}
            value={nome}
          />
        </Pressable>

        <Pressable onPress={Keyboard.dismiss} style={styles.infos}>
          <Text style={styles.titles}>Email</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            placeholder="Ex: joaosilva@gmail.com"
            style={styles.textInput}
            placeholderTextColor="#ddd"
            onChangeText={(text: any) => setEmail(text)}
            value={email}
          />
        </Pressable>

        <Pressable onPress={Keyboard.dismiss} style={styles.infos}>
          <Text style={styles.titlesBox}>Biografia</Text>
          <TextInput
            style={styles.textInputBox}
            placeholder="Ex: Me chamo joão e tenho 20 anos..."
            placeholderTextColor="#ddd"
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text: any) => setBio(text)}
            value={bio}
          />
        </Pressable>
      </View>


    {/* PLATAFORMAS */}


      <View style={styles.containerLists}>
        <Text style={{color: "#ddd", fontSize: 20, marginBottom:10, marginTop:10,}}>Plataforma</Text>
        <View style={styles.itemList} >
          <MyCheckbox
            onChange={() => setPsnChecked(!psnChecked)}
            checked={psnChecked}
          ></MyCheckbox>
          <Pressable onPress={() => setPsnChecked(!psnChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>PlayStation</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setXboxChecked(!xboxChecked)}
            checked={xboxChecked}
          />
          <Pressable onPress={() => setXboxChecked(!xboxChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>Xbox</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setPcChecked(!pcChecked)}
            checked={pcChecked}
          />
          <Pressable onPress={() => setPcChecked(!pcChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>PC</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setNintendoChecked(!nintendoChecked)}
            checked={nintendoChecked}
          />
          <Pressable onPress={() => setNintendoChecked(!nintendoChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>Nintendo Switch</Text>
          </Pressable>
        </View>
      </View>


      {/* JOGOS */}
      

      <View style={styles.containerLists}>
        <Text style={{color: "#ddd", fontSize: 20, marginBottom:10, marginTop:10,}}>Jogos</Text>
        <View style={styles.itemList} >
          <MyCheckbox
            onChange={() => setValorantChecked(!valorantChecked)}
            checked={valorantChecked}
          ></MyCheckbox>
          <Pressable onPress={() => setValorantChecked(!valorantChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>Valorant</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setMinecraftChecked(!minecraftChecked)}
            checked={minecraftChecked}
          />
          <Pressable onPress={() => setMinecraftChecked(!minecraftChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>Minecraft</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setCsgoChecked(!csgoChecked)}
            checked={csgoChecked}
          />
          <Pressable onPress={() => setCsgoChecked(!csgoChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>Conter-Strike</Text>
          </Pressable>
        </View>

        <View style={styles.itemList}>
          <MyCheckbox
            onChange={() => setRocketLeagueChecked(!RocketLeagueChecked)}
            checked={RocketLeagueChecked}
          />
          <Pressable onPress={() => setRocketLeagueChecked(!RocketLeagueChecked)} style={{width:'100%'}}>
            <Text style={styles.titlesLists}>Rocket-League</Text>
          </Pressable>
        </View>
      </View>


      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /*cancelar ações*/
          }}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            validationInfos()
          }}
        >
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity
          style={styles.buttonApagar}
          onPress={() => {
            /*apagar conta*/
          }}
        >
          <Text style={{ color: "red"}}>Apagar Conta</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
  },

  infos: {
    paddingTop: 20,
  },

  errorMessage:{
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingBottom: 5,
},

  textInput: {
    color: "#ddd",
    padding: 13,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#ddd",
    height: 50,
  },

  textInputBox: {
    color: "#ddd",
    padding: 13,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#ddd",
    height: 100,
  },

  titles: {
    color: "#ddd",
    fontSize: 20,
    //marginBottom: 10,
  },

  titlesBox:{
    color: "#ddd",
    fontSize: 20,
    marginBottom: 10,
  },

  containerLists: {
    marginTop: 5,
    height: 200,
  },

  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "transparent",
  },

  checkboxChecked: {
    backgroundColor: "#ddd",
  },

  titlesLists: {
    color: "#ddd",
    fontSize: 15,
    marginLeft: 5,
  },

  itemList: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  containerButtons: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    padding: 10,
    width: "45%",
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
    marginTop:15,
  },

  buttonApagar: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%",
    height: 50,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: 'red',
  },
});
