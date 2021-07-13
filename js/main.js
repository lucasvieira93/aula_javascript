
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    var referencia = "https://ludopedia.com.br";
    window.open(referencia);                //abre em nova aba
    window.location.href = referencia;      //abre na mesma aba
}

function trocar(elemento){
    // document.getElementById(elemento).innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    // document.getElementById(elemento).innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/* 
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    return idade >= 18 ? "Maior de idade" : "Menor de idade" ;
}

var idade = prompt("Qual sua idade?");
alert(validaIdade(idade));
 */
/* 
var d = new Date();
alert(d.getHours() + ":" + d.getMinutes()); */

/* var count;
for(count = 0; count <= 5; count++){
    alert(count);
}; */

/* var count = 0;
while (count < 5 ){
    console.log(count);
    alert(count);
    count++;
}; */

// var idade = prompt("Qual sua idade?");

// if(idade >= 18){
//     alert("maior de idade!");
// } else {
//     alert("menor de idade!");
// };

// var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
// console.log(frutas);
// console.log(frutas[1].nome);

// var lista = ["maçã", "pêra", "laranja"];
// lista.push("uva");
// // lista.pop();
// console.log(lista.toString());
// console.log(lista.reverse());
// console.log(lista.join(" "));


// var nome = "Lucas Vieira";
// var idade = 27;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo "+ nome + " com seus " + idade + " anos!");
//alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// console.log(idade * idade2);