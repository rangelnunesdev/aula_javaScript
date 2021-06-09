function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    //window.open("https://www.linkedin.com/in/rangel-nunes-82b054211/") //abre uma nova guia
    window.location.href = "https://www.linkedin.com/in/rangel-nunes-82b054211/"; //abre na mesma guia
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }

}

var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(validar);
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert (soma (5, 10)); 
alert (setReplace("Vai Japão", "Japão", "Brasil"))
*/
/*
var d = new Date();
alert (d.getMonth();
alert (d.getDay();
alert (d.getMinutes();
*/

/*
var count;
for (count = 0; count <= 5; count++){
alert(count);

};
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert (count);
    count = count + 1;
};
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}
else {
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas[0]);
alert(frutas[1].nome);
*/

/*
var frutas = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["pera", "maçã", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//alert(lista[2]);


/*
var nome = "Rangel Nunes";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
*/