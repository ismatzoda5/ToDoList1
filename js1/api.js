import { get } from "./dom.js";
let api ="http://localhost:3000/data"
export async function getData(){
  try{
      let response = await fetch(api)
      let data =await response.json()
      get(data)

  }catch (error){
      console.log(error);
  }
}