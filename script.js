function insert (valor) {
    var numero = document.getElementById('visor').innerText;
    document.getElementById('visor').innerText = numero + valor;
}

function limpar() {
    document.getElementById('visor').innerText = "";
}

function apagar() {
    var resultado = document.getElementById('visor').innerText;
    document.getElementById('visor').innerText = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('visor').innerText;

    if(resultado){
        document.getElementById('visor').innerText = eval(resultado);
    }else{
        document.getElementById('visor').innerText = "Erro";
    }
}