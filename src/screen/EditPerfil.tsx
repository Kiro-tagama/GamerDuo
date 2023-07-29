import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import React, { useState } from "react"

import Checkbox from 'expo-checkbox'

import CheckBox from '@react-native-community/checkbox';
 
export function EditPerfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerInfos}>

        <View style={styles.infos}>
            <Text style={styles.titles}>Nome</Text>
            <TextInput placeholder="Nome"
            style={styles.textInput} 
            placeholderTextColor="#ddd" 
            />
        </View>

        <View style={styles.infos}>
            <Text style={styles.titles}>Email</Text>
            <TextInput 
            placeholder="Email"
            style={styles.textInput} 
            placeholderTextColor="#ddd" 
            />
        </View>

        <View style={styles.infos}>
            <Text style={styles.titles}>Bio</Text>
            <TextInput
            style={styles.textInputBox}
            placeholder="bio"
            placeholderTextColor="#ddd" 
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text: any) => setBio(text)}
            value={bio}
            />
        </View>
      </View>

      <View style={styles.containerPlatarforms}>
        <Text style={styles.titles}>Plataforma</Text>
        <View style={styles.plataforms}>
          <CheckBox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.titlesPlataforms}>PSN</Text>
        </View>

        <View style={styles.plataforms}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.titlesPlataforms}>XBox</Text>
        </View>

        <View style={styles.plataforms}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.titlesPlataforms}>PC</Text>
        </View>

        <View style={styles.plataforms}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.titlesPlataforms}>Nintendo CheckBox</Text>
        </View>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonApagar}>
          <Text style={{ color: "red" }}>Apagar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: "100%",
  },

  containerInfos:{

  },

  infos: {
    paddingTop:20,
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
    marginBottom:10,
  },

  containerPlatarforms: {
    marginTop: 5,
    height: 270,
  },

  checkbox:{
    margin:8,
  },

  titlesPlataforms: {
    color: "#ddd",
    fontSize: 15,
  },

  plataforms: {
    flex: 1,
    height:'5%',
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop:5,
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
    padding: 10,
    width: "40%",
    height: 40,
    borderRadius: 30,
  },

  buttonApagar: {
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 45,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "red",
  },
});
