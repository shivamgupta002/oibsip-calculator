let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }
   else if (e.target.innerHTML == "C") {
      string ="";
      document.querySelector("input").value = string;
    }
   else if (e.target.innerHTML == "DEL") {
    for(let i=string.length;i>=0;i--){
        let d=string.slice(0,-1);
        document.querySelector("input").value = string.pop;
        break;
    }
    }
     else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
    
  });
});
