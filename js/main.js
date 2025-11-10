'use strict'

import { lerContatos } from "./contatos.js" 

const contatos = await lerContatos()

function criarContato(contato){
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
    criarContato(contatos[i])
}



