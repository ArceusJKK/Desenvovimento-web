var contaCorrente = {
    saldo: 800,
    fatura: 200,
    creditoDisponivel: 1600,

    extrato: {
        entradas: [
            {
                data: '08-05-2023',
                valorSalario: 2000,
                descricao: 'Pagamento salario'
            }
        ],
        saida: [
            {
                data: "07-05-2023",
                valor: 2000,
                descricao: "Bora agora!"
            }

        ]
    },
    exibirExtrato: true
}


    if (contaCorrente.saldo > contaCorrente.fatura) {
    console.log("Você possui saldo para pagar a fatura atual")
    } else {
    console.log("você não possui saldo suficiente para pagar a fatura, experimente pegar credito para conseguir pagar, imprima o valor de crédito disponíve " + contaCorrente.saldo)
    }

    if (exibirExtrato = false){
        console.log(contaCorrente.extrato)
    }
    else {
        console.log ("Agradecemos a preferencia volte sempre")
    }






