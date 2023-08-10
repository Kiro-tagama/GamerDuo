import axios from "axios";
//@ts-ignore
import {APP_URL_API} from "@env";

const url=APP_URL_API

export async function getUser(id:string){
  try {
    const response = await axios.get(url+"/users/"+id);
    // Processar os dados da resposta aqui (response.data)
    if (response.data.length != 0) return response.data
    return null
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
  }
}

export async function getAlluser(id:string){
  try {
    const response = await axios.get(url+"/matchs/"+id);
    // Processar os dados da resposta aqui (response.data)
    if (response.data.length != 0) return response.data
    return null
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
  }
}

export async function getAllchats(id:string){
  try {
    const response = await axios.get(url+"/chats/"+id);
    // Processar os dados da resposta aqui (response.data)
    if (response.data.length != 0) return response.data
    return null
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
  }
}

export async function delUser(id:string) {
  try {
    await axios.delete(url+"/deluser/"+id)
    .then((i)=>console.log("Conta DELETADA "+ i))
    .catch(err=>console.log(err))
    return 
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
  }
}