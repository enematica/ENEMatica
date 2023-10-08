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
