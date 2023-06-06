/variáveis para as funções do filtro ano / 
const wrapper = document.querySelector("#wrapper1");
selectBtn = wrapper.querySelector("#select-btn1");
options = wrapper.querySelector("#options1");

let anos = ["2018", "2019", "2020", "2021", "2022"];

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
    addAno(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

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
    addDificuldade(selectedLi.innerText);
    wrapper2.classList.remove("active");
    selectBtn2.firstElementChild.innerText = selectedLi.innerText;
}

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
options3 = wrapper3.querySelector("#options3");

let conteudos = ["Análise combinatória", "Análise dimensional", "Ângulo", "Aritmética", "Conjuntos", "Contagem", "Conversão de unidades", "Equação do 1° grau", "Equação do 2° grau","Estatística (análise de gráficos)", "Estatística (análise de tabela)","Estatística (média aritmética)", "Estatística (média ponderada)", "Estatística (mediana)", "Estatística (moda)", "Função do 1° grau", "Função exponencial", "Função trigonométrica", "Funções - análise de gráfico", "Geometria analítica", "Geometria espacial", "Geometria plana", "Inequações", "Logaritmo", "Matemática financeira", "Matrizes", "Notação científica", "Orientação espacial", "Porcentagem", "Potenciação", "Plano cartesiano", "Probabilidade", "Progressão aritmética", "Progressão geométrica", "Projeção ortogonal", "Razão e proporção", "Regra de três", "Sequências", "Sistemas lineares", "Trigonometria"];

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
    addConteudo(selectedLi.innerText);
    wrapper3.classList.remove("active");
    selectBtn3.firstElementChild.innerText = selectedLi.innerText;
}


/funções que acontecem quando o botão é clicado / 
selectBtn3.addEventListener("click", () => wrapper3.classList.toggle("active"));
selectBtn3.addEventListener("click", () => wrapper.classList.remove("active"));
selectBtn3.addEventListener("click", () => wrapper2.classList.remove("active"));
selectBtn3.addEventListener("click", () => document.getElementById("content3").removeAttribute("hidden"));
selectBtn3.addEventListener("click", () => document.getElementById("content1").setAttribute("hidden", "hidden"));
selectBtn3.addEventListener("click", () => document.getElementById("content2").setAttribute("hidden", "hidden"));

/---------------------------------------------------------------------------------------------------------------------/
