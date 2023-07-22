import axios from "axios";
import {APP_URL_API} from "@env"

const url=APP_URL_API

export async function getUser(id:string){
  try {
    const response = await axios.get(url+"/users/"+id);
    // Processar os dados da resposta aqui (response.data)
    return response.data
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
  }
}

export async function getAlluser(id:string){
  try {
    const response = await axios.get(url+"/matchs/"+id);
    // Processar os dados da resposta aqui (response.data)
    return response.data
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
  }
}