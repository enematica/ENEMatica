document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".grid").forEach(grid => {

        const cards = [...grid.querySelectorAll(".card")];
        const itensPorPagina = 8;

        if (cards.length <= itensPorPagina) return;

        const totalPaginas = Math.ceil(cards.length / itensPorPagina);
        let paginaAtual = 1;

        const paginacao = document.createElement("div");
        paginacao.className = "paginacao";

        grid.after(paginacao);

        const secao = grid.closest(".secao-categoria");

        function mostrarPagina(pagina) {

            paginaAtual = pagina;

            const inicio = (pagina - 1) * itensPorPagina;
            const fim = inicio + itensPorPagina;

            cards.forEach((card, index) => {
                card.style.display =
                    index >= inicio && index < fim
                        ? ""
                        : "none";
            });

            desenharBotoes();
        }

        function subirParaSecao() {

            window.scrollTo({
                top: secao.offsetTop - 90, // Ajuste caso sua navbar tenha outra altura
                behavior: "smooth"
            });

        }

        function desenharBotoes() {

            paginacao.innerHTML = "";

            for (let i = 1; i <= totalPaginas; i++) {

                const btn = document.createElement("button");
                btn.textContent = i;

                if (i === paginaAtual) {
                    btn.classList.add("ativo");
                }

                btn.addEventListener("click", () => {
                    mostrarPagina(i);
                    subirParaSecao();
                });

                paginacao.appendChild(btn);
            }

            if (paginaAtual < totalPaginas) {

                const prox = document.createElement("button");
                prox.innerHTML = "&raquo;";

                prox.addEventListener("click", () => {
                    mostrarPagina(paginaAtual + 1);
                    subirParaSecao();
                });

                paginacao.appendChild(prox);
            }

            if (paginaAtual > 1) {

                const ant = document.createElement("button");
                ant.innerHTML = "&laquo;";

                ant.addEventListener("click", () => {
                    mostrarPagina(paginaAtual - 1);
                    subirParaSecao();
                });

                paginacao.prepend(ant);
            }
        }

        mostrarPagina(1);

    });

});