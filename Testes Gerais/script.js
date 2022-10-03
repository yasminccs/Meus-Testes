console.log("Hello World") 

//CURIOSIDADES GERAIS

let n1 = 1545.5
console.log(n1.toLocaleString(`pt-BR`, {style: 'currency', currency: 'BRL'}))
console.log(n1.toLocaleString(`pt-BR`, {style: 'currency', currency: 'USD'}))
console.log(n1.toLocaleString(`pt-BR`, {style: 'currency', currency: 'EUR'}))


// VARIÁVEIS LET / CONST

let nameMale = "Lucas"
console.log(nameMale)
nameMale = "Pedro"
console.log(nameMale)

let empty
console.log(empty)

const nameFemale = "Eu Yasmin tenho 20 anos" // tipo de dado: string
console.log(nameFemale)

let numberOne = 1 // tipo de dado: number
console.log(numberOne)

let truth = true  // tipo de dado: boolean
console.log(truth)
let fake = false   // tipo de dado: boolean
console.log(fake)


// OPERADORES 

let numero1 = 4
let numero2 = 2
console.log(numero1 + numero2)

let media = numero1 + numero2
console.log(media)

let numero0 = 0
numero0 = numero0 + 1 // forma não simplificada
numero0 = numero0 + 1
console.log(numero0)

let numero3 = 3
numero3 += 1 // forma simplicada
numero3 += 1
console.log(numero3)

let divisao = 14
let divisao1 = 2
console.log(divisao%divisao1)
console.log(divisao/divisao1)

let n = 7
console.log(n < 7 ? "REPROVADO" : "APROVADO") //operador ternário


// RECURSOS NATIVOS DO BROWSER

console.info("Clique para mais informações.")
console.warn("Atenção, navegador!")
console.error("Deu bug.")

// alert("Senha fraca.") // aparece uma caixa de notificação
// confirm("Clique em OK para receber nossas ofertas!") // mostra da mesma forma que o primeiro
// prompt("Digite no campo abaixo seu nome completo.") // mostra campo de inserção de texto/input

// let dados = confirm("Deseja receber nossas notificações?")
// console.log(dados) // usando variável, clicar em "confirmar" = true ou "cancel" = false

// let campo = prompt("Digite seu nome:")
/* console.log(campo) // usando variável, ao colocar nome e clicar em "OK" aparece o nome e se clicar 
em cancel aparece "null" = nada */



// OPERADORES DE COMPARAÇÃO, BOOLEANOS E OPERADORES LÓGICOS

let x = 10
let y = 20
let z = "20"

console.log(x>y) // retorna false

console.log(x<y) // retorna true

console.log(x=y) // este sinal é de atribuição, logo o "x" passará a ser 20 também

console.log(x==z) // retorna true

console.log(x===z) // retorna false


let a = 17
let b = 18

console.log(a>=b) // retorna false

console.log(a<=b) // retornar true

let c = 65
let d = 65

console.log(c != d) // retorna false

console.log(c !== "65") // retorna true

console.log(c === d || a === b) // retorna true

console.log(c === d && d === c) // retorna true

let emp = "" // exemplo de condição que retorna false
console.log(emp==false)



// DOM => Document Object Model

let h3 = document.getElementsByTagName('h3')[0]
h3.style.color = 'blue'

let constelacao = document.getElementById('Constelation')
constelacao.style.fontSize = '2em'

let pythagorean = document.getElementsByName('text')[0]
pythagorean.style.background = 'lightyellow'

let termo = document.getElementsByClassName('home')[0]
termo.innerText = "Sobre Nós"

let selectorCSS = document.querySelector('#cafe')
selectorCSS.style.color = 'brown'


//adicionando elementos pelo js

let body = document.querySelector('body')
let elementoCriado = document.createElement('input')
body.appendChild(elementoCriado)
console.log(body) //aparecerá no final da página


// DOM => Eventos

let aDom = document.getElementById('area')
aDom.addEventListener('click', clicar)
aDom.addEventListener('mouseenter', entrou)
aDom.addEventListener('mouseout', saiu)

function clicar(){
    aDom.innerText = 'Clicou!'
    aDom.style.backgroundColor = 'red'
}
function entrou(){
    aDom.innerText = 'Entrou!'
}
function saiu(){
    aDom.innerText = 'Saiu!'
    aDom.style.backgroundColor = 'green'
}

