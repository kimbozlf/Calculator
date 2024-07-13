let show = document.querySelector("div.calculator>input");
let btn = Array.from(document.querySelectorAll("div#buttons>button"));
console.log(btn);
let string = "";

btn.map((elem) => {
  elem.addEventListener("click", (x) => {
    if (x.target.innerHTML == "DEL") {
      string = string.slice(0, string.length - 1);
      show.value = string;
    } 
    else if (x.target.innerHTML == "C")  {
      string = ""
      show.value = string;
    }
    else if (x.target.innerHTML == "=" && show.value == "") {
      show.value = "";
    }
    else if (x.target.innerHTML == "=")  {
      string = eval(string)
      show.value = string;
    }
    else {
      string += x.target.innerHTML;
      show.value = string;
    }
  });
});
