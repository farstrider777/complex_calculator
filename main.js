
var but1 = document.getElementById("1-but");
var but2 = document.getElementById("2-but");
var but3 = document.getElementById("3-but");

var but4 = document.getElementById("4-but");
var but5 = document.getElementById("5-but");
var but6 = document.getElementById("6-but");

var but7 = document.getElementById("7-but");
var but8 = document.getElementById("8-but");
var but9 = document.getElementById("9-but");

var but0 = document.getElementById("0-but");
var butP = document.getElementById("p-but");
var butM = document.getElementById("m-but");

var butMt = document.getElementById("mt-but");
var butD = document.getElementById("d-but");
var butE = document.getElementById("e-but");
var butC = document.getElementById("c-but");


var jShowop = document.getElementById("show-op");
var jShowop2 = document.getElementById("show-op2");

var jOutput1 = document.getElementById("output1");
var jOutput2 = document.getElementById("output2");
var jOutput3 = document.getElementById("output3");

function but1Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 1;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 1;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 1;
  }
}


function but2Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 2;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 2;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 2;
  }
}

function but3Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 3;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 3;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 3;
  }
}

function but4Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 4;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 4;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 4;
  }
}

function but5Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 5;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 5;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 5;
  }
}

function but6Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 6;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 6;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 6;
  }
}

function but7Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 7;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 7;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 7;
  }
}

function but8Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 8;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 8;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 8;
  }
}

function but9Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 9;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 9;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 9;
  }
}

function but0Press(){
  jShowop2.innerHTML = "";
  if(jOutput1.innerHTML === ""){
    jOutput1.innerHTML = 0;
  } else if(jOutput2.innerHTML === ""){
    jOutput2.innerHTML = 0;
  } else if(jOutput3.innerHTML === ""){
    jOutput3.innerHTML = 0;
  }
}

var firstNumber;
var secondNumber;
var operationChosen;

function butPPress(){
  if(jOutput1.innerHTML === ""){
  } else if(jOutput2.innerHTML === ""){
    firstNumber = Number(jOutput1.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + " + ";
    jOutput1.innerHTML = "";
    operationChosen = "plus";
  } else if(jOutput3.innerHTML === ""){
    firstNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + " + ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    operationChosen = "plus";
  } else {
    firstNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + jOutput3.innerHTML + " + ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    operationChosen = "plus"
  }
}

function butMPress(){
  if(jOutput1.innerHTML === ""){
  } else if(jOutput2.innerHTML === ""){
    firstNumber = Number(jOutput1.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + " - ";
    jOutput1.innerHTML = "";
    operationChosen = "minus";
  } else if(jOutput3.innerHTML === ""){
    firstNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + " - ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    operationChosen = "minus";
  } else {
    firstNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + jOutput2.innerHTML + " - ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    operationChosen = "minus"
  }
}

function butMtPress(){
  if(jOutput1.innerHTML === ""){
  } else if(jOutput2.innerHTML === ""){
    firstNumber = Number(jOutput1.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + " * ";
    jOutput1.innerHTML = "";
    operationChosen = "multiply";
  } else if(jOutput3.innerHTML === ""){
    firstNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + " * ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    operationChosen = "multiply";
  } else {
    firstNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + jOutput3.innerHTML + " * ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    operationChosen = "multiply"
  }
}

function butDPress(){
  if(jOutput1.innerHTML === ""){
  } else if(jOutput2.innerHTML === ""){
    firstNumber = Number(jOutput1.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + " / ";
    jOutput1.innerHTML = "";
    operationChosen = "divide";
  } else if(jOutput3.innerHTML === ""){
    firstNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + " / ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    operationChosen = "divide";
  } else {
    firstNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    jShowop.innerHTML = jOutput1.innerHTML + jOutput2.innerHTML + jOutput3.innerHTML + " / ";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    operationChosen = "divide"
  }
}

function butEPress(){
  if(operationChosen === "plus"){
    if(jOutput1.innerHTML === ""){
    } else if(jOutput2.innerHTML === ""){
      secondNumber = Number(jOutput1.innerHTML);
    } else if(jOutput3.innerHTML === ""){
      secondNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    }
    jShowop2.innerHTML = firstNumber + secondNumber;
    jShowop.innerHTML = "";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    firstNumber = 0;
    secondNumber = 0;
  }else if(operationChosen === "minus"){
    if(jOutput1.innerHTML === ""){
    } else if(jOutput2.innerHTML === ""){
      secondNumber = Number(jOutput1.innerHTML);
    } else if(jOutput3.innerHTML === ""){
      secondNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    }
    jShowop2.innerHTML = firstNumber - secondNumber;
    jShowop.innerHTML = "";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    firstNumber = 0;
    secondNumber = 0;
  } else if(operationChosen === "multiply"){
    if(jOutput1.innerHTML === ""){
    } else if(jOutput2.innerHTML === ""){
      secondNumber = Number(jOutput1.innerHTML);
    } else if(jOutput3.innerHTML === ""){
      secondNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    }
    jShowop2.innerHTML = firstNumber * secondNumber;
    jShowop.innerHTML = "";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    firstNumber = 0;
    secondNumber = 0;
  } else if(operationChosen === "divide"){
    if(jOutput1.innerHTML === ""){
    } else if(jOutput2.innerHTML === ""){
      secondNumber = Number(jOutput1.innerHTML);
    } else if(jOutput3.innerHTML === ""){
      secondNumber = (10 * Number(jOutput1.innerHTML)) + Number(jOutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(jOutput1.innerHTML)) + (10 * Number(jOutput2.innerHTML)) + Number(jOutput3.innerHTML);
    }
    jShowop2.innerHTML = firstNumber / secondNumber;
    jShowop.innerHTML = "";
    jOutput1.innerHTML = "";
    jOutput2.innerHTML = "";
    jOutput3.innerHTML = "";
    firstNumber = 0;
    secondNumber = 0;
  }
}

function butCPress(){
  jOutput1.innerHTML = "";
  jOutput2.innerHTML = "";
  jOutput3.innerHTML = "";
  jShowop.innerHTML = "";
  jShowop2.innerHTML = "";
  firstNumber = 0;
  secondNumber = 0;
  operationChosen = "none";
  }

but1.addEventListener('click', but1Press);
but2.addEventListener('click', but2Press);
but3.addEventListener('click', but3Press);
but4.addEventListener('click', but4Press);
but5.addEventListener('click', but5Press);
but6.addEventListener('click', but6Press);
but7.addEventListener('click', but7Press);
but8.addEventListener('click', but8Press);
but9.addEventListener('click', but9Press);
but0.addEventListener('click', but0Press);
butP.addEventListener('click', butPPress);
butM.addEventListener('click', butMPress);
butMt.addEventListener('click', butMtPress);
butD.addEventListener('click', butDPress);
butE.addEventListener('click', butEPress);
butC.addEventListener('click', butCPress);
