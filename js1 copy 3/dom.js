import { deleteUser, postUser, } from "./api.js";

let box = document.querySelector(".box")
let header = document.querySelector(".header")
let form1 = document.querySelector(".form1")
let cancel = document.querySelector(".Cancel")
let save = document.querySelector(".Save")
let image1 = document.querySelector(".image1")
let detail = document.querySelector(".detail")
let tdImg1 = document.querySelector(".Img1")
let op = document.querySelector(".op")
let idx = null


// save.onclick = () => {
//     let user = {
//         title: form1["title"].value,
//         category: form1["categ"].value,
//         level: form1["level"].value,
//         city: form1["city"].value,
//         phone: form1["phone"].value,
//         name: form1["name"].value,
//         date: form1["date"].value,
//         des: form1["des"].value,
//         escri: form1["escri"].value,
//         descri: form1["descri"].value,
//         benef: form1["benef"].value,
//     }
//     postUser(user)
// }




export function get(data) {
    box.innerHTML=""
    data.forEach((el) => {
        let cont = document.createElement("tr")
        cont.classList.add("cont")
        let tdTitle = document.createElement("td")
        tdTitle.innerHTML = el.title
        let tdCateg = document.createElement("td")
        tdCateg.classList.add("categ")
        tdCateg.innerHTML = el.category
        tdCateg.classList.add('categ')
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
        let tdEmail = document.createElement("td")
        tdEmail.classList.add("Email")
        tdEmail.innerHTML = el.email

        let b = document.createElement('img')
        b.classList.add("b")
        b.src=el.img
        
      let a  = document.createElement("a")
      a.classList.add("a")
      a.href="/js7/index1.html"
      a.innerHTML="...."
        
      a.onclick = ()=>{
        localStorage.setItem("date", el.date);
        localStorage.setItem("category", el.category);
        localStorage.setItem("level", el.level);
        localStorage.setItem("city", el.city);
        localStorage.setItem("name", el.name);
        localStorage.setItem("email", el.email);
        localStorage.setItem("img", el.img);
        localStorage.setItem("id", el.id);
        btnInfo.href ="/js 7/index1.html";            
    }     
        
        let tr2 = document.createElement('td')
        tr2.classList.add("tr2")
        tr2.append(a,b,tdName)

        

        
        let tr1 = document.createElement('td')

        let btnDel = document.createElement("button")
        btnDel.classList.add("btnDel")
        btnDel.innerHTML = "×"

        let btnEdit = document.createElement("button")
        btnEdit.classList.add("btnEdit")
        btnEdit.innerHTML = "Edit"

        btnDel.onclick = () => {
            deleteUser(el.id)
        }


        tr1.append(btnDel, btnEdit,op)
        cont.append(tr2, tdEmail,tdCity, tdPhone, tdCateg)
        box.append(cont)
    });
}

export{idx}