// CONDICIONAIS IF / ELSE / SWITCH

// let velocity = 120

// if(velocity <= 100) {
//     console.log("Velocidade máxima permetida!")
// } else {
//     console.log("Velocidade máxima excedida. Reduza!")
// }

// (velocity > 100) ? console.log("Maior que 100") : console.log("Menor que 100") // OPERADOR TERNÁRIO



let velocity2 = 110 // usando else/if

if(velocity2 <= 60) {
    console.log("Velocidade baixa!")
} else if(velocity2 <= 100) {
        console.log("Velocidade máxima permetida!")
} else {
        console.log ("Velocidade de alto risco, reduza para sua segurança!")
}



let boysName = "Lucas"

switch(boysName){
    case "Lucas":
        console.log("Seria a melhor opção se não fosse a distância e o fato de meu atual momento não dá")
    case "Israel":
        console.log("O contra é que ele é crente e o pró é que ele não é virtual")
        break
    case "Joab":
        console.log("No presente e atual momento NEVER, apenas amigos. Fora que é virtual também.")
    default:
        console.log("Nem existe gata")
}




// ESTRUTURAS DE REPETIÇÃO

var resultado = '';
var i = 0;
do {
   i += 1;
   resultado += i + ' ';
} while (i < 5);
console.log(resultado)



for(let i = 1; i <= 3; i++){
    console.log(i)
}

let velocidade = 50
let aceleracao = 5
do {
  console.log("Minha aceleração: "+velocidade)
  velocidade += aceleracao
} while (velocidade <= 100)




// FUNÇÃO

function numbers(opction1, opction2){
    let numeros = opction1 + opction2
    console.log("O número " + numeros + " é viável")
}
numbers(10, 20)

function namesOpctions(nameOne, nameTwo){
    console.log("O " + nameOne + " é viável tanto quanto " + nameTwo + " é.")
}
namesOpctions("Moto", "Carro")


function speedUp(velocity, acceleration){
	let newVelocity = velocity + acceleration
	console.log("Nova velocidade " + newVelocity)
    return newVelocity
}
//let retorno = alert(speedUp(100, 20))


function myFunction (a, b){
    return (2*2)
}
console.log(myFunction(2*2)) // sem o "return" esse console retorna "undefined"


//função expressão
const quadrado = function square(odd){
    return ("O tamanho do quadrado é: " + odd)
}
console.log(quadrado(20))
// console.log(square(20)) não é válido


//função anônima
const bola = function(tamanho){
    return ("O tamanho da bola é: " + tamanho)
}
console.log(bola(10))

const retangulo = function(x) { 
    return x * x; 
}
const result = retangulo(6) //desse jeito vc armazena o valor retornado da função
console.log(result)


//arrow function
const triangulo = unitTri => ("O tamanho do triângulo é: " + unitTri)
console.log(triangulo(30))


const nameCamera = (oba) => console.log("O nome da câmera é: "+ oba)

function getCapture(camera) {
    return nameCamera(camera)
}
getCapture("Canon")
//getCapture(function() {console.log('Canon')})



