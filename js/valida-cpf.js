export default function ehUmCpf(campo) { // export é utilizado para usar essa função em outro arquivo javascript
    const cpf = campo.value.replace(/\.|-/g, "") // está sendo utilizado para substituir o . e o - por "" que seria vazio
    validaNumerosRepetidos(cpf);
    validaPrimeiroDigito(cpf);
    validaSegundoDigito(cpf);

    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        console.log("Esse cpf não existe!");
    }else {
        console.log("Esse cpf existe!");
    }
}

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ]

    return numerosRepetidos.includes(cpf); // return é utilizado para poder usá-lo fora da função
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador --;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador --;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[10];
}