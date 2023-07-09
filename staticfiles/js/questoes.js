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

//Function to the select year button in the sidenav filter, when need to add year, add it in the let anos and anos2 array
const wrapper1 = document.querySelector("#wrapper1"),
selectBtn1 = wrapper1.querySelector("#select-btn1"),
searchInp1 = wrapper1.querySelector("#input1"),
options1 = wrapper1.querySelector("#options1");

let anos = ["2018","2019","2020","2021","2022","2023"];

function addAno(selectedAno) {
    options1.innerHTML = "";
    anos.forEach(ano => {
        let isSelected1 = ano == selectedAno ? "selected" : "";
        let li1 = `<li onclick="updateName1(this)" name="anos" id="${ano}" value="${ano}" class="${isSelected1}">${ano}</li>`;
        options1.insertAdjacentHTML("beforeend", li1);
        document.getElementById("anos").value = selectedAno;
    });
}
addAno();

function updateName1(selectedLi1) {
    searchInp1.value = "";
    addAno(selectedLi1.innerText);
    wrapper1.classList.remove("active");
    selectBtn1.firstElementChild.innerText = selectedLi1.innerText;
    localStorage.setItem("year2", document.querySelector("#select-btn1 span").innerHTML);
}

searchInp1.addEventListener("keyup", () => {
    let arr1 = [];
    let searchWord1 = searchInp1.value.toLowerCase();
    arr1 = anos.filter(data1 => {
        return data1.toLowerCase().startsWith(searchWord1);
    }).map(data1 => {
        let isSelected1 = data1 == selectBtn1.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName1(this)" class="${isSelected1}">${data1}</li>`;
    }).join("");
    options1.innerHTML = arr1 ? arr1 : `<p style="margin-top: 10px;">Ops! Ano não encontrado!</p>`;
});

selectBtn1.addEventListener("click", () => wrapper1.classList.toggle("active"));
selectBtn1.addEventListener("click", () => wrapper2.classList.remove("active"));
selectBtn1.addEventListener("click", () => wrapper3.classList.remove("active"));
selectBtn1.addEventListener("click", () => document.getElementById("content1").removeAttribute("hidden"));
selectBtn1.addEventListener("click", () => document.getElementById("content2").setAttribute("hidden", "hidden"));
selectBtn1.addEventListener("click", () => document.getElementById("content3").setAttribute("hidden", "hidden"));


//Function to the select difficulty button in the sidenav filter, when need to add difficulty, add it in the let difs and difs2 array
const wrapper2 = document.querySelector("#wrapper2"),
selectBtn2 = wrapper2.querySelector("#select-btn2"),
searchInp2 = wrapper2.querySelector("#input2"),
options2 = wrapper2.querySelector("#options2");

let difs = ["Fácil","Médio","Difícil"];

function addDif(selectedDif) {
    options2.innerHTML = "";
    difs.forEach(dif => {
        let isSelected2 = dif == selectedDif ? "selected" : "";
        let li2 = `<li onclick="updateName2(this)" name="dificuldade" id="${dif}" value="${dif}" class="${isSelected2}">${dif}</li>`;
        options2.insertAdjacentHTML("beforeend", li2);
        document.getElementById("dificuldade").value = selectedDif;
    });
}
addDif();

function updateName2(selectedLi2) {
    searchInp2.value = "";
    addDif(selectedLi2.innerText);
    wrapper2.classList.remove("active");
    selectBtn2.firstElementChild.innerText = selectedLi2.innerText;
    localStorage.setItem("dif2", document.querySelector("#select-btn2 span").innerHTML);
}

searchInp2.addEventListener("keyup", () => {
    let arr2 = [];
    let searchWord2 = searchInp2.value.toLowerCase();
    arr2 = difs.filter(data2 => {
        return data2.toLowerCase().startsWith(searchWord2);
    }).map(data2 => {
        let isSelected2 = data2 == selectBtn2.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName2(this)" class="${isSelected2}">${data2}</li>`;
    }).join("");
    options2.innerHTML = arr2 ? arr2 : `<p style="margin-top: 10px;">Ops! Dificuldade não encontrada!</p>`;
});

selectBtn2.addEventListener("click", () => wrapper2.classList.toggle("active"));
selectBtn2.addEventListener("click", () => wrapper1.classList.remove("active"));
selectBtn2.addEventListener("click", () => wrapper3.classList.remove("active"));
selectBtn2.addEventListener("click", () => document.getElementById("content2").removeAttribute("hidden"));
selectBtn2.addEventListener("click", () => document.getElementById("content1").setAttribute("hidden", "hidden"));
selectBtn2.addEventListener("click", () => document.getElementById("content3").setAttribute("hidden", "hidden"));

//Function to the select content button in the sidenav filter, when need to add content, add it in the let conteudos and conteudos2 array
const wrapper3 = document.querySelector("#wrapper3"),
selectBtn3 = wrapper3.querySelector("#select-btn3"),
searchInp3 = wrapper3.querySelector("#input3"),
options3 = wrapper3.querySelector("#options3");

let conteudos = ["Análise combinatória", "Análise dimensional", "Ângulo", "Aritmética", "Conjuntos", "Contagem", "Conversão de unidades", "Equação do 1° grau", "Equação do 2° grau","Estatística (análise de gráficos)", "Estatística (análise de tabela)","Estatística (média aritmética)", "Estatística (média ponderada)", "Estatística (mediana)", "Estatística (moda)", "Função do 1° grau", "Função exponencial", "Função trigonométrica", "Funções - análise de gráfico", "Geometria analítica", "Geometria espacial", "Geometria plana", "Inequações", "Logaritmo", "Matemática financeira", "Matrizes", "Notação científica", "Orientação espacial", "Porcentagem", "Potenciação", "Plano cartesiano", "Probabilidade", "Progressão aritmética", "Progressão geométrica", "Projeção ortogonal", "Razão e proporção", "Regra de três", "Sequências", "Sistemas lineares", "Trigonometria"];

function addConteudo(selectedConteudo) {
    options3.innerHTML = "";
    conteudos.forEach(conteudo => {
        let isSelected3 = conteudo == selectedConteudo ? "selected" : "";
        let li3 = `<li onclick="updateName3(this)" name="conteudo" id="${conteudo}" value="${conteudo}" class="${isSelected3}">${conteudo}</li>`;
        options3.insertAdjacentHTML("beforeend", li3);
        document.getElementById("conteudo").value = selectedConteudo;
    });
}
addConteudo();

function updateName3(selectedLi3) {
    searchInp3.value = "";
    addConteudo(selectedLi3.innerText);
    wrapper3.classList.remove("active");
    selectBtn3.firstElementChild.innerText = selectedLi3.innerText;
    localStorage.setItem("content2", document.querySelector("#select-btn3 span").innerHTML);
}

searchInp3.addEventListener("keyup", () => {
    let arr3 = [];
    let searchWord3 = searchInp3.value.toLowerCase();
    arr3 = conteudos.filter(data3 => {
        return data3.toLowerCase().startsWith(searchWord3);
    }).map(data3 => {
        let isSelected3 = data3 == selectBtn3.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName3(this)" class="${isSelected3}">${data3}</li>`;
    }).join("");
    options3.innerHTML = arr3 ? arr3 : `<p style="margin-top: 10px;">Ops! Conteúdo não encontrado!</p>`;
});

selectBtn3.addEventListener("click", () => wrapper3.classList.toggle("active"));
selectBtn3.addEventListener("click", () => wrapper1.classList.remove("active"));
selectBtn3.addEventListener("click", () => wrapper2.classList.remove("active"));
selectBtn3.addEventListener("click", () => document.getElementById("content3").removeAttribute("hidden"));
selectBtn3.addEventListener("click", () => document.getElementById("content1").setAttribute("hidden", "hidden"));
selectBtn3.addEventListener("click", () => document.getElementById("content2").setAttribute("hidden", "hidden"));

//Function to the button limpar in the sidenav filter
function limpar(){
    var verify_content2 = localStorage.getItem("content2") !== null;
    if(verify_content2 == true){
        localStorage.removeItem("content2");
    }
    var verify_dif2 = localStorage.getItem("dif2") !== null;
    if(verify_dif2 == true){
        localStorage.removeItem("dif2");
    }
    var verify_year2 = localStorage.getItem("year2") !== null;
    if(verify_year2 == true){
        localStorage.removeItem("year2");
    }
    document.querySelector("#select-btn1 span").innerHTML = "Ano";
    document.querySelector("#select-btn2 span").innerHTML = "Dificuldade";
    document.querySelector("#select-btn3 span").innerHTML = "Conteúdo";
    document.querySelector(".palavra-chave input").value = "";
    document.getElementById("conteudo").value = undefined;
    document.getElementById("dificuldade").value = undefined;
    document.getElementById("anos").value = undefined;
}

//Function to the select year button in the pc filter, when need to add year, add it in the let anos and anos2 array
const wrapper4 = document.querySelector("#wrapper4"),
selectBtn4 = wrapper4.querySelector("#select-btn4"),
searchInp4 = wrapper4.querySelector("#input4"),
options4 = wrapper4.querySelector("#options4");

let anos2 = ["2018","2019","2020","2021","2022","2023"];

function addAno2(selectedAno2) {
    options4.innerHTML = "";
    anos2.forEach(ano2 => {
        let isSelected4 = ano2 == selectedAno2 ? "selected" : "";
        let li4 = `<li onclick="updateName4(this)" name="anos" id="${ano2}" value="${ano2}" class="${isSelected4}">${ano2}</li>`;
        options4.insertAdjacentHTML("beforeend", li4);
        document.getElementById("anos2").value = selectedAno2;
    });
}
addAno2();

function updateName4(selectedLi4) {
    searchInp4.value = "";
    addAno2(selectedLi4.innerText);
    wrapper4.classList.remove("active");
    selectBtn4.firstElementChild.innerText = selectedLi4.innerText;
    localStorage.setItem("year", document.querySelector("#select-btn4 span").innerHTML);
}

searchInp4.addEventListener("keyup", () => {
    let arr4 = [];
    let searchWord4 = searchInp4.value.toLowerCase();
    arr4 = anos2.filter(data4 => {
        return data4.toLowerCase().startsWith(searchWord4);
    }).map(data4 => {
        let isSelected4 = data4 == selectBtn4.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName4(this)" class="${isSelected4}">${data4}</li>`;
    }).join("");
    options4.innerHTML = arr4 ? arr4 : `<p style="margin-top: 10px; font-size: 18px;">Ops! Ano não encontrado!</p>`;
});

selectBtn4.addEventListener("click", () => wrapper4.classList.toggle("active"));
selectBtn4.addEventListener("click", () => wrapper5.classList.remove("active"));
selectBtn4.addEventListener("click", () => wrapper6.classList.remove("active"));
selectBtn4.addEventListener("click", () => document.getElementById("content4").removeAttribute("hidden"));
selectBtn4.addEventListener("click", () => document.getElementById("content5").setAttribute("hidden", "hidden"));
selectBtn4.addEventListener("click", () => document.getElementById("content6").setAttribute("hidden", "hidden"));

//Function to the select difficulty button in the pc filter, when need to add difficulty, add it in the let difs2 and difs array
const wrapper5 = document.querySelector("#wrapper5"),
selectBtn5 = wrapper5.querySelector("#select-btn5"),
searchInp5 = wrapper5.querySelector("#input5"),
options5 = wrapper5.querySelector("#options5");

let difs2 = ["Fácil","Médio","Difícil"];

function addDif2(selectedDif2) {
    options5.innerHTML = "";
    difs2.forEach(dif2 => {
        let isSelected5 = dif2 == selectedDif2 ? "selected" : "";
        let li5 = `<li onclick="updateName5(this)" name="dificuldade" id="${dif2}" value="${dif2}" class="${isSelected5}">${dif2}</li>`;
        options5.insertAdjacentHTML("beforeend", li5);
        document.getElementById("dificuldade2").value = selectedDif2;
    });
}
addDif2();

function updateName5(selectedLi5) {
    searchInp5.value = "";
    addDif2(selectedLi5.innerText);
    wrapper5.classList.remove("active");
    selectBtn5.firstElementChild.innerText = selectedLi5.innerText;
    localStorage.setItem("dif", document.querySelector("#select-btn5 span").innerHTML);
}

searchInp5.addEventListener("keyup", () => {
    let arr5 = [];
    let searchWord5 = searchInp5.value.toLowerCase();
    arr5 = difs2.filter(data5 => {
        return data5.toLowerCase().startsWith(searchWord5);
    }).map(data5 => {
        let isSelected5 = data5 == selectBtn5.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName5(this)" class="${isSelected5}">${data5}</li>`;
    }).join("");
    options5.innerHTML = arr5 ? arr5 : `<p style="margin-top: 10px; font-size: 18px;">Ops! Dificuldade não encontrada!</p>`;
});

selectBtn5.addEventListener("click", () => wrapper5.classList.toggle("active"));
selectBtn5.addEventListener("click", () => wrapper4.classList.remove("active"));
selectBtn5.addEventListener("click", () => wrapper6.classList.remove("active"));
selectBtn5.addEventListener("click", () => document.getElementById("content5").removeAttribute("hidden"));
selectBtn5.addEventListener("click", () => document.getElementById("content4").setAttribute("hidden", "hidden"));
selectBtn5.addEventListener("click", () => document.getElementById("content6").setAttribute("hidden", "hidden"));

//Function to the select content button in the pc filter, when need to add content, add it in the let conteudos2 and conteudos array
const wrapper6 = document.querySelector("#wrapper6"),
selectBtn6 = wrapper6.querySelector("#select-btn6"),
searchInp6 = wrapper6.querySelector("#input6"),
options6 = wrapper6.querySelector("#options6");

let conteudos2 = ["Análise combinatória", "Análise dimensional", "Ângulo", "Aritmética", "Conjuntos", "Contagem", "Conversão de unidades", "Equação do 1° grau", "Equação do 2° grau","Estatística (análise de gráficos)", "Estatística (análise de tabela)","Estatística (média aritmética)", "Estatística (média ponderada)", "Estatística (mediana)", "Estatística (moda)", "Função do 1° grau", "Função exponencial", "Função trigonométrica", "Funções - análise de gráfico", "Geometria analítica", "Geometria espacial", "Geometria plana", "Inequações", "Logaritmo", "Matemática financeira", "Matrizes", "Notação científica", "Orientação espacial", "Porcentagem", "Potenciação", "Plano cartesiano", "Probabilidade", "Progressão aritmética", "Progressão geométrica", "Projeção ortogonal", "Razão e proporção", "Regra de três", "Sequências", "Sistemas lineares", "Trigonometria"];

function addConteudo2(selectedConteudo2) {
    options6.innerHTML = "";
    conteudos2.forEach(conteudo2 => {
        let isSelected6 = conteudo2 == selectedConteudo2 ? "selected" : "";
        let li6 = `<li onclick="updateName6(this)" name="conteudo" id="${conteudo2}" value="${conteudo2}" class="${isSelected6}">${conteudo2}</li>`;
        options6.insertAdjacentHTML("beforeend", li6);
        document.getElementById("conteudo2").value = selectedConteudo2;
    });
}
addConteudo2();

function updateName6(selectedLi6) {
    searchInp6.value = "";
    addConteudo2(selectedLi6.innerText);
    wrapper6.classList.remove("active");
    selectBtn6.firstElementChild.innerText = selectedLi6.innerText;
    if(selectedLi6.id.length<=16){
        document.getElementById("wrapper6").style.width = "210px";
    }
    else{
        document.getElementById("wrapper6").style.width = "310px";
    }
    localStorage.setItem("content", document.querySelector("#select-btn6 span").innerHTML);
}

searchInp6.addEventListener("keyup", () => {
    let arr6 = [];
    let searchWord6 = searchInp6.value.toLowerCase();
    arr6 = conteudos2.filter(data6 => {
        return data6.toLowerCase().startsWith(searchWord6);
    }).map(data6 => {
        let isSelected6 = data6 == selectBtn6.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName6(this)" class="${isSelected6}" id="${data6}">${data6}</li>`;
    }).join("");
    options6.innerHTML = arr6 ? arr6 : `<p style="margin-top: 10px; font-size: 18px;">Ops! Conteúdo não encontrado!</p>`;
});

selectBtn6.addEventListener("click", () => wrapper6.classList.toggle("active"));
selectBtn6.addEventListener("click", () => wrapper5.classList.remove("active"));
selectBtn6.addEventListener("click", () => wrapper4.classList.remove("active"));
selectBtn6.addEventListener("click", () => document.getElementById("content6").removeAttribute("hidden"));
selectBtn6.addEventListener("click", () => document.getElementById("content5").setAttribute("hidden", "hidden"));
selectBtn6.addEventListener("click", () => document.getElementById("content4").setAttribute("hidden", "hidden"));

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
    
    //Saving the previous selected content field from user when page reloads
    var verify_content = localStorage.getItem("content") !== null;
    if(verify_content == true){
        if(localStorage.getItem("content").length<=16){
            document.getElementById("wrapper6").style.width = "210px";
        }
        else{
            document.getElementById("wrapper6").style.width = "310px";
        }
        document.querySelector("#select-btn6 span").innerHTML = localStorage.getItem("content");
        document.getElementById("conteudo2").value = localStorage.getItem("content");
    }
    var verify_content2 = localStorage.getItem("content2") !== null;
    if(verify_content2 == true){
        document.querySelector("#select-btn3 span").innerHTML = localStorage.getItem("content2");
        document.getElementById("conteudo").value = localStorage.getItem("content2");
    }
    //Saving the previous selected difficulty field from user when page reloads
    var verify_dif = localStorage.getItem("dif") !== null;
    if(verify_dif == true){
        document.querySelector("#select-btn5 span").innerHTML = localStorage.getItem("dif");
        document.getElementById("dificuldade2").value = localStorage.getItem("dif");
    }
    var verify_dif2 = localStorage.getItem("dif2") !== null;
    if(verify_dif2 == true){
        document.querySelector("#select-btn2 span").innerHTML = localStorage.getItem("dif2");
        document.getElementById("dificuldade").value = localStorage.getItem("dif2");
    }

    //Saving the previous selected year field from user when page reloads
    var verify_year = localStorage.getItem("year") !== null;
    if(verify_year == true){
        document.querySelector("#select-btn4 span").innerHTML = localStorage.getItem("year");
        document.getElementById("anos2").value = localStorage.getItem("year");
    }
    var verify_year2 = localStorage.getItem("year2") !== null;
    if(verify_year2 == true){
        document.querySelector("#select-btn1 span").innerHTML = localStorage.getItem("year2");
        document.getElementById("anos").value = localStorage.getItem("year2");
    }


};

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
});

//Function to the clear button from pc resolution
function limpar2() {
    var verify_content = localStorage.getItem("content") !== null;
    if(verify_content == true){
        localStorage.removeItem("content");
    }
    var verify_dif = localStorage.getItem("dif") !== null;
    if(verify_dif == true){
        localStorage.removeItem("dif");
    }
    var verify_year = localStorage.getItem("year") !== null;
    if(verify_year == true){
        localStorage.removeItem("year");
    }
}