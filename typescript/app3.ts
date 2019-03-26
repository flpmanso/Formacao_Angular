import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('gol', 4)

let moto = new Moto()
moto.acelerar()
carro.acelerar()

let concessionaria = new Concessionaria('',[])

console.log(concessionaria.fornecerHorarioDeFuncionamento())

console.log(moto)
console.log(carro)

