


function insert(num) {
    document.querySelector('.resultado').innerHTML += num    
   
}

function apagar() {
    let tela = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = tela.substring(0, tela.length -1)
}


function limpar() {
    document.querySelector('.resultado').innerHTML = ""
}

function calcular() {
    let tela = document.querySelector('.resultado').innerHTML
    if (tela) {
        document.querySelector('.resultado').innerHTML = eval(tela)
    }
}