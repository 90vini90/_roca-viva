// var nome = window.prompt('Qual é o seu nome?')
var nomeInput = window.document.querySelector('input#nomedaconta')
var emailInput = window.document.querySelector('input#emaildaconta')
var genInput = window.document.getElementsByName('gen')
var res = window.document.querySelector('strong#res')
var botao = window.document.querySelector('input#botao')

function clicar() {
    res.innerHTML = 'Bem-Vindo ao meu site'
}
