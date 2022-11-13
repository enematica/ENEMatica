
    /variável que acopla as respostas depois do loop no html/
    var resposta = [];

    /função de resposta da primeira questão do loop / 
    function ResponderOne() {
        var radio = document.querySelector('input[name="radio"]:checked').value;
        if (radio == resposta[0]) {
            document.getElementById("certoform1").removeAttribute("hidden");
            document.getElementById("errorform1").setAttribute("hidden", "hidden");
            document.getElementById("responder").disabled = true;
        }
        else {
            document.getElementById("errorform1").removeAttribute("hidden");
            document.getElementById("certoform1").setAttribute("hidden", "hidden");
        }
            
    }

    /função de resposta da segunda questão do loop / 
    function ResponderTwo() {
        var radio = document.querySelector('input[name="radio2"]:checked').value;
        if (radio == resposta[1]) {
            document.getElementById("certoform2").removeAttribute("hidden");
            document.getElementById("errorform2").setAttribute("hidden", "hidden");
            document.getElementById("responder2").disabled = true;
        }
        else {
            document.getElementById("errorform2").removeAttribute("hidden");
            document.getElementById("certoform2").setAttribute("hidden", "hidden");
        }
        
    }


    /função de resposta da terceira questão do loop / 
    function ResponderThree() {
        var radio = document.querySelector('input[name="radio3"]:checked').value;
        if (radio == resposta[2]) {
            document.getElementById("certoform3").removeAttribute("hidden");
            document.getElementById("errorform3").setAttribute("hidden", "hidden");
            document.getElementById("responder3").disabled = true;
        }
        else {
            document.getElementById("errorform3").removeAttribute("hidden");
            document.getElementById("certoform3").setAttribute("hidden", "hidden");
        }
        
    }

    /função que mostra o vídeo da primeira questão do loop / 
    function mostrarVideo1() {
        var botao = document.getElementById("video1").hasAttribute("hidden");
        if (botao == true) {
            document.getElementById("video1").removeAttribute("hidden");
        }
        else {
            document.getElementById("video1").setAttribute("hidden", "hidden");
        }
    }

    /função que mostra o vídeo da segunda questão do loop / 
    function mostrarVideo2() {
        var botao = document.getElementById("video2").hasAttribute("hidden");
        if (botao == true) {
            document.getElementById("video2").removeAttribute("hidden");
        }
        else {
            document.getElementById("video2").setAttribute("hidden", "hidden");
        }
    }

    /função que mostra o vídeo da terceira questão do loop / 
    function mostrarVideo3() {
        var botao = document.getElementById("video3").hasAttribute("hidden");
        if (botao == true) {
            document.getElementById("video3").removeAttribute("hidden");
        }
        else {
            document.getElementById("video3").setAttribute("hidden", "hidden");
        }
    }
