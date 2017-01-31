
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




var joutput1 = document.getElementById("output1");
var joutput2 = document.getElementById("output2");
var joutput3 = document.getElementById("output3");

function but1Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 1;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 1;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 1;
  }
}


function but2Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 2;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 2;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 2;
  }
}

function but3Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 3;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 3;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 3;
  }
}

function but4Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 4;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 4;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 4;
  }
}

function but5Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 5;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 5;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 5;
  }
}

function but6Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 6;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 6;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 6;
  }
}

function but7Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 7;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 7;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 7;
  }
}

function but8Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 8;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 8;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 8;
  }
}

function but9Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 9;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 9;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 9;
  }
}

function but0Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 0;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 0;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 0;
  }
}

var firstNumber;
var secondNumber;
var operationChosen;

function butPPress(){
  if(joutput1.innerHTML === ""){
  } else if(joutput2.innerHTML === ""){
    firstNumber = Number(joutput1.innerHTML);
    joutput1.innerHTML = "";
    operationChosen = "plus";
  } else if(joutput3.innerHTML === ""){
    firstNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    operationChosen = "plus";
  } else {
    firstNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    joutput3.innerHTML = "";
    operationChosen = "plus"
  }
}

function butMPress(){
  if(joutput1.innerHTML === ""){
  } else if(joutput2.innerHTML === ""){
    firstNumber = Number(joutput1.innerHTML);
    joutput1.innerHTML = "";
    operationChosen = "minus";
  } else if(joutput3.innerHTML === ""){
    firstNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    operationChosen = "minus";
  } else {
    firstNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    joutput3.innerHTML = "";
    operationChosen = "minus"
  }
}

function butMtPress(){
  if(joutput1.innerHTML === ""){
  } else if(joutput2.innerHTML === ""){
    firstNumber = Number(joutput1.innerHTML);
    joutput1.innerHTML = "";
    operationChosen = "multiply";
  } else if(joutput3.innerHTML === ""){
    firstNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    operationChosen = "multiply";
  } else {
    firstNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    joutput3.innerHTML = "";
    operationChosen = "multiply"
  }
}

function butDPress(){
  if(joutput1.innerHTML === ""){
  } else if(joutput2.innerHTML === ""){
    firstNumber = Number(joutput1.innerHTML);
    joutput1.innerHTML = "";
    operationChosen = "divide";
  } else if(joutput3.innerHTML === ""){
    firstNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    operationChosen = "divide";
  } else {
    firstNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    joutput1.innerHTML = "";
    joutput2.innerHTML = "";
    joutput3.innerHTML = "";
    operationChosen = "divide"
  }
}

function butEPress(){
  if(operationChosen === "plus"){
    if(joutput1.innerHTML === ""){
    } else if(joutput2.innerHTML === ""){
      secondNumber = Number(joutput1.innerHTML);
    } else if(joutput3.innerHTML === ""){
      secondNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    }
    console.log(firstNumber + secondNumber)
  }else if(operationChosen === "minus"){
    if(joutput1.innerHTML === ""){
    } else if(joutput2.innerHTML === ""){
      secondNumber = Number(joutput1.innerHTML);
    } else if(joutput3.innerHTML === ""){
      secondNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    }
    console.log(firstNumber - secondNumber)
  } else if(operationChosen === "multiply"){
    if(joutput1.innerHTML === ""){
    } else if(joutput2.innerHTML === ""){
      secondNumber = Number(joutput1.innerHTML);
    } else if(joutput3.innerHTML === ""){
      secondNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    }
    console.log(firstNumber * secondNumber)
  } else if(operationChosen === "divide"){
    if(joutput1.innerHTML === ""){
    } else if(joutput2.innerHTML === ""){
      secondNumber = Number(joutput1.innerHTML);
    } else if(joutput3.innerHTML === ""){
      secondNumber = (10 * Number(joutput1.innerHTML)) + Number(joutput2.innerHTML);
    } else {
      secondNumber = (100 * Number(joutput1.innerHTML)) + (10 * Number(joutput2.innerHTML)) + Number(joutput3.innerHTML);
    }
    console.log(firstNumber / secondNumber)
  }
}

function butCPress(){
  joutput1.innerHTML = "";
  joutput2.innerHTML = "";
  joutput3.innerHTML = "";
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
