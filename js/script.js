import ehUmCpf from "./valida-cpf"; // import é utilizado para chamar uma função de outro arquivo javascript que possua o export

const camposDoFormulario = document.querySelectorAll("[required]");
const areaServicos = document.querySelector('.cabecalho-lista__link[href="#servicos"]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); // "blur" = verifica o campo assim que retirar o foco dele
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.lenght >= 11){
        ehUmCpf(campo);
    }
}

areaServicos.addEventListener('click', function(reset) {
    reset.preventDefault();
    document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
});
