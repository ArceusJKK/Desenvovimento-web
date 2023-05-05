let listaDePessoas = [
    {
        nome: 'Marcia',
        sobreNome: 'Santos',
        idade: 58
    },
    {
        nome: 'Gioberta',
        sobreNome: 'menendes',
        idade: 65
    },
    {
        nome: 'Enzo',
        sobreNome: 'Gabriel',
        idade: 15
    },
    {
        nome: 'Erick',
        sobreNome: 'Jesus',
        idade: 16
    }
]
function verificaMaiorIdade (listaDePessoas){
    if (idade < 18){
        console.log("Bem vindo(a) " + nome +" " + sobreNome + "sua idade é " + idade + "anos não é maior de idade")
    } else {
        console.log("Bem vindo(a) " + nome + " " + sobreNome + "sua idade é " + idade + "anos é maior de idade")
    }

}
function verificaNome (listaDePessoas){
    if (nome , sobreNome < 3){
        console.log("Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres")
    } else if (nome, sobreNome > 50){
        console.log("Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres")
    }
}function quantidadePessoas (listaDePessoas){
    for (var i = 0; i < listaDePessoas; i++){
        console.log ("existem " + i + "pessoas")
    }
}
