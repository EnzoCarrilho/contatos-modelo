'use strict'

import { lerContatos  } from "./contatos.js" 
import { criarContato } from "./contatos.js"
import { deletarContato } from "./contatos.js"


const contatos = await lerContatos()
console.log(contatos)

function criarCardContatos(contato){
    const container = document.getElementById('container')

    const cardContato = document.createElement('div')
    cardContato.className = 'card-contato'

    const imagemContato = document.createElement('img')
    const nomeContato = document.createElement('h2')
    const numeroContato = document.createElement('p')

    const actionButtons = document.createElement('div')
    actionButtons.className = 'action-buttons'
    const buttonEditar = document.createElement('button')
   

    const buttonDeletar = document.createElement('button')

    imagemContato.src = contato.foto
    nomeContato.textContent = contato.nome
    numeroContato.textContent = contato.celular

    buttonEditar.textContent = 'EDITAR'
    buttonDeletar.textContent = 'DELETAR'
    buttonEditar.id = 'botaoEditar'
    buttonDeletar.id = 'botaoDeletar'

    container.appendChild(cardContato)
    cardContato.append(imagemContato, nomeContato, numeroContato, actionButtons)
    actionButtons.append(buttonEditar, buttonDeletar) 
    
    excluirContato(buttonDeletar,contato.id)

}

for(let i = 0; i < contatos.length; i++){
    criarCardContatos(contatos[i])
}


const buttonNovoContato = document.getElementById('novo-contato')

buttonNovoContato.addEventListener('click', () => {
    const main = document.querySelector('.card-show')
    main.className = 'form-show'
})

const buttonCancelar = document.getElementById('cancelar')

buttonCancelar.addEventListener('click', () => {
    const main = document.querySelector('.form-show')
    main.classList = 'card-show'
})

const input = document.querySelector('.preview-input')

input.addEventListener('change', () => {
    const foto = document.getElementById('foto')
    const imagem = document.getElementById('preview-image')
    imagem.src = URL.createObjectURL(foto.files[0])
})



function criarNovoContato(){
    
    const novoContato = {
        "nome": document.getElementById('nome').value,
        "celular": document.getElementById('celular').value,
        "foto": document.getElementById('preview-image').src,
        "email": document.getElementById('email').value,
        "endereco": document.getElementById('endereco').value,
        "cidade": document.getElementById('cidade').value
    }

    criarContato(novoContato)

}

const buttonSalvar = document.getElementById('salvar')
buttonSalvar.addEventListener('click', () => {
    criarNovoContato()

})

const botaoEditar = document.getElementById('botaoEditar')
botaoEditar.addEventListener('click', () => {
    const main = document.querySelector('.card-show')
    main.className = 'form-show'
})



function excluirContato(botao,id){
    
    botao.addEventListener('click', () => {
        deletarContato(id)
    })
}
















