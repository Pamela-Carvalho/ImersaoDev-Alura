var menor = 1;
var maior = 10;
console.log("menor: " + menor);
console.log("maior: " + maior);
var random1 = (Math.floor(Math.random() * (maior - menor + 1)) + menor);

var teste1 = "O número que você pensou é menor ou maior que " + random1 + "?";

document.getElementById("teste").innerHTML = teste1;

var qtdPergunta = 3;

function getResposta(){
  
  if(qtdPergunta > 0){
    var resposta1 = document.getElementById("envio").value.toLowerCase();

    // verificação
    if(resposta1 == "maior"){
      // alert(random1);
      menor = random1 + 1;
      random1 = (Math.floor(Math.random() * (maior - (menor + 1) + 1)) + menor);
      // alert("funfando");
      console.log("menor: " + menor);
      console.log("maior: " + maior);

      var teste2 = "O número que você pensou é menor ou maior que " + random1 + "?";

      document.getElementById("teste").innerHTML = teste2;
      qtdPergunta--;
      console.log(qtdPergunta);
    }
    else if(resposta1 == "menor"){
      // alert(random1);
      maior = random1 - 1;
      random1 = (Math.floor(Math.random() * ((maior - 1) - menor + 1)) + menor);
      // alert("funfandinho");
      console.log("menor: " + menor);
      console.log("maior: " + maior);

      var teste2 = "O número que você pensou é menor ou maior que " + random1 + "?";

      document.getElementById("teste").innerHTML = teste2;
      qtdPergunta--;
      console.log(qtdPergunta);
    }
  }
  else{
    document.getElementById("btn1").style.display = "none"; 
    document.getElementById("btn3").style.display = "inline"; 
  }
}

function correto(){
 document.getElementById("resultado").style.display = "block"; document.getElementById("resultado").innerHTML = "Acertei! Essa foi moleza.";
}

function errado(){
  document.getElementById("resultado").style.display = "block"; 
  document.getElementById("resultado").innerHTML = "Poxa, essa estava difícil!";
}