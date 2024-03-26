let resultadoAnterior = null; // Variável para armazenar o resultado anterior

function insert(caractere) {
    if (resultadoAnterior !== null) {
        document.getElementById('res').value = resultadoAnterior; // Restaura o resultado anterior
        resultadoAnterior = null; // Limpa o resultado anterior
    }
    if (caractere === 'x') {
        caractere = '*'; // Corrigindo a representação do operador de multiplicação
    }
    document.getElementById('res').value += caractere;
}

function limpar() {
    document.getElementById('res').value = '';
    resultadoAnterior = null; // Limpa o resultado anterior quando o campo é limpo
}

function soma() {
    document.getElementById('res').value += '+';
}

function enter() {
    let expressao = document.getElementById('res').value;
    if(expressao.length == 0){
        alert('Não possui números!')
    }
    else{
        let resultado = eval(expressao);
        document.getElementById('res').value = resultado; // Mostra apenas o resultado
        resultadoAnterior = resultado; // Armazena o resultado atual para uso posterior
    }
}