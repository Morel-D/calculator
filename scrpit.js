// get the input field for the operation
var inputValues = document.getElementById("action");
// get all the buttons
var resultValues = document.querySelectorAll("#inputValue");
// get the tag to display the results
var inputField = document.getElementById("input");
// get the input to perform the operation
var calculate = document.getElementById("calculate");

var resetValue = document.getElementById("reset");

// get the delete button value
var deleteLastValue = document.getElementById("backArrow");

// get the button for the square root
var squareRootBtn = document.getElementById("inputSqaureOperation");

// get a number exponent form(2)
var squareBtn = document.getElementById("squareNum");

// get the sign operation values
var signOpertions = document.getElementById("signOperations");

// get the fraction operation button
var fractionBtn = document.getElementById("fractionOperation");

// get history
// var op = document.getElementById('operation');
// var ans = document.getElementById('answer');


// get menus
var menus = document.getElementById('menu');

var histories = [];



// operations....


// display the fraction operation
fractionBtn.addEventListener("click", () => {
  1 / inputValues.value;
  inputField.innerText = 1 / inputValues.value;
});

// delete the last value in the input field
deleteLastValue.addEventListener("click", () => {
  var numInput = inputValues.value;
  var newValue = numInput.slice(0, -1);
  inputValues.value = newValue;
});

// Loop through all the buttons and get the input values
resultValues.forEach((result) => {
  result.addEventListener("click", () => {
    inputValues.value += result.innerText;
  });
});



// Loop through all the buttons and get the input values......... 2
resultValues.forEach((result) => {
  result.addEventListener("click", () => {
    if(isNaN(result.innerText))
    {
      if(inputField.innerText != 0)
      {
        inputValues.value = inputField.innerText+result.innerText;
        inputField.innerText = 0;
      }
    }else {
      console.log("Number");
    }
  });
});

// perform the calculation once the input field != null
calculate.addEventListener("click", () => {
  var liHist = document.createElement('li');
  if (inputField.innerText == 0 && inputValues.value == "") {
    return 0;
  } else {
    inputField.innerText = eval(inputValues.value);
    const history = { "operation": inputValues.value, "answer": inputField.innerText }
    histories.push(history);
    console.log(histories);
    histories.forEach((e) => { 

      liHist.innerHTML = e.operation +" = "+ e.answer;
      menus.appendChild(liHist);
     });
    inputValues.value = "";
  }
});

// reset the input values to the default values
resetValue.addEventListener("click", () => {
  inputValues.style.visibility = "visible";
  inputValues.value = "";
  inputField.innerHTML = 0;
});

// find the square root of a number
squareRootBtn.addEventListener("click", () => {
  inputField.innerText = Math.sqrt(inputValues.value);
});

// find the square of a number
squareBtn.addEventListener("click", () => {
  inputField.innerText = Math.pow(inputValues.value, 2);
});


// History sheet 

document.getElementById('hisBtn').addEventListener('click', () => {
  window.location.hash = "#bottom-sheet";
})