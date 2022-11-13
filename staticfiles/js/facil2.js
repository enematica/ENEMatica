    /variáveis para as funções do filtro ano / 
    const wrapper = document.querySelector("#wrapper1");
    selectBtn = wrapper.querySelector("#select-btn1");
    searchInp = wrapper.querySelector("input");
    options = wrapper.querySelector("#options1");

    let anos = ["2018", "2019", "2020", "2021"];

    /função que seleciona o que foi clicado / 
    function addAno(selectedAno) {
        options.innerHTML = "";
        anos.forEach(ano => {
            let isSelected = ano == selectedAno ? "selected" : "";
            let li = `<li onclick="updateName(this)" name="anos" id="${ano}" value="${ano}" class="${isSelected}">${ano}</li>`;
            options.insertAdjacentHTML("beforeend", li);
            document.getElementById("anos").value = selectedAno;
        });
    }
    addAno();

    /função que verifica se o botão está ativo / 
    function updateName(selectedLi) {
        searchInp.value = "";
        addAno(selectedLi.innerText);
        wrapper.classList.remove("active");
        selectBtn.firstElementChild.innerText = selectedLi.innerText;
    }

    /função que permite pesquisar no botão e selecionar as opções pela pesquisa / 
    searchInp.addEventListener("keyup", () => {
        let arr = [];
        let searchWord = searchInp.value.toLowerCase();
        arr = anos.filter(data => {
            return data.toLowerCase().startsWith(searchWord);
        }).map(data => {
            let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
            document.getElementById("anos").value = data;
            return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
        }).join("");
        options.innerHTML = arr ? arr : `<p style="margin-top: 10px;" class="ps">Ano não encontrado!</p>`;
    });

    /funções que acontecem quando o botão é clicado / 
    selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
    selectBtn.addEventListener("click", () => wrapper2.classList.remove("active"));
    selectBtn.addEventListener("click", () => wrapper3.classList.remove("active"));
    selectBtn.addEventListener("click", () => document.getElementById("content1").removeAttribute("hidden"));
    selectBtn.addEventListener("click", () => document.getElementById("content2").setAttribute("hidden", "hidden"));
    selectBtn.addEventListener("click", () => document.getElementById("content3").setAttribute("hidden", "hidden"));


    /variáveis para as funções do filtro dificuldade / 
    const wrapper2 = document.querySelector("#wrapper2");
    selectBtn2 = wrapper2.querySelector("#select-btn2");
    searchInp2 = wrapper2.querySelector("input");
    options2 = wrapper2.querySelector("#options2");

    let dificuldades = ["Fácil", "Médio", "Difícil"];

    /função que seleciona o que foi clicado /
    function addDificuldade(selectedDificuldade) {
        options2.innerHTML = "";
        dificuldades.forEach(dificuldade => {
            let isSelected = dificuldade == selectedDificuldade ? "selected" : "";
            let li = `<li onclick="updateName2(this)" name="dificuldade" id="${dificuldade}" value="${dificuldade}" class="${isSelected}">${dificuldade}</li>`;
            options2.insertAdjacentHTML("beforeend", li);
            document.getElementById("dificuldade").value = selectedDificuldade;
        });
    }
    addDificuldade();

    /função que verifica se o botão está ativo /
    function updateName2(selectedLi) {
        searchInp2.value = "";
        addDificuldade(selectedLi.innerText);
        wrapper2.classList.remove("active");
        selectBtn2.firstElementChild.innerText = selectedLi.innerText;
    }

    /função que permite pesquisar no botão e selecionar as opções pela pesquisa /
    searchInp2.addEventListener("keyup", () => {
        let arr = [];
        let searchWord = searchInp2.value.toLowerCase();
        arr = dificuldades.filter(data => {
            return data.toLowerCase().startsWith(searchWord);
        }).map(data => {
            let isSelected = data == selectBtn2.firstElementChild.innerText ? "selected" : "";
            document.getElementById("dificuldade").value = data;
            return `<li onclick="updateName2(this)" class="${isSelected}">${data}</li>`;
        }).join("");
        options2.innerHTML = arr ? arr : `<p style="margin-top: 10px;" class="ps">Dificuldade não encontrada!</p>`;
    });

    /funções que acontecem quando o botão é clicado / 
    selectBtn2.addEventListener("click", () => wrapper2.classList.toggle("active"));
    selectBtn2.addEventListener("click", () => wrapper.classList.remove("active"));
    selectBtn2.addEventListener("click", () => wrapper3.classList.remove("active"));
    selectBtn2.addEventListener("click", () => document.getElementById("content2").removeAttribute("hidden"));
    selectBtn2.addEventListener("click", () => document.getElementById("content1").setAttribute("hidden", "hidden"));
    selectBtn2.addEventListener("click", () => document.getElementById("content3").setAttribute("hidden", "hidden"));

    /variáveis para as funções do filtro conteudo /
    const wrapper3 = document.querySelector("#wrapper3");
    selectBtn3 = wrapper3.querySelector("#select-btn3");
    searchInp3 = wrapper3.querySelector("input");
    options3 = wrapper3.querySelector("#options3");

    let conteudos = ["Análise combinatória", "Aritmética", "Conjuntos", "Contagem", "Conversão de Unidades", "Estatística (análise de gráficos)", "Estatística (média aritmética)", "Estatística (média ponderada)", "Estatística (mediana)", "Estatística (moda)", "Funcão do 1° grau", "Função exponencial", "Funções - análise de gráfico", "Geometria analítica", "Geometria espacial", "Geometria plana", "Inequações", "Logarítmo", "Matemática financeira", "Matrizes", "Notação científica", "Porcentagem", "Potenciação", "Probabilidade", "Progressão aritmética", "Projeção ortogonal", "Razão e proporção", "Regra de três", "Sequências", "Trigonometria"];

    /função que seleciona o que foi clicado /
    function addConteudo(selectedConteudo) {
        options3.innerHTML = "";
        conteudos.forEach(conteudo => {
            let isSelected = conteudo == selectedConteudo ? "selected" : "";
            let li = `<li onclick="updateName3(this)" name="conteudo" id="${conteudo}" value="${conteudo}" class="${isSelected}">${conteudo}</li>`;
            options3.insertAdjacentHTML("beforeend", li);
            document.getElementById("conteudo").value = selectedConteudo;
        });
    }
    addConteudo();

    /função que verifica se o botão está ativo / 
    function updateName3(selectedLi) {
        searchInp3.value = "";
        addConteudo(selectedLi.innerText);
        wrapper3.classList.remove("active");
        selectBtn3.firstElementChild.innerText = selectedLi.innerText;
    }

    /função que permite pesquisar no botão e selecionar as opções pela pesquisa /
    searchInp3.addEventListener("keyup", () => {
        let arr = [];
        let searchWord = searchInp3.value.toLowerCase();
        arr = conteudos.filter(data => {
            return data.toLowerCase().startsWith(searchWord);
        }).map(data => {
            let isSelected = data == selectBtn3.firstElementChild.innerText ? "selected" : "";
            document.getElementById("conteudo").value = data;
            return `<li onclick="updateName3(this)" class="${isSelected}">${data}</li>`;
        }).join("");
        options3.innerHTML = arr ? arr : `<p style="margin-top: 10px;" class="ps">Conteúdo não encontrado!</p>`;
    });

    /funções que acontecem quando o botão é clicado / 
    selectBtn3.addEventListener("click", () => wrapper3.classList.toggle("active"));
    selectBtn3.addEventListener("click", () => wrapper.classList.remove("active"));
    selectBtn3.addEventListener("click", () => wrapper2.classList.remove("active"));
    selectBtn3.addEventListener("click", () => document.getElementById("content3").removeAttribute("hidden"));
    selectBtn3.addEventListener("click", () => document.getElementById("content1").setAttribute("hidden", "hidden"));
    selectBtn3.addEventListener("click", () => document.getElementById("content2").setAttribute("hidden", "hidden"));

    /---------------------------------------------------------------------------------------------------------------------/
