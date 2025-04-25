// Tipos de dados

var nome = "Julia"; // tipo tetxo string)
var idade = 18; //  tipo inteiro (number)
var nota = 9.5; // tipo decimal (number)
var data ; // tipo indefinido (underfined)
var aprovado = true; // tipo boleana (boolean)
var diploma = null; // tipo nula (null)

// Variáveis e Constantes (var, let, const)

var nota1 = 5; // declarar
nota1 = 7; // redefini
var nota1 = 10; //redeclarar

let nota2 = 8; //declarar
nota2 = 9; // redefinindo
// let nota 2 = 10 // erro  -  redeclarar

const media = 7.5; // declarar
// media = 8; // erro  -  redefinir
// const media = 8;// erro  -  redeclarar

// Operadores Aritmétricos

let a = 10;
let b = 3;
console.log("soma: "+ a+b); //13
console.log("sub: "-a-b); //7
console.log("multi:"+ a*b);//30
console.log(a/b); //3.33
console.log(a%b); //1

// Operadores relacionais (boolean)

console.log(5<10); //true
console.log("10"==10);//true
console.log("10"===10);//false

//operadores lógicos (E %%, Ou ||, Não !)

var notaA = 5;
var notaB = 7;

console.log(notaA >=7 || notaB >=7); //true
console.log(notaA >=7 && notaB >=7); //false
console.log(!true); //false


// condicionais (if/else, switch(case))

var idade = 25;

if (idade>=18) {
    console.log("Maior de Idade");
} else {
    console.log("Menor de Idade");
}

var mes = 2;

switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    default:
        console.log("Outro mês")
        break;
}

//loops (for / while / doWhile)

for (let i = 0;i < 5; i++) {
    console.log("iteração: "+i); // 0, 1, 2, 3 ,4    
}

var condicion = true;
var numero = 3;
var contador = 0;
while (true) {
    let sorteio = Math.random(5)
    contador++
    if (numero == sorteio) {
        console.log("Acertou com "+contador+"tentativas");
        condition = false;
    }
}
