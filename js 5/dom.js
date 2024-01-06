let box = document.querySelector(".box")
let header = document.querySelector(".header")





export function get(data) {
           
        

        let del = {
            date:localStorage.getItem("date"),
            category:localStorage.getItem("category"),
            level:localStorage.getItem("level"),
            city:localStorage.getItem("city"),
            title:localStorage.getItem("title"),
        }
             
            let a = document.createElement("h1")
            a.classList.add('h1')
            a.innerHTML=del.title
            let box1 = document.createElement("div")
            box1.classList.add("boxx")
            let b = document.createElement("h3")
            let ba = document.createElement("p")
            ba.innerHTML="Closing Date"
            b.innerHTML=del.date
            let box2 = document.createElement("div")
            let c = document.createElement("h3")
            let ca = document.createElement("p")
            ca.innerHTML="Category"
            c.innerHTML=del.category
            let box3 = document.createElement("div")
            let d = document.createElement("h3")
            let da = document.createElement("p")
            da.innerHTML="Seniority"
            d.innerHTML=del.level
            let box4 = document.createElement("div")
            let e = document.createElement("h3")
            let ea = document.createElement("p")
            ea.innerHTML="Location"
            e.innerHTML=del.city
            let box5 = document.createElement("div")
            let p1 =document.createElement('h3')
            p1.innerHTML="Description :"
            p1.classList.add("p1")
            let p =document.createElement('p')
            p.classList.add("p")
            p.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque facilis blanditiis mollitia odio repudiandae quos maiores explicabo atque voluptate esse! Rerum praesentium hic voluptatibus consequuntur quia ex itaque est provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusantium pariatur ipsum earum amet quod est explicabo quidem officia culpa, voluptas possimus, quaerat voluptates similique in illum eligendi sit quasi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, provident inventore possimus ullam nulla atque quod explicabo eaque. Obcaecati, omnis! Sint hic laboriosam voluptatem delectus natus error recusandae porro molestias."
  

            box2.append(ba,b)
            box3.append(ca,c)
            box4.append(da,d)
            box5.append(ea,e)
            box1.append(box2,box3,box4,box5)
            header.append(a,box1,p1,p)
       

}