var resposta = [];
var links = [];
var contagem_de_acertos = 0;
let tempo_por_questoes = 0;
let quantidade_de_questoes = 0;
let tempo_total = 0;
let tempo_medio_por_questoes = 0


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

  // Botão de imprimir
  const printbutton = document.getElementById("printbutton");

  // Tempo total e tempo médio
  tempo_total -= tempoRestante;
  tempo_medio_por_questoes = tempo_total / quantidade_de_questoes;
  document.getElementById("responder").disabled = true;
  document.getElementById("responder").style.backgroundColor = "#c2c2a3";
  document.getElementById("responder").style.borderColor = "#c2c2a3";
    document.getElementById("respostascertas").innerHTML = `
    <div class="resultado-card">
        <div class="resultado-titulo">
            Acertos
        </div>
        <div class="resultado-valor">
            ${contagem_de_acertos}/${quantidade_de_questoes}
        </div>
    </div>
    `;

    document.getElementById("tempototal").innerHTML = `
    <div class="resultado-card">
        <div class="resultado-titulo">
            Tempo Total
        </div>
        <div class="resultado-valor">
            ${formatarTempo(tempo_total).texto}
        </div>
    </div>
    `;

    document.getElementById("tempomedio").innerHTML = `
    <div class="resultado-card">
        <div class="resultado-titulo">
            Tempo Médio p/ Questão
        </div>
        <div class="resultado-valor">
            ${formatarTempo(Math.round(tempo_medio_por_questoes)).texto}
        </div>
    </div>
    `;
    document.getElementById("temporestante").innerHTML = `
    <div class="resultado-card resultado-restante">
        <div class="resultado-titulo">
            Tempo Restante
        </div>
        <div class="resultado-valor">
            ${formatarTempo(tempoRestante).texto}
        </div>
    </div>
    `;
  pararCronometro()
  cronus.style.display = "none";
  printbutton.style.marginTop = "0px";

  // Subida para o topo da página
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Função para apresentar os vídeos
function MostrarVideo(num) {
  document.querySelector('#videoYt').src = links[Number(num)-1];
}

// Função para parar um video
function StopVideo(){
  document.querySelector('#videoYt').src = "";
}


function formatarTempo(totalSegundos) {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    return {
        horas: String(horas).padStart(2, "0"),
        minutos: String(minutos).padStart(2, "0"),
        segundos: String(segundos).padStart(2, "0"),
        texto: `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
    };
}

// Conjunto do cronômetro da prova
let tempoRestante = 0;
let intervalo;

function iniciarCronometro() {
    tempoRestante = tempo_por_questoes * quantidade_de_questoes;
    tempo_total = tempoRestante;
    atualizarCronometro();

    intervalo = setInterval(function () {

        tempoRestante--;

        atualizarCronometro();

        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            Responder();
        }

    }, 1000);
}

function pararCronometro() {
    clearInterval(intervalo);
}

function atualizarCronometro() {

    const tempo = formatarTempo(tempoRestante);

    document.getElementById("hora").innerHTML = tempo.horas;
    document.getElementById("minuto").innerHTML = tempo.minutos;
    document.getElementById("segundo").innerHTML = tempo.segundos;
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
  const apr = document.getElementById("apr");
  if (apr) {
      apr.classList.add("display_none");
  }
  iniciarCronometro();
}
