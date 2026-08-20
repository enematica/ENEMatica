//Function that opens the sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.querySelector("body").style.overflow = 'hidden';
}

//Funcion that closes the sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector("body").style.overflow = 'scroll';
}


//Taking the images present in the body
let elementos = document.querySelectorAll('.bodyquestion img');
let elementos2 = [];
for(var g = 0; g<elementos.length;g++){
    elementos2.push(elementos[g].width);
}
//Function that happens when the page is loaded
window.onload = function () {
    //Adjusting the images width
    var verify_questao = document.querySelector('#questao') !== null;
    if(verify_questao == true){
        let corpo = document.querySelector('#questao').clientWidth;
        for(var y=0; y<elementos.length; y++) {
            if(elementos2[y] > corpo || corpo-elementos2[y]<20){
                elementos[y].setAttribute('width', '100%'); 
                elementos[y].setAttribute('height', '100%'); 
            }
        }
    
    }
    //Adjusting the paginator width
    var selection = document.querySelector('.selecionado') !== null;
    if(selection == true){
        let corpo = document.querySelector('#questao').clientWidth;
        let selecionado = document.querySelector('.selecionado').id;
        if(corpo <= 400){
            let numbers = [document.querySelector('#listafacil'+(parseInt(selecionado)+2).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)+3).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)-3).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)-2).toString())];
            for(number of numbers){
                if(number != null){
                    number.style.display = 'none';
                }
            }
        }
    }

//Function that happens when the page is resized
window.addEventListener('resize', function () {
    //Adjusting the images width
    var verify_questao = document.querySelector('#questao') !== null;
    if(verify_questao == true){
        let corpo = document.querySelector('#questao').clientWidth;
        for(var y=0; y<elementos.length; y++) {
            if(elementos2[y] > corpo || corpo-elementos2[y]<20){
                elementos[y].setAttribute('width', '100%'); 
                elementos[y].setAttribute('height', '100%'); 
            }
            else{
                elementos[y].removeAttribute('width'); 
                elementos[y].removeAttribute('height');
            }
        }
    }

    //Adjusting the paginator width
    var selection = document.querySelector('.selecionado') !== null;
    if(selection == true){
        let selecionado = document.querySelector('.selecionado').id;
        let corpo = document.querySelector('#questao').clientWidth;
        if(corpo <= 400){
            let numbers = [document.querySelector('#listafacil'+(parseInt(selecionado)+2).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)+3).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)-3).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)-2).toString())];
            for(number of numbers){
                if(number != null){
                    number.style.display = 'none';
                }
            }
        }
        else{
            let numbers = [document.querySelector('#listafacil'+(parseInt(selecionado)+2).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)+3).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)-3).toString()), document.querySelector('#listafacil'+(parseInt(selecionado)-2).toString())];
            for(number of numbers){
                if(number != null){
                    number.style.display = 'block';
                }
            }
        }
    }
})}

new MultiSelectTag('conteudos', {
    rounded: true,    // default true
    shadow: true,      // default false
    placeholder: 'Pesquisar',  // default Search...
    onChange: function(values) {
        console.log(values)
    }
})
    new MultiSelectTag('anos',{
        rounded: true,
        shadow: true,
        placeholder: 'Pesquisar',
        onChange: function(values){
            console.log(values)
        }
    })
    new MultiSelectTag('dificuldades',{
        rounded:true,
        shadow:true,
        placeholder: 'Pesquisar',
        onChange: function(values){
            console.log(values)
        }
    })
function EnviarDados(){
    var valoreselecionados = [];
    var somadosvalores = '';
    for(var option of document.getElementById('conteudos').options){
        if(option.selected){
            valoreselecionados.push(option.value)
        }
    }
    console.log(valoreselecionados)
    for(var x=0;x<valoreselecionados.length;x++){
        somadosvalores += valoreselecionados[x];
    }
    document.getElementById('conteudos2').value = valoreselecionados

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
    document.getElementById('anos2').value = valoreselecionados2

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
    document.getElementById('dificuldades2').value = valoreselecionados3
}


function toggleNavbar() {
    const nav = document.getElementById("navHome");
    const btn = document.getElementById("toggleNavbarBtn");

    const navVisible = !nav.classList.contains("hide-navbar");

    if (navVisible) {
        nav.classList.add("hide-navbar");
        btn.classList.add("navbar-hidden-btn");

        document.body.classList.add("navbar-escondida");
        document.body.style.paddingTop = "0";

    } else {
        nav.classList.remove("hide-navbar");
        btn.classList.remove("navbar-hidden-btn");

        document.body.classList.remove("navbar-escondida");
        document.body.style.paddingTop = "60px";
    }
}

document.body.style.paddingTop = "60px";

function Expandir() {
    const tamanhos = document.querySelectorAll(".containerquestion");
    const imagensExpandir = document.querySelectorAll(".img-expandir");
    const botoes = document.querySelectorAll(".botao-expandir");

    if (!tamanhos.length) {
        return;
    }

    const expandido = tamanhos[0].dataset.expandido === "true";

    if (!expandido) {
        tamanhos.forEach(tamanho => {
            tamanho.style.maxWidth = "2000px";
            tamanho.style.fontSize = "12px";

            const imagens = tamanho.querySelectorAll(".bodyquestion img");

            imagens.forEach(imagem => {
                imagem.style.maxWidth = "300px";
                imagem.style.height = "auto";
            });

            const alternativas = tamanho.querySelector(".answerquestion form");

            if (alternativas) {
                alternativas.classList.add("alternativas-expandidas");

                alternativas.querySelectorAll("br").forEach(br => {
                    br.dataset.alternativa = "true";
                    br.style.display = "none";
                });
            }

            tamanho.dataset.expandido = "true";
        });

        imagensExpandir.forEach(imagem => {
            imagem.src = imagem.dataset.expandido;
        });

        botoes.forEach(botao => {
            botao.dataset.expandido = "true";
            // Pega o texto configurado na imagem ou usa 'Recolher' como padrão
            const img = botao.querySelector('.img-expandir');
            botao.title = img?.dataset.titleExpandido || "Recolher";
        });
    } else {
        tamanhos.forEach(tamanho => {
            tamanho.style.maxWidth = "920px";
            tamanho.style.fontSize = "";

            const imagens = tamanho.querySelectorAll(".bodyquestion img");

            imagens.forEach(imagem => {
                imagem.style.maxWidth = "";
                imagem.style.height = "";
            });

            const alternativas = tamanho.querySelector(".answerquestion form");

            if (alternativas) {
                alternativas.classList.remove("alternativas-expandidas");

                alternativas
                    .querySelectorAll("br[data-alternativa='true']")
                    .forEach(br => {
                        br.style.display = "";
                        delete br.dataset.alternativa;
                    });
            }

            tamanho.dataset.expandido = "false";
        });

        imagensExpandir.forEach(imagem => {
            imagem.src = imagem.dataset.normal;
        });

        botoes.forEach(botao => {
            botao.dataset.expandido = "false";
            // Pega o texto configurado na imagem ou usa 'Expandir' como padrão
            const img = botao.querySelector('.img-expandir');
            botao.title = img?.dataset.titleNormal || "Expandir";
        });
    }
}

let rascunhoAtual = null;

function abrirRascunho(botao) {
    const questao = botao.closest(".containerquestion");
    const container = questao.querySelector(".rascunho-container");
    const canvas = container.querySelector(".rascunho-canvas");

    container.classList.add("ativo");

    canvas.width = questao.clientWidth;
    canvas.height = questao.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.lineCap = "round";
    contexto.lineJoin = "round";

    const estado = {
        canvas: canvas,
        contexto: contexto,
        desenhando: false,
        ferramenta: "caneta",
        cor: "#000000",
        espessura: 3,
        historico: [],
        futuro: [],
        eventosAdicionados: false
    };

    container._rascunho = estado;
    rascunhoAtual = estado;

    adicionarEventosCanvas(estado);
    salvarEstado(estado);
}

function adicionarEventosCanvas(estado) {
    if (estado.eventosAdicionados) {
        return;
    }

    estado.eventosAdicionados = true;

    const canvas = estado.canvas;
    const questao = canvas.closest(".containerquestion");

    questao.addEventListener("pointerdown", function (evento) {
        if (
            evento.target.closest(".rascunho-toolbar") ||
            evento.target.closest("button") ||
            evento.target.closest("input") ||
            evento.target.closest("label") ||
            evento.target.closest("a")
        ) {
            return;
        }

        estado.desenhando = true;

        const posicao = obterPosicao(canvas, evento);

        estado.contexto.beginPath();
        estado.contexto.moveTo(posicao.x, posicao.y);
    });

    questao.addEventListener("pointermove", function (evento) {
        if (!estado.desenhando) {
            return;
        }

        const posicao = obterPosicao(canvas, evento);

        estado.contexto.lineTo(posicao.x, posicao.y);

        if (estado.ferramenta === "borracha") {
            estado.contexto.globalCompositeOperation = "destination-out";
            estado.contexto.strokeStyle = "rgba(0, 0, 0, 1)";
            estado.contexto.lineWidth = estado.espessura * 4;

        } else if (estado.ferramenta === "marcatexto") {
            estado.contexto.globalCompositeOperation = "source-over";
            estado.contexto.strokeStyle = estado.cor;
            estado.contexto.lineWidth = estado.espessura * 4;
            estado.contexto.globalAlpha = 0.03;

        } else {
            estado.contexto.globalCompositeOperation = "source-over";
            estado.contexto.strokeStyle = estado.cor;
            estado.contexto.lineWidth = estado.espessura;
            estado.contexto.globalAlpha = 1;
        }

        estado.contexto.stroke();
    });

    questao.addEventListener("pointerup", function () {
        finalizarDesenho(estado);
    });

    questao.addEventListener("pointercancel", function () {
        finalizarDesenho(estado);
    });
}

