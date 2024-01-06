let box = document.querySelector(".box")
let header = document.querySelector(".header")
let id1 = null

export function get(data) {
    box.innerHTML = ""
    data.forEach((el) => {
        let cont = document.createElement("div")
        cont.classList.add("cont")
        let cont1 = document.createElement("div")
        cont1.classList.add("cont1")
        let cont2 = document.createElement("div")
        cont2.classList.add("cont2")
        let tdTitle = document.createElement("h2")
        tdTitle.innerHTML = el.title
        let tdCateg = document.createElement("p")
        tdCateg.classList.add("categ")
        tdCateg.innerHTML = el.category
        let tdLevel = document.createElement("p")
        tdLevel.classList.add("level")
        tdLevel.innerHTML = el.level
        let tdCity = document.createElement("p")
        tdCity.classList.add("city")
        tdCity.innerHTML = el.city

        
        
        let btnInfo = document.createElement("a")
        btnInfo.innerHTML="See More"
        btnInfo.href="/js 5/index1.html"
        btnInfo.classList.add("info")
   
       
                btnInfo.onclick = ()=>{
                    localStorage.setItem("date", el.date);
                    localStorage.setItem("category", el.category);
                    localStorage.setItem("level", el.level);
                    localStorage.setItem("city", el.city);
                    localStorage.setItem("title", el.title);
                    btnInfo.href ="/js 5/index1.html";            
                }

                

        cont1.append(tdTitle, tdCateg,btnInfo)
        cont2.append(tdLevel, tdCity)
        cont.append(cont1, cont2)
        box.append(cont)
    });
}
export {id1}