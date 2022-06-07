const container=document.querySelector(".container");
const main=document.querySelector(".main");
const input=document.querySelector(".input");
const plus=document.querySelector(".plus");
const footer=document.querySelector(".footer");
const clear=document.querySelector(".clear");

const div = document.createElement("div");
div.classList.add("dreamdiv");
main.appendChild(div);
console.log(div);

const ul=document.createElement("ul");
ul.classList.add("dreamul");
div.appendChild(ul);


const inva = document.querySelector(".inva");
const remove=document.querySelector(".remove");



// console.log(main.children[2]);


container.addEventListener("click",(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("plus")){
        if(input.value){
            ul.innerHTML += `
            <li class="inva">👉${input.value}</li>
            <button class="remove">❌</button>
            `;
        }else{
            alert("please enter a duty!");
        }input.value=""

    }
    if(e.target.classList.contains("remove")){
        e.target.previousElementSibling.remove();
        e.target.remove();

    }
    if (e.target.classList.contains("inva")) {
        e.target.style.textDecoration="line-through";
    }


    if(e.target.classList.contains("clear")){
        alert("ATTENDİON! Are you sure to delete")
        ul.innerHTML="";
    }
})


// remove.addEventListener("db-click",(e)=>{
// e.target.style.textdecoration="line-through";
// });