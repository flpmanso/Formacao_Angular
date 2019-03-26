import Carro from './Carro'
import { Pessoa } from './Pessoa'
import { Concessionaria } from './Concessionaria'

/* --- Criar carros */

let carroA = new Carro('gol', 4)
let carroB = new Carro('fusca', 2)
let carroC = new Carro('focus', 4)

/* ---- montar lista de carros da concessionaria */

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('jamel', listaDeCarros)

/* --- mostrar o array */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- Comprar o Carro */
let cliente = new Pessoa('joao', 'gol')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        //compra o carro
        cliente.comprarCarro(carro)
    }
})
console.log(cliente.dizerCarroQueTem())







