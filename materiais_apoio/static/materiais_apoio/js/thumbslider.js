const modeloSwiper = new Swiper(".modeloSwiper", {
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    }
});

const thumbs = document.querySelectorAll(".thumb");
const miniaturas = document.querySelector(".miniaturas");

function centralizarThumb(thumb) {

    if (!thumb || !miniaturas) return;

    miniaturas.scrollTo({
        top: thumb.offsetTop - miniaturas.clientHeight / 2 + thumb.clientHeight / 2,
        left: thumb.offsetLeft - miniaturas.clientWidth / 2 + thumb.clientWidth / 2,
        behavior: "smooth"
    });

}

/* Clique nas miniaturas */

thumbs.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {

        modeloSwiper.slideToLoop(index);

        document
            .querySelector(".thumb.active")
            ?.classList.remove("active");

        thumb.classList.add("active");

        centralizarThumb(thumb);

    });

});

/* Atualiza miniatura ativa ao trocar slide */

modeloSwiper.on("slideChange", () => {

    document
        .querySelector(".thumb.active")
        ?.classList.remove("active");

    const thumbAtiva = thumbs[modeloSwiper.realIndex];

    thumbAtiva?.classList.add("active");

    centralizarThumb(thumbAtiva);

});

/* Setas do teclado */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowLeft") {
        modeloSwiper.slidePrev();
    }

    if (event.key === "ArrowRight") {
        modeloSwiper.slideNext();
    }

});