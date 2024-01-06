import { get } from "./dom.js";
let api =" http://localhost:3000/data"
let select = document.querySelector(".select")
let select1 = document.querySelector(".select1")

export async function getData(){
    try {
      let {data}=await axios.get(api) 
      get(data) 
    } catch (error) {
        console.error(error);
    }
}

select.onclick = async()=>{
    try {
      if(select.value =="All Category" ){
        let {data}=await axios.get(api) 
        get(data) 
      }
      else{
        let {data}= await axios.get(`${api}?category=${select.value}`)
        get(data)
      }
      
    } catch (error) {
        console.error(error);
    }
}

select1.onclick = async()=>{
    try {
      let {data}=await axios.get(`${api}?level=${select1.value}`) 
      get(data) 
    } catch (error) {
        console.error(error);
    }
}