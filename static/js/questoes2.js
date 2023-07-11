//Arrays that receive the questions answer and links
var resposta = [];
var links = [];
//Answer function to the first question in the page
function ResponderOne() {
  var radio = document.querySelector('input[name="radio"]:checked').value;
  if (radio == resposta[0]) {
      document.getElementById("certoform1").removeAttribute("hidden");
      document.getElementById("errorform1").setAttribute("hidden", "hidden");
      document.getElementById("responder").disabled = true;
      document.getElementById("responder").style.backgroundColor = "#c2c2a3";
      document.getElementById("responder").style.borderColor = "#c2c2a3";
      document.getElementById('responder').addEventListener('mouseover',() => {
        document.getElementById("responder").style.cursor = 'default';
        document.getElementById("responder").style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
    });

  }
  else {
      document.getElementById("errorform1").removeAttribute("hidden");
      document.getElementById("certoform1").setAttribute("hidden", "hidden");
  }
  
}

//Answer function to the second question in the page
function ResponderTwo() {
  var radio = document.querySelector('input[name="radio2"]:checked').value;
  if (radio == resposta[1]) {
      document.getElementById("certoform2").removeAttribute("hidden");
      document.getElementById("errorform2").setAttribute("hidden", "hidden");
      document.getElementById("responder2").disabled = true;
      document.getElementById("responder2").style.backgroundColor = "#c2c2a3";
      document.getElementById("responder2").style.borderColor = "#c2c2a3";
      document.getElementById('responder2').addEventListener('mouseover',() => {
        document.getElementById("responder2").style.cursor = 'default';
        document.getElementById("responder2").style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
    });

  }
  else {
      document.getElementById("errorform2").removeAttribute("hidden");
      document.getElementById("certoform2").setAttribute("hidden", "hidden");
  }

}


//Answer function to the third question in the page 
function ResponderThree() {
  var radio = document.querySelector('input[name="radio3"]:checked').value;
  if (radio == resposta[2]) {
      document.getElementById("certoform3").removeAttribute("hidden");
      document.getElementById("errorform3").setAttribute("hidden", "hidden");
      document.getElementById("responder3").disabled = true;
      document.getElementById("responder3").style.backgroundColor = "#c2c2a3";
      document.getElementById("responder3").style.borderColor = "#c2c2a3";
      document.getElementById('responder3').addEventListener('mouseover',() => {
        document.getElementById("responder3").style.cursor = 'default';
        document.getElementById("responder3").style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
    });

  }
  else {
      document.getElementById("errorform3").removeAttribute("hidden");
      document.getElementById("certoform3").setAttribute("hidden", "hidden");
  }

}

//Answer function to the fourth question in the page
function ResponderFour() {
  var radio = document.querySelector('input[name="radio4"]:checked').value;
  if (radio == resposta[3]) {
      document.getElementById("certoform4").removeAttribute("hidden");
      document.getElementById("errorform4").setAttribute("hidden", "hidden");
      document.getElementById("responder4").disabled = true;
      document.getElementById("responder4").style.backgroundColor = "#c2c2a3";
      document.getElementById("responder4").style.borderColor = "#c2c2a3";
      document.getElementById('responder4').addEventListener('mouseover',() => {
        document.getElementById("responder4").style.cursor = 'default';
        document.getElementById("responder4").style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
    });

  }
  else {
      document.getElementById("errorform4").removeAttribute("hidden");
      document.getElementById("certoform4").setAttribute("hidden", "hidden");
  }

}

//Answer function to the fifth question in the page
function ResponderFive() {
  var radio = document.querySelector('input[name="radio5"]:checked').value;
  if (radio == resposta[4]) {
      document.getElementById("certoform5").removeAttribute("hidden");
      document.getElementById("errorform5").setAttribute("hidden", "hidden");
      document.getElementById("responder5").disabled = true;
      document.getElementById("responder5").style.backgroundColor = "#c2c2a3";
      document.getElementById("responder5").style.borderColor = "#c2c2a3";
      document.getElementById('responder5').addEventListener('mouseover',() => {
        document.getElementById("responder5").style.cursor = 'default';
        document.getElementById("responder5").style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
    });

  }
  else {
      document.getElementById("errorform5").removeAttribute("hidden");
      document.getElementById("certoform5").setAttribute("hidden", "hidden");
  }

}

//Functions that show the video in the modal according to the chose question
function ShowVideoOne(){
  document.querySelector('#videoYt').src = links[0];
}
function ShowVideoTwo(){
  document.querySelector('#videoYt').src = links[1];
}
function ShowVideoThree(){
  document.querySelector('#videoYt').src = links[2];
}
function ShowVideoFour(){
  document.querySelector('#videoYt').src = links[3];
}
function ShowVideoFive(){
  document.querySelector('#videoYt').src = links[4];
}

//Function that stops the running video when clicking in the x button 
function StopVideo(){
  document.querySelector('#videoYt').src = "";
}

