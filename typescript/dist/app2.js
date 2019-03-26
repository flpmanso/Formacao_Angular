"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
/* --- Criar carros */
var carroA = new Carro_1.default('gol', 4);
var carroB = new Carro_1.default('fusca', 2);
var carroC = new Carro_1.default('focus', 4);
/* ---- montar lista de carros da concessionaria */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('jamel', listaDeCarros);
/* --- mostrar o array */
//console.log(concessionaria.mostrarListaDeCarros())
/* --- Comprar o Carro */
var cliente = new Pessoa_1.Pessoa('joao', 'gol');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
