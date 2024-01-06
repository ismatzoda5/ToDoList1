import { deleteUser, postUser } from "./api.js";

let box = document.querySelector(".box")
let header = document.querySelector(".header")
let form1 = document.querySelector(".form1")
let cancel = document.querySelector(".Cancel")
let save = document.querySelector(".Save")
let detail = document.querySelector(".detail")
let image1 = document.querySelector(".image1")








export function get(data) {
    box.innerHTML = ""
    data.forEach((el) => {
        let cont = document.createElement("tr")
        cont.classList.add("cont")
        let tdTitle = document.createElement("td")
        tdTitle.innerHTML = el.title
        let tdCateg = document.createElement("td")
        tdCateg.classList.add("categ")
        tdCateg.innerHTML = el.category
        let tdLevel = document.createElement("td")
        tdLevel.classList.add("level")
        tdLevel.innerHTML = el.level
        let tdCity = document.createElement("td")
        tdCity.classList.add("city")
        tdCity.innerHTML = el.city
        let tdPhone = document.createElement("td")
        tdPhone.classList.add("Phone")
        tdPhone.innerHTML = el.phone
        let tdName = document.createElement("td")
        tdName.classList.add("Name")
        tdName.innerHTML = el.name
        let tdDate = document.createElement("td")
        tdDate.classList.add("Date")
        tdDate.innerHTML = el.date


      

       
        


        let tr1 = document.createElement('td')

        let btnDel = document.createElement("button")
        btnDel.classList.add("btnDel")
        btnDel.innerHTML = "×"

        let btnEdit = document.createElement("a")
        btnEdit.classList.add("btnEdit")
        btnEdit.href="/js8/index1.html"
        btnEdit.innerHTML="Edit"

        btnDel.onclick = () => {
            deleteUser(el.id)
        }

        // btnEdit.onclick=()=>{
        //     idx= el.id
        //     modalEdit.showModal()
        //      edit["inp3"].value=el.img
        //      edit["inp4"].value=el.name
        //      edit["inp5"].value=el.price
        //      edit["inp6"].value=el.word
             
        // }
        // edit.onsubmit=(e)=>{
        //     e.preventDefault()
        //     let user={
        //         img:edit["inp3"].value,
        //         name:edit["inp4"].value,
        //         price:edit["inp5"].value,
        //         word:edit["inp6"].value,
        //         isCompleted:false
        //     }
        //    editUser(user,idx)
        // }


        tr1.append(btnDel, btnEdit)
        cont.append(tdTitle, tdCateg, tdLevel, tdCity, tdPhone, tdName, tdDate, tr1)
        box.append(cont)
    });
}

