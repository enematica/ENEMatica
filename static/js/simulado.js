var resposta = [];
var links = [];
var contagem_de_acertos = 0;
var tempo_por_questoes = [];
var quantidade_de_questoes = [];

// Função de envio das respostas para a correção, após enviada será corrigido e apresentado os resultados e os vídeos
function Responder() {

  // Apresentação dos vídeos 
  var contagem_videos
  var videos = document.getElementsByClassName("QuestionOptions");
  for (contagem_videos = 0; contagem_videos < quantidade_de_questoes; contagem_videos++) {
    videos[contagem_videos].removeAttribute("hidden");
  }

  // Apresentação das respostas corrigidas
  var contagem_questoes
  for (contagem_questoes = 0; contagem_questoes < quantidade_de_questoes; contagem_questoes++) {
    var radio = document.querySelector('input[name="radio'+String(contagem_questoes+1)+'"]:checked').value;
    if (radio == resposta[contagem_questoes]) {
      document.getElementById("certoform"+String(contagem_questoes+1)).removeAttribute("hidden");
      document.getElementById("errorform"+String(contagem_questoes+1)).setAttribute("hidden", "hidden");
      contagem_de_acertos = contagem_de_acertos + 1
    }
    else {
      document.getElementById("errorform"+String(contagem_questoes+1)).removeAttribute("hidden");
      document.getElementById("certoform"+String(contagem_questoes+1)).setAttribute("hidden", "hidden");
    }
  }
  document.getElementById("responder").disabled = true;
  document.getElementById("responder").style.backgroundColor = "#c2c2a3";
  document.getElementById("responder").style.borderColor = "#c2c2a3";
  document.getElementById("respostascertas").innerHTML = `<br><strong style="font-size: 25px; color: green; margin-left: 20px;">${"Acertos: " + contagem_de_acertos + " de " + quantidade_de_questoes}</strong><br><br><br>`;
  pause()

  // Subida para o topo da página
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Função para apresentar os vídeos
function MostrarVideo(num) {
  document.querySelector('#videoYt').src = links[Number(num)];
}

// Função para parar um video
function StopVideo(){
  document.querySelector('#videoYt').src = "";
}

// Conjunto do cronômetro da prova
let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let passando;

if ((tempo_por_questoes*quantidade_de_questoes) >= 3600) {
  var max_horas = parseInt((tempo_por_questoes*quantidade_de_questoes)/3600)
} else {
  var max_horas = 0
}

function start() {
  pause();
  passando = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(passando);
}

function timer() {
  if ((milisegundo += 10) == 1000) {
    milisegundo = 0;
    segundo++;
  }
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }
  if (minuto == 60) {
    minuto = 0;
    hora++;
  }
  if ((minuto == tempo_por_questoes*quantidade_de_questoes/60-max_horas) && (hora == max_horas) && (segundo == 1)) {
    Responder()
  }
  document.getElementById('hora').innerText = returnData(hora);
  document.getElementById('minuto').innerText = returnData(minuto);
  document.getElementById('segundo').innerText = returnData(segundo);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}

// Função de enviar os dados incluíndo a quntidade de questões e o tempo 
function EnviarDadosNovo(){
  var valoreselecionados = [];
  var somadosvalores = '';
  for(var option of document.getElementById('conteudos').options){
      if(option.selected){
          valoreselecionados.push(option.value)
      }
  }
  for(var x=0;x<valoreselecionados.length;x++){
      somadosvalores += valoreselecionados[x];
  }
  document.getElementById('conteudos2').value = valoreselecionados;

  var valoreselecionados2 = [];
  var somadosvalores2 = '';
  for(var option of document.getElementById('anos').options){
      if(option.selected){
          valoreselecionados2.push(option.value)
      }
  }
  for(var y=0;y<valoreselecionados2.length;y++){
      somadosvalores2 += valoreselecionados2[y];
  }
  document.getElementById('anos2').value = valoreselecionados2;

  var valoreselecionados3 = [];
  var somadosvalores3 = '';
  for(var option of document.getElementById('dificuldades').options){
      if(option.selected){
          valoreselecionados3.push(option.value)
      }
  }
  for(var z=0;z<valoreselecionados3.length;z++){
      somadosvalores3 += valoreselecionados3[z];
  }
  document.getElementById('dificuldades2').value = valoreselecionados3;

  var valoreselecionados4 = [];
  var somadosvalores4 = '';
  for(var option of document.getElementById('quant_questoes').options){
      if(option.selected){
          valoreselecionados4.push(option.value)
      }
  }
  for(var z=0;z<valoreselecionados4.length;z++){
      somadosvalores4 += valoreselecionados4[z];
  }
  document.getElementById('quant_questoes2').value = valoreselecionados4;

  var valoreselecionados5 = [];
  var somadosvalores5 = '';
  for(var option of document.getElementById('tempo').options){
      if(option.selected){
          valoreselecionados5.push(option.value)
      }
  }
  for(var z=0;z<valoreselecionados5.length;z++){
      somadosvalores5 += valoreselecionados5[z];
  }
  document.getElementById('tempo2').value = valoreselecionados5;
}

// Função que faz a prova e o cronômetro aparecer e todo o resto desnecessário sumir além de iniciar o cronômetro
function Apresentar() {
  document.getElementById("cronus").classList.remove('display_none');
  document.getElementById("pagina").classList.remove('display_none');
  document.getElementById("cabecalho_pos_filtros").classList.remove('display_none');
  document.getElementById("filtro").classList.add('display_none');
  document.getElementById("apr").classList.add('display_none');
  start()
}
