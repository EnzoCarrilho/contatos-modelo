'use strict'

import { lerContatos  } from "./contatos.js" 
import { criarContato } from "./contatos.js"

const contatos = await lerContatos()

function criarCardContatos(contato){
    const container = document.getElementById('container')

    const cardContato = document.createElement('div')
    cardContato.className = 'card-contato'

    const imagemContato = document.createElement('img')
    const nomeContato = document.createElement('h2')
    const numeroContato = document.createElement('p')

    imagemContato.src = contato.foto
    nomeContato.textContent = contato.nome
    numeroContato.textContent = contato.celular

    container.appendChild(cardContato)
    cardContato.append(imagemContato, nomeContato, numeroContato)

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

function criarNovoContato(){
  
    const novoContato = {
        "nome": document.getElementById('nome').value,
        "celular": document.getElementById('celular').value,
        "foto": document.getElementById('foto').src,
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