//higher order function
function doubleVelocity(velocity, printer){
    console.log("Entrou a função!")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = doubleVelocity(60, velocity => {
    console.log("Nova velocidade: " + velocity + " km/s")
})
console.log(printVelocity)


/*let printVelocity = velocity => {
    console.log("Velocidade nova de " + velocity + " km/s")}

doubleVelocity(60, printVelocity)
console.log(doubleVelocity(60, printVelocity))*/



// ARRAY

let myArray = ["Biscoitos", 300, true]
console.log(myArray)
// console.log(myArray[1])

let myArray2 = new Array ("Massas", 200, false)
console.log(myArray2)

let p = 0
let fruits = ["apple", "banana", "orange" ]
let phrases = [" was delicious.", " kind monkey.", " is color."]

while (p < fruits.length){
    console.log("The " + fruits[p] + phrases[p])
    p++
}



//array bidimensional/tri
let fruit = [["Banana", 1], ["Abacaxi", 2], ["Laranja", 3]]
//fruit.push(["Uva", 4])   =>   adicionar 
// fruit[1].push(true)   => adicionar
console.log(fruit[1]) // para acessar uma array da array
console.log(fruit[2][0]) // para acessar um elemento de uma array dentro de uma array

let food = [["Arroz", [1, true]], ["Feijão", [2, false]]]
console.log(food[1][1][1]) //como visualizar



//métdos básicos de uma array
let names = ["Maria", "João", "Bianca", "Pedro"]
console.log(names)
// names.push("Leticia")
// let removeName = names.pop()
// console.log(removeName)
// let removeName = names.shift()
// console.log(removeName)
names.unshift("Lucas")
console.log(names)


let gods = ["Artémis", "Zeus", "Afrodite", "Apolo"]
console.log(gods)

//let remove = gods.splice(1,2)  => fazer assim só remove, n acrescenta

let remove = gods.splice(1,2,"Hercules", "Ísis", "Horus")
console.log(gods)
console.log(remove)


let colors = ["Purple", "Red", "Blue", "Pink"]
console.log(colors)

let removeColors = colors.slice(0, 3)
console.log(colors)
console.log(removeColors)


//métodos avançados de uma array
let namesPersons = ["Joana", "Caio", "Priscila", "Israel"]
let callList = namesPersons.forEach(function (name, indice){
    console.log("Cliente: " + name + "\nPosição na fila: " + indice)
}) // ".map" faz o mesmo que ".forEach"

let multiplicate = [2, 3]
let conta = multiplicate.map(function (number){
    let resultMultiplicate = number * 2
    return resultMultiplicate
})
console.log(conta)

let lengthLetter = ["Caneta", "Lápis", "Tesoura", "Cola"]
let checkOut = lengthLetter.filter(items => items.length >= 5 )
let checkUp = lengthLetter.find(item => item.length >= 5 )
let checkAll = lengthLetter.findIndex(iten => iten.length >= 5)
console.log(checkOut)
console.log(checkUp)
console.log(checkAll)

let listFood = ["Biscoito", "manteiga", "pão", "queijo"]
let juntUs = listFood.join()
console.log(juntUs)




//OBJETOS

let person = {
    name: "Yasmin",
    age: 20,
    city: "Rio de Janeiro"
}
console.log(person)
console.log(person.name) //para retornar um dado da lista
console.log(person["age"]) //outra forma de retornar

person.color = "White" //acrescentar mais um dado para a lista
person["fruit"] = "Pineapple" //outra forma de acrescentar


//objetos+array
const menuDelivery = {
    hamburguer: "X-Tudo",
    valor: "R$15,00",
    ingredientes: ["pão", "carne", "queijo", "tomate", "ovo", "molho", "bacon"],
    disponivel: true
}
console.log(menuDelivery.ingredientes[2])
menuDelivery.ingredientes.push("alface")
console.log(menuDelivery)


const listPersons = [
    {nome: "Yasmin", age: 20, city: "Rio de Janeiro"},
    {nome: "Lucas", age: 22, city: "Santos"},
    {nome: "Ana Clara", age: 20, city: "Santa Catarina"}
]

console.log(listPersons[0].city)
listPersons[0].professional = ("Developer Fullstack")
console.log(listPersons)

listPersons.forEach(pessoa => {
    console.log("Nome: " + pessoa.nome + " Idade: " + pessoa.age)
    console.log(`Nome: ${pessoa.nome} Idade: ${pessoa.age}`)
})


//objeto+objeto
const informations = {
    ship: "James",
    date: 20,
    captain: {
        name: "Nate",
        age: 35
    }
}
console.log(informations.captain.name)
informations.captain.especialidade = ("Naves espaciais")
console.log(informations)


//objeto+função
const makeUp = {
    type: "Blush",
    price: 40,
    disponibilidade: (frete) => { //omitiu o parâmetro "makeUp", pois o "this" já referência
        this.price += frete //"this" fica no lugar de "makeUp"
        console.log("Disponível para compra!");
        console.log("Parabéns! Você adquiriu seu produto com êxito.")
        console.log(this.type) //usando "this" ao invés de "makeUp.type"
    }
}
console.log(makeUp)
makeUp.disponibilidade(20) //omitiu o argumento "makeUp", pois o "this" já referência
console.log(makeUp)