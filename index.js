const botao = document.querySelector('.botao');

let nota1 = document.querySelector('.nota1');
let nota2 = document.querySelector('.nota2');
let nota3 = document.querySelector('.nota3');
let nota4 = document.querySelector('.nota4');


botao.addEventListener('click', function(event){
    let somaNotas = parseInt(nota1.value) + parseInt(nota2.value)+ parseInt(nota3.value) + parseInt(nota4.value);
    let resultado = somaNotas/4;
    let colunaTable = document.querySelector('.resultado');

    colunaTable.textContent = resultado;
    event.preventDefault();
})