function finalizarDesenho(estado) {
    if (!estado.desenhando) {
        return;
    }

    estado.desenhando = false;

    estado.contexto.closePath();
    estado.contexto.globalCompositeOperation = "source-over";
    estado.contexto.globalAlpha = 1;

    salvarEstado(estado);
}

function obterPosicao(canvas, evento) {
    const rect = canvas.getBoundingClientRect();

    return {
        x: (evento.clientX - rect.left) * (canvas.width / rect.width),
        y: (evento.clientY - rect.top) * (canvas.height / rect.height)
    };
}

function selecionarFerramenta(botao, ferramenta) {
    const container = botao.closest(".rascunho-container");

    if (!container || !container._rascunho) {
        return;
    }

    container._rascunho.ferramenta = ferramenta;

    const botoes = container.querySelectorAll(
        ".rascunho-toolbar button"
    );

    botoes.forEach(function (item) {
        item.classList.remove("ferramenta-ativa");
    });

    botao.classList.add("ferramenta-ativa");
}

function mudarCor(input) {
    const container = input.closest(".rascunho-container");

    if (!container || !container._rascunho) {
        return;
    }

    container._rascunho.cor = input.value;
    container._rascunho.ferramenta = "caneta";
}

function mudarEspessura(input) {
    const container = input.closest(".rascunho-container");

    if (!container || !container._rascunho) {
        return;
    }

    container._rascunho.espessura = Number(input.value);
}

function salvarEstado(estado) {
    const imagem = estado.contexto.getImageData(
        0,
        0,
        estado.canvas.width,
        estado.canvas.height
    );

    estado.historico.push(imagem);

    if (estado.historico.length > 50) {
        estado.historico.shift();
    }

    estado.futuro = [];
}

function desfazer(botao) {
    const container = botao.closest(".rascunho-container");

    if (!container || !container._rascunho) {
        return;
    }

    const estado = container._rascunho;

    if (estado.historico.length <= 1) {
        return;
    }

    const estadoAtual = estado.historico.pop();

    estado.futuro.push(estadoAtual);

    const estadoAnterior =
        estado.historico[estado.historico.length - 1];

    estado.contexto.putImageData(estadoAnterior, 0, 0);
}

function refazer(botao) {
    const container = botao.closest(".rascunho-container");

    if (!container || !container._rascunho) {
        return;
    }

    const estado = container._rascunho;

    if (estado.futuro.length === 0) {
        return;
    }

    const proximoEstado = estado.futuro.pop();

    estado.historico.push(proximoEstado);

    estado.contexto.putImageData(
        proximoEstado,
        0,
        0
    );
}

function limparRascunho(botao) {
    const container = botao.closest(".rascunho-container");

    if (!container || !container._rascunho) {
        return;
    }

    const estado = container._rascunho;

    estado.contexto.clearRect(
        0,
        0,
        estado.canvas.width,
        estado.canvas.height
    );

    estado.contexto.globalCompositeOperation = "source-over";

    salvarEstado(estado);
}

function fecharRascunho(botao) {
    const container = botao.closest(".rascunho-container");

    if (!container || !container._rascunho) {
        return;
    }

    const estado = container._rascunho;

    estado.desenhando = false;

    estado.contexto.clearRect(
        0,
        0,
        estado.canvas.width,
        estado.canvas.height
    );

    estado.contexto.globalCompositeOperation = "source-over";

    container.classList.remove("ativo");

    estado.historico = [];
    estado.futuro = [];

    rascunhoAtual = null;
}

window.addEventListener("resize", function () {
    document.querySelectorAll(".containerquestion").forEach(function (questao) {
        const container = questao.querySelector(".rascunho-container");

        if (!container || !container.classList.contains("ativo")) {
            return;
        }

        const estado = container._rascunho;

        if (!estado) {
            return;
        }

        const imagemAtual = estado.contexto.getImageData(
            0,
            0,
            estado.canvas.width,
            estado.canvas.height
        );

        estado.canvas.width = questao.clientWidth;
        estado.canvas.height = questao.clientHeight;

        estado.contexto.lineCap = "round";
        estado.contexto.lineJoin = "round";

        estado.contexto.putImageData(imagemAtual, 0, 0);
    });
    
});