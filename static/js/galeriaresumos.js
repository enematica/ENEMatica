const imagens = document.querySelectorAll('#imagens img');

const popup = document.querySelector('.popup-img');
const popupImg = document.querySelector('.popup-img img');
const popupTitulo = document.querySelector('.popup-img h3');

let imagemAtual = 0;


imagens.forEach((image, index) => {

    image.onclick = () => {

        imagemAtual = index;

        mostrarImagem();

        popup.style.display = 'flex';

        document.body.style.overflow = 'hidden';

        document.querySelector('#navHome')
            .classList.remove('fixed-top');
    };

});


function mostrarImagem(){

    popupImg.src = imagens[imagemAtual].src;

    popupTitulo.innerHTML =
        imagens[imagemAtual].alt;
}


document.querySelector('.next').onclick = () => {

    imagemAtual++;

    if(imagemAtual >= imagens.length){
        imagemAtual = 0;
    }

    mostrarImagem();
};


document.querySelector('.prev').onclick = () => {

    imagemAtual--;

    if(imagemAtual < 0){
        imagemAtual = imagens.length - 1;
    }

    mostrarImagem();
};


document.querySelector('.fechar').onclick = fecharPopup;

function fecharPopup(){

    popup.style.display = 'none';

    document.body.style.overflow = '';

    document.querySelector('#navHome')
        .classList.add('fixed-top');
}


document.addEventListener('keydown', (e) => {

    if(popup.style.display === 'flex'){

        if(e.key === 'ArrowRight'){
            document.querySelector('.next').click();
        }

        if(e.key === 'ArrowLeft'){
            document.querySelector('.prev').click();
        }

        if(e.key === 'Escape'){
            fecharPopup();
        }
    }

});