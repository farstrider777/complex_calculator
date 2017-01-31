
var but1 = document.getElementById("1-but");
var but2 = document.getElementById("2-but");
var but3 = document.getElementById("3-but");

var but4 = document.getElementById("4-but");
var but5 = document.getElementById("5-but");
var but6 = document.getElementById("6-but");

var but7 = document.getElementById("7-but");
var but8 = document.getElementById("8-but");
var but9 = document.getElementById("9-but");

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

function but3Press(){
  if(joutput1.innerHTML === ""){
    joutput1.innerHTML = 9;
  } else if(joutput2.innerHTML === ""){
    joutput2.innerHTML = 9;
  } else if(joutput3.innerHTML === ""){
    joutput3.innerHTML = 9;
  }
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
