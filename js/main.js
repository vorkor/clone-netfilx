// Funções

function botao(){

    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    
    //alert("obrigado por clicar");

}

function redirecionar(){
    //window.open("https://www.google.com.br/");
    window.location.href = "https://www.google.com.br/";
}

function soma (n1,n2){
    
    return n1 + n2;
 
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

function load(){
    alert("Pagina")
}

function passarMouse(elemento){
    elemento.innerHTML= "Obrigado por passar o mouse";
    //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!!!";
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui!!!";
    //alert("trocar texto");
}



/*function validaIdade (idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
       validar = false; 
    }
    return validar;
}*/

//var idade = prompt("Qual a sua idade");
//console.log(validaIdade(idade));

/*function setReplace(frase, nome, nome2){
    return frase.replace(nome, nome2);

}
*/
//alert(soma(5,10));
//alert(setReplace("vai japão", "japão", "brasil"));



/*var nome = "Guilherme Galante";
var idade = 42;
var idade2 = 10;
var lista = ["maça" , "pera" , "banana"]; 
var fruta = {nome: "maça", cor: "vermelha" }; // dicionario
lista.push("uva");
//var idade3 = prompt("Qual sua idade?")
var count = 0;
var i = 0;
var d = new Date();

alert (d.getMonth()+1);*/

//lista.pop(); 

//alert("nome: " + nome +" idade: " + idade);

//console.log(nome);
//console.log(idade);
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));
/*console.log(fruta);
alert(fruta.nome);


if(idade3 > 18){
    alert("maior menor de idade");
}else{
    alert("menor de idade");
}
*/
/* repetição do while
while (count < 5){
    console.log(i)
    count++;
}
*/
// repetição for
/*
for(count = 0; count <= 5; count++){
    alert(count);
};
*/