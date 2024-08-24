document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    let passoAtivo = 0;

    function mostrarPasso(passoIndex) {
        passos.forEach((passo, index) => {
            passo.classList.toggle('ativo', index === passoIndex);
        });
    }

    function configurarBotaoProximo() {
        document.querySelectorAll('.btn-proximo').forEach(button => {
            button.addEventListener('click', () => {
                const proximoPasso = parseInt(button.getAttribute('data-proximo'), 10);
                if (!isNaN(proximoPasso) && proximoPasso >= 0 && proximoPasso < passos.length) {
                    passoAtivo = proximoPasso;
                    mostrarPasso(passoAtivo);
                }
            });
        });
    }

    function configurarEscolhasDojo() {
        const dojoCobraKai = document.querySelector('#dojo-cobra-kai .btn-proximo');
        const dojoMiyagiDo = document.querySelector('#dojo-miyagi-do .btn-proximo');

        if (dojoCobraKai) {
            dojoCobraKai.addEventListener('click', () => {
                passoAtivo = 3; // Passo relacionado ao Cobra Kai
                mostrarPasso(passoAtivo);
            });
        }

        if (dojoMiyagiDo) {
            dojoMiyagiDo.addEventListener('click', () => {
                passoAtivo = 4; // Passo relacionado ao Miyagi-Do
                mostrarPasso(passoAtivo);
            });
        }
    }

    // Configura botões de próximo passo
    configurarBotaoProximo();

    // Configura escolhas específicas dos dojos
    configurarEscolhasDojo();

    // Inicializa mostrando o primeiro passo
    mostrarPasso(passoAtivo);
});

