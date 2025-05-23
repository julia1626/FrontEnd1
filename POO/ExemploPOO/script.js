//criando a classe Carro
class Carro {
    //não tem atributos diretos
    //construtor -> define os atributos da classe
    constructor(marca, modelo, ano, cor, preco){
        this.marca/*atributo*/ = marca;//parametro da função/método 
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
    //método
    exibirInfo(){
        console.log(`Carro: ${this.marca}, ${this.modelo}, ${this.ano}, ${this.cor}, R$${this.preco}`);
    }

}

//Criar objetos da classe Carro
let carro1 = new Carro("Fiat", "Uno", 1994, "Cinza", 8000.00);
let carro2 = new Carro("GM", "Corsa", 2011, "Preto", 20000.00);

carro1.exibirInfo();
carro2.exibirInfo();

//atributos privados(#) e publicos

class Usuario{
    #nome; //declaração de atributos privados
    #senha; ///declaração de atributos privados

    constructor(nome, senha){
        this.#nome = nome;
        this.#senha = senha
    }

    //metodo privado
    #trocarSenha(novaSenha){
        this.#senha = novaSenha
    }
}