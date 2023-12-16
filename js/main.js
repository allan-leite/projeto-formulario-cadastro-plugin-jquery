$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })
    
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            cep: 'Por favor, insira seu CEP',
        },
        submitHandler(form){
            const novoItem = $('<div class="mensagem-sucesso"></div>')
            var paragrafo = $('<p>Parabéns! Seu formulário foi enviado com sucesso!</p>').appendTo(novoItem)
            $(novoItem).appendTo('form')

            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#cpf').val('')
            $('#cep').val('')
        }
    })
})