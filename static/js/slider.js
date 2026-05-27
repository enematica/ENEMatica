let count = 1;
let slideInterval;

// Função que inicia o carrossel automático
function startCarousel() {
    slideInterval = setInterval(() => {
        nextImage();
    }, 20000);
}

// Função que reseta o timer do carrossel
function resetCarouselTimer() {
    clearInterval(slideInterval);
    startCarousel();
}

// Função que avança automaticamente
function nextImage() {
    count++;
    if (count > 4) count = 1;
    document.getElementById("radio" + count).checked = true;
}

// Inicia com o primeiro radio selecionado
document.getElementById("radio1").checked = true;
startCarousel();

// Detecta interações em TODOS os labels de navegação manual e setas
document.querySelectorAll("label[for^='radio']").forEach(label => {
    label.addEventListener("click", () => {
        const targetId = label.getAttribute("for");
        count = parseInt(targetId.replace("radio", ""));
        resetCarouselTimer();
    });
});