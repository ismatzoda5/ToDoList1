import { get } from "./dom.js";
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

search.oninput= async()=>{
    try {
        let {data}=await axios.get(`${api}?q=${search.value}`) 
        get(data) 
      } catch (error) {
          console.error(error);
      }
}

export async function deleteUser(id){
    try {
      let {data}=await axios.delete(`${api}/${id}`) 
      get(data) 
    } catch (error) {
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

export async function editUser(user,idx){
    try {
        let {data} = await axios.put(`${api}/${idx}`,{img:user.img,name:user.name,price:user.price,word:user.word,})
        getData()
    } catch (error) {
        console.error(error);
    }
}
