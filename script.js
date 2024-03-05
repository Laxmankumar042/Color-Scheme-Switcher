let btn = document.querySelectorAll(".button");
let body = document.querySelector("body");

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.id == "button-1"){
            body.style.backgroundColor = "red";
        }
        else if (e.target.id == "button-2"){
            body.style.backgroundColor = "blue";
        }
        else if (e.target.id == "button-3"){
            body.style.backgroundColor = "green";
        }
        else if (e.target.id == "button-4"){
            body.style.backgroundColor = "yellow";
        }
        else if (e.target.id == "button-5"){
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
        else {
            body.style.backgroundColor = "pink";
        }
    })
})