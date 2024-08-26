const specialChars=["%","*","/","+","-","="];

let display=document.querySelector(".display");
let buttons=document.querySelectorAll("button");

let output="";

buttons.forEach((button) =>{
    button.addEventListener("click",(e) =>calculate(e.target.dataset.value));
});

const calculate = (btnVal) => {

     if(btnVal === "=" && output !== ""){
        output=eval(output.replace("%", "/100"));
    }
    else if(btnVal ==="AC"){
        output="";
    }
    else if(btnVal === "DEL"){
        output=output.toString().slice(0,-1);
    }
    else{
        if(output === "" && specialChars.includes(btnVal)) return;
        output+=btnVal;
    } 
    display.value = output;     
}

