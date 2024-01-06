import { EditUser, deleteUser, postUser} from "./api.js";

let box = document.querySelector(".box")
let header = document.querySelector(".header")
let form1 = document.querySelector(".form1")
let cancel = document.querySelector(".Cancel")
let save = document.querySelector(".Save")
let image1 = document.querySelector(".image1")
let detail = document.querySelector(".detail")
let qwert = document.querySelector(".qwert")
let id1= null



export function get(data) {
    data.forEach((el) => {
        let del = {
            date:localStorage.getItem("date"),
            category:localStorage.getItem("category"),
            level:localStorage.getItem("level"),
            city:localStorage.getItem("city"),
            name:localStorage.getItem("name"),
            email:localStorage.getItem("email"),
            img:localStorage.getItem("img"),
            id:localStorage.getItem("id"),
        }
             
            let a = document.createElement("h1")
            a.classList.add('h1')
            a.innerHTML=del.name
            let b = document.createElement("img")
            b.classList.add('avatar')
            b.src=del.img


save.onclick = () => {
    let id1 = del.id
    let user = {
         name: form1["name"].value,
         img:del.img,
         phone: 999888222,
         city: form1["city"].value,
         email:form1["email1"].value,
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam sequi fuga quaerat amet sit consequuntur minima iste quos ducimus commodi ipsam, maiores at aliquam, illo perspiciatis voluptates excepturi. Sit",
      escriteria: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam sequi fuga quaerat amet sit consequuntur minima iste quos ducimus commodi ipsam, maiores at aliquam, illo perspiciatis voluptates excepturi. Sit",
      descriteria: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam sequi fuga quaerat amet sit consequuntur minima iste quos ducimus commodi ipsam, maiores at aliquam, illo perspiciatis voluptates excepturi. Sit",
      benefits: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam sequi fuga quaerat amet sit consequuntur minima iste quos ducimus commodi ipsam, maiores at aliquam, illo perspiciatis voluptates excepturi. Sit",
    }
    EditUser(id1,user)
}
            form1["name"].value=del.name
            form1["email"].value=del.category
            form1["email1"].value=del.email
            form1["phone"].value=del.level
            form1["city"].value=del.city
            header.append(a,b)
            
    });
}

