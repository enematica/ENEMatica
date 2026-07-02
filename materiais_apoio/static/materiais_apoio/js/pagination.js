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

        function mostrarPagina(pagina) {

            paginaAtual = pagina;

            cards.forEach((card, index) => {

                const inicio = (pagina - 1) * itensPorPagina;
                const fim = inicio + itensPorPagina;

                card.style.display =
                    index >= inicio && index < fim
                        ? ""
                        : "none";

            });

            desenharBotoes();
        }

        function desenharBotoes() {

            paginacao.innerHTML = "";

            for (let i = 1; i <= totalPaginas; i++) {

                const btn = document.createElement("button");
                btn.textContent = i;

                if (i === paginaAtual) {
                    btn.classList.add("ativo");
                }

                btn.addEventListener("click", () => mostrarPagina(i));

                paginacao.appendChild(btn);
            }

            if (paginaAtual < totalPaginas) {

                const prox = document.createElement("button");
                prox.innerHTML = "&raquo;";

                prox.addEventListener("click", () => mostrarPagina(paginaAtual + 1));

                paginacao.appendChild(prox);
            }
        }

        mostrarPagina(1);

    });

});