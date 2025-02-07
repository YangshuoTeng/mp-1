function addition(){
  let first=Number(document.getElementById("first").value);
  let second=Number(document.getElementById("second").value);
  let result = first + second;

  if (result < 0) {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "black";
  }}

function subtraction(){
  let first=Number(document.getElementById("first").value);
  let second=Number(document.getElementById("second").value);
  let result = first - second;

  if (result < 0) {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "black";
  }}

function multiply(){
  let first=Number(document.getElementById("first").value);
  let second=Number(document.getElementById("second").value);
  let result = first * second;

  if (result < 0) {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "black";
  }
}

function divide(){
  let first=Number(document.getElementById("first").value);
  let second=Number(document.getElementById("second").value);
  let result = first / second;

  if (result < 0) {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "black";
  }
}

function power(){
  let first=Number(document.getElementById("first").value);
  let second=Number(document.getElementById("second").value);
  let result = 0;
  let startNumber = 1;
  for (let x = 0; x < second; x++) {
       startNumber = startNumber * first;
       result = startNumber;
     }

  if (result < 0) {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.color = "black";
  }
}

function doClear(){
  document.getElementById("first").value="";
  document.getElementById("second").value="";
  document.getElementById("output").innerHTML="";
}
