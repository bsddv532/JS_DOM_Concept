//element access by tagname
const element = document.getElementsByTagName("h1")
console.log(element[0].innerText)


//element access by classname
const element1 = document.getElementsByClassName("ipl")
console.log(element1[0].innerText)


//element access by id
const element2 = document.getElementById("ipl")
console.log(element2.innerText)


//STYLING OF ELEMENTS
function clickme(){
    const text = document.getElementById("ipl")
    text.innerText= "Hello Deepak"
    text.style.color= "Blue"
    // text.style.display= "None"
    document.getElementById("btn").innerText="Thanks for Clicking"
    
}



//Difference between innerText and innerHTML
function InnerText(){
    const demo = document.getElementById("task")
    alert(demo.innerText)
}

function InnerHTML(){
    const demo = document.getElementById("task")
    alert(demo.innerHTML)
}



//creation of new element
function create(){
    const newtag = document.createElement("h1")
    newtag.setAttribute("id","newtag")
    newtag.innerText="New element is created"
    console.log(newtag);

    //On screen
    const parent = document.getElementById("extra")
    parent.appendChild(newtag)


}

