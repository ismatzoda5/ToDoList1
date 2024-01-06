import { get } from "./dom.js";
let api =" http://localhost:3000/data"

export async function getData(){
    try {
      let {data}=await axios.get(api) 
      get(data) 
    } catch (error) {
        console.error(error);
    }
}