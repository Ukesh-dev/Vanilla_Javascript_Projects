const gm = document.getElementById("gram");
const pound = document.getElementById("pound");
const ounce = document.getElementById("ounce");
const kg = document.getElementById("kg");

const gmInput = document.getElementById("gramInput");
const poundInput = document.getElementById("poundInput");
const ounceInput = document.getElementById("ounceInput");
const kgInput = document.getElementById("kgInput");

const input = document.getElementById("input");

const poundSelect = document.getElementById("poundSelect");
const kgSelect = document.getElementById("kgSelect");
const gmSelect = document.getElementById("gramSelect");
const ounceSelect = document.getElementById("ounceSelect");
const action = document.querySelector(".action")

select = document.getElementById("select");
inputs = document.querySelectorAll(".inputs");


input.addEventListener("input", myResult);
select.addEventListener("change", myResult);


card = document.getElementById("card");
card.style.visibility = "visible";

input.addEventListener("keyup", () => {
  card.style.visibility = "visible";
});



function myResult() {
  if(input.value.length > 8){
    input.value = ""
    action.textContent = "Maximum Limit Reached!!"
    setTimeout(() => {
      action.textContent = ""
 }, 2000);
  }
 switch (select.value) {
   case "gram":
     forGram();
     break;
   case "pound":
     forPounds();
     break;
     case "kg":
       forKg();
       break;
     default:
       forOunce();
 }
}

function inputsFunction() {
  inputs.forEach((input) => {
    input.textContent = "";
  });
}

function forPounds() {
  poundSelect.style.display = "none";
  kgSelect.style.display = "block";
  gmSelect.style.display = "block";
  ounceSelect.style.display = "block";
  if (input.value === "" || input.value < 1) {
    inputsFunction();
  }
  else{
  kgInput.textContent = `${input.value} pounds is ${
    (input.value * 0.45359237).toFixed(3)
  }kg`;
  ounceInput.textContent = `${input.value} pounds is ${input.value * 16} ounces`;
  gmInput.textContent = `${input.value} pounds is ${(input.value * 453.59237).toFixed(3)}gm`;
}
}


// Functions
function forKg(){
  input.placeholder = "Enter The Number in Kg";
    kgSelect.style.display = "none";
    gmSelect.style.display = "block";
    poundSelect.style.display = "block";
    ounceSelect.style.display = "block";
   
    if (input.value === "" || input.value < 1) {
      inputsFunction();
    }
  
   else{
      poundInput.textContent = `${input.value}kg is ${(input.value * 2.20462262).toFixed(3)}pounds`;
      ounceInput.textContent = `${input.value}kg is ${
        (input.value * 35.2739619).toFixed(3)
      } ounce`;
      gmInput.textContent = `${input.value}kg is ${(input.value * 1000).toFixed(3)}gm`;
      if(input.value == ""){
        input.placeholder = "Enter a value in kg"
        inputsFunction();
      }
    }
     
    
}
function forGram(){
  input.placeholder = "Enter The Number in gram";
  gmSelect.style.display = "none";
  kgSelect.style.display = "block";
  poundSelect.style.display = "block";
  ounceSelect.style.display = "block";
  if (input.value === "" || input.value < 1) {
    inputsFunction();
  }
  else{
  poundInput.textContent = `${input.value}gm is ${
      (input.value * 0.0022046226).toFixed(3)
    }pounds`;
    ounceInput.textContent = `${input.value}gm is ${
      (input.value * 0.0352739619).toFixed(3)
    }ounces`;
    kgInput.textContent = `${input.value}gm is ${(input.value * 1000).toFixed(3)}kg`;
  }
  }


function forOunce(){
  input.placeholder = "Enter The Number in Ounce";
  ounceSelect.style.display = "none";
  gmSelect.style.display = "block";
  poundSelect.style.display = "block";
  kgSelect.style.display = "block";
  if (input.value === "" || input.value < 1) {
    inputsFunction();
  }
  else {
    poundInput.textContent = `${input.value}ounce is ${
      (input.value * 0.0625).toFixed(3)
    }pounds`;
    kgInput.textContent = `${input.value}ounce is ${
      (input.value * 0.0283495231).toFixed(3)
    }kg`;
    gmInput.textContent = `${input.value}ounce is ${
      (input.value / 28.3495321).toFixed(3)
    }gm`;
  }
}



