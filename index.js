let number1 = document.querySelector("#button1")
let number2 = document.querySelector("#button2");
let number3 = document.querySelector("#button3");
let number4 = document.querySelector("#button4");
let number5 = document.querySelector("#button5");
let number6 = document.querySelector("#button6");
let number7 = document.querySelector("#button7");
let number8 = document.querySelector("#button8");
let number9 = document.querySelector("#button9");
let number0 = document.querySelector("#button0");
// numbers

let input = document.querySelector("#input");
//input

let times = document.querySelector("#times")
let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let divide = document.querySelector("#divide")
let dot = document.querySelector("#dot")
let submit = document.querySelector("#submit")

// arithemetic equation

let genbtn = document.querySelectorAll('button')


let clear = document.querySelector('#clear')

// clear


clear.addEventListener("click", () => {
  input.value = ""
  
})
input.addEventListener('input', (e) => {
  let inputvalue = e.target.value
let inputreg = inputvalue.replace(/[^0-9+\-*/ ()]/g, "");
  e.target.value = inputreg;
})


number1.addEventListener("click", () => {
    let one = Number(number1.textContent);
    input.value += one
    console.log(one);
})

number2.addEventListener("click", () => {
  let one = Number(number2.textContent);
  input.value += one;
  console.log(one);
});

number3.addEventListener("click", () => {
  let one = Number(number3.textContent);
  input.value += one;
  console.log(one);
});

number4.addEventListener("click", () => {
  let one = Number(number4.textContent);
  input.value += one;
  console.log(one);
});

number5.addEventListener("click", () => {
  let one = Number(number5.textContent);
  input.value += one;
  console.log(one);
});

number6.addEventListener("click", () => {
  let one = Number(number6.textContent);
  input.value += one;
  console.log(one);
});
number7.addEventListener("click", () => {
  let one = Number(number7.textContent);
  input.value += one;
  console.log(one);
});

number8.addEventListener("click", () => {
  let one = Number(number8.textContent);
  input.value += one;
  console.log(one);
});
number9.addEventListener("click", () => {
  let one = Number(number9.textContent);
  input.value += one;
  console.log(one);
});
number0.addEventListener("click", () => {
  let one = Number(number0.textContent);
  input.value += one;
    console.log(one);
    
});


//arethemetic equation 

// ...


minus.addEventListener("click", () => {
  input.value += minus.textContent;
});

plus.addEventListener("click", () => {
  input.value += plus.textContent;
});

divide.addEventListener("click", () => {
  input.value += divide.textContent;
});

times.addEventListener("click", () => {

  input.value += times.textContent;
});


dot.addEventListener("click", () => {

  input.value += dot.textContent;
});
genbtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()     
    })
})


function calculate() {
  try {
     
    let result = eval(input.value);
    if (input.value === Infinity || input.value === null) {
      throw new SyntaxError("syntax error");
    }
    input.value = result;
    if (isNaN(result)) {
      input.value = ""
    } else {
      input.value = result
    }
  } catch (error) {
    
    if (error instanceof SyntaxError) {
      input.value = "syntax error";
      console.log((input.value = "syntax error 🥺"));
    } else {
      
      console.log("error");
    }
  }
}

submit.addEventListener('click', () => {

  console.log(calculate());
  calculate()
 
  
})


// animation

