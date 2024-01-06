import { get } from "./dom.js";
import { idx } from "../js1 copy 3/dom.js";
let api =" http://localhost:3000/data"
let search = document.querySelector(".search")

export async function getData(){
    try {
      let {data}=await axios.get(api) 
      get(data) 
    } catch (error) {
        console.error(error);
    }
}

// search.oninput= async()=>{
//     try {
//         let {data}=await axios.get(`${api}?q=${search.value}`) 
//         get(data) 
//       } catch (error) {
//           console.error(error);
//       }
// }

export async function deleteUser(id){
    try {
      let {data}=await axios.delete(`${api}/${id}`) 
      get(data) 
    } catch (error) {
        console.error(error);
    }
}
export async function EditUser(id1,user){
    try {
      let {data}=await axios.put(`${api}/${id1}`,user) 
    }
     catch (error) {
        console.error(error);
    }
}


export async function postUser(user){
    try {
      let {data}=await axios.post(api,user) 
    } catch (error) {
        console.error(error);
    }
}
