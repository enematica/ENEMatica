let ordemOriginal = [];
let jaOrganizado = false;


/* =====================================
   COMPACTA ALTERNATIVAS COM IMAGEM
===================================== */

function ajustarAlternativasComImagem() {

    document.querySelectorAll(".containerquestion").forEach(questao => {

        const imagem = questao.querySelector(".bodyquestion img");

        if (!imagem) return;


        const largura = imagem.getBoundingClientRect().width;


        if (largura > 0 && largura < 220) {

            questao.classList.add("alternativas-compactas");

        }

    });

}



/* =====================================
   PREPARA IMPRESSÃO
===================================== */

function prepararImpressao() {


    if (jaOrganizado) return;


    const pagina = document.getElementById("pagina");

    if (!pagina) return;



    const questoes = Array.from(
        pagina.querySelectorAll(".containerquestion")
    );



    // salva posição EXATA de cada questão

    ordemOriginal = questoes.map(q => ({

        elemento: q,

        pai: q.parentNode,

        proximo: q.nextSibling

    }));



    // reorganiza

    questoes.sort((a,b)=>{

        return (
            a.getBoundingClientRect().height -
            b.getBoundingClientRect().height
        );

    });



    questoes.forEach(q => {

        pagina.appendChild(q);

    });



    ajustarAlternativasComImagem();



    const mensagem = document.getElementById(
        "mensagem-final-prova"
    );


    if (mensagem) {

        mensagem.style.display = "none";

    }



    jaOrganizado = true;

}



/* =====================================
   VOLTA AO NORMAL
===================================== */

function restaurarPagina() {


    if (!jaOrganizado) return;



    ordemOriginal.forEach(item => {


        if (item.proximo && item.proximo.parentNode === item.pai) {

            item.pai.insertBefore(
                item.elemento,
                item.proximo
            );


        } else {

            item.pai.appendChild(
                item.elemento
            );

        }


    });



    document.querySelectorAll(
        ".alternativas-compactas"
    ).forEach(q=>{

        q.classList.remove(
            "alternativas-compactas"
        );

    });



    const mensagem = document.getElementById(
        "mensagem-final-prova"
    );


    if (mensagem) {

        mensagem.style.display = "";

    }



    ordemOriginal = [];

    jaOrganizado = false;


}



/* =====================================
   EVENTOS
===================================== */


window.addEventListener(
    "beforeprint",
    prepararImpressao
);


window.addEventListener(
    "afterprint",
    restaurarPagina
);



/*
 fallback:
 alguns navegadores não chamam afterprint
 quando cancela
*/

window.addEventListener(
    "focus",
    function(){

        if (jaOrganizado) {

            setTimeout(
                restaurarPagina,
                300
            );

        }

    }
);