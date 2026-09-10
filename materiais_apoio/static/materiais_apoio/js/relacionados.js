document.addEventListener('DOMContentLoaded', function () {

    function carregarPaginaRelacionados(url) {

        var wrapper = document.getElementById('relacionados-container');
        if (!wrapper) return;

        fetch(url, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
        .then(function (resposta) {
            return resposta.text();
        })
        .then(function (html) {

            // Substitui TUDO de uma vez (grid + paginação juntos) —
            // nada de tentar remover/inserir pedaços separados.
            wrapper.innerHTML = html;

            // Atualiza a URL sem criar uma nova entrada no histórico
            window.history.replaceState(window.history.state, '', url);

            // Leva o usuário até o topo da seção de relacionados
            var relacionados = wrapper.querySelector('#relacionados') || wrapper;
            var y = relacionados.getBoundingClientRect().top + window.scrollY - 100;

            window.scrollTo({ top: y, behavior: 'smooth' });
        })
        .catch(function (erro) {
            console.error('Não foi possível carregar os materiais relacionados, recarregando a página...', erro);
            window.location.href = url;
        });
    }

    document.addEventListener('click', function (e) {

        var link = e.target.closest('#relacionados-container .paginacao a');
        if (!link) return;

        e.preventDefault();
        carregarPaginaRelacionados(link.href);
    });


    // ---- Botão "voltar" com comportamento de histórico do navegador ----

    document.querySelectorAll('.btn-voltar').forEach(function (botao) {

        botao.addEventListener('click', function (e) {

            var veioDoMesmoSite =
                document.referrer &&
                document.referrer.indexOf(window.location.origin) === 0;

            if (veioDoMesmoSite && window.history.length > 1) {
                e.preventDefault();
                window.history.back();
            }
        });
    });

});