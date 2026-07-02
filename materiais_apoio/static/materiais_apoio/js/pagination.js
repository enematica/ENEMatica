document.addEventListener("DOMContentLoaded", () => {

    const voltouDoDetalhe = sessionStorage.getItem("voltarMateriais") === "true";
    const scrollSalvo = sessionStorage.getItem("materiais_scroll");

    // Se não voltou do detalhe, limpa qualquer estado salvo
    if (!voltouDoDetalhe) {
        sessionStorage.removeItem("materiais_scroll");

        Object.keys(sessionStorage).forEach(chave => {
            if (chave.startsWith("materiais_pagina_")) {
                sessionStorage.removeItem(chave);
            }
        });
    }

    document.querySelectorAll(".grid").forEach((grid, indiceGrid) => {

        const cards = [...grid.querySelectorAll(".card")];
        const itensPorPagina = 8;

        if (cards.length <= itensPorPagina) return;

        const totalPaginas = Math.ceil(cards.length / itensPorPagina);

        const chavePagina = `materiais_pagina_${indiceGrid}`;

        let paginaAtual = voltouDoDetalhe
            ? (parseInt(sessionStorage.getItem(chavePagina)) || 1)
            : 1;

        const paginacao = document.createElement("div");
        paginacao.className = "paginacao";

        grid.after(paginacao);

        const secao = grid.closest(".secao-categoria");

        function mostrarPagina(pagina) {

            paginaAtual = pagina;

            if (voltouDoDetalhe) {
                sessionStorage.setItem(chavePagina, paginaAtual);
            }

            const inicio = (paginaAtual - 1) * itensPorPagina;
            const fim = inicio + itensPorPagina;

            cards.forEach((card, index) => {
                card.style.display =
                    (index >= inicio && index < fim)
                        ? ""
                        : "none";
            });

            desenharBotoes();
        }

        function subirParaSecao() {
            window.scrollTo({
                top: secao.offsetTop - 90,
                behavior: "smooth"
            });
        }

        function desenharBotoes() {

            paginacao.innerHTML = "";

            if (paginaAtual > 1) {
                const ant = document.createElement("button");
                ant.innerHTML = "&laquo;";

                ant.onclick = () => {
                    mostrarPagina(paginaAtual - 1);
                    subirParaSecao();
                };

                paginacao.appendChild(ant);
            }

            for (let i = 1; i <= totalPaginas; i++) {

                const btn = document.createElement("button");
                btn.textContent = i;

                if (i === paginaAtual)
                    btn.classList.add("ativo");

                btn.onclick = () => {
                    mostrarPagina(i);
                    subirParaSecao();
                };

                paginacao.appendChild(btn);
            }

            if (paginaAtual < totalPaginas) {

                const prox = document.createElement("button");
                prox.innerHTML = "&raquo;";

                prox.onclick = () => {
                    mostrarPagina(paginaAtual + 1);
                    subirParaSecao();
                };

                paginacao.appendChild(prox);
            }
        }

        mostrarPagina(paginaAtual);

    });

    // Restaura o scroll somente se voltou do detalhe
    if (voltouDoDetalhe && scrollSalvo !== null) {

        setTimeout(() => {

            window.scrollTo({
                top: parseInt(scrollSalvo),
                behavior: "auto"
            });

            // Limpa tudo após restaurar
            sessionStorage.removeItem("voltarMateriais");
            sessionStorage.removeItem("materiais_scroll");

            Object.keys(sessionStorage).forEach(chave => {
                if (chave.startsWith("materiais_pagina_")) {
                    sessionStorage.removeItem(chave);
                }
            });

        }, 0);
    }

    // Salva estado somente ao clicar em um card
    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("click", () => {

            sessionStorage.setItem("voltarMateriais", "true");
            sessionStorage.setItem("materiais_scroll", window.scrollY);

            document.querySelectorAll(".grid").forEach((grid, indiceGrid) => {

                const ativo = grid.parentElement.querySelector(".paginacao .ativo");

                if (ativo) {
                    sessionStorage.setItem(
                        `materiais_pagina_${indiceGrid}`,
                        ativo.textContent
                    );
                }

            });

        });

    });

});