var tituloFilmes = [];
var imgFilmes = [];
var videoFilmes = [];

function adicionar(){
  var titulo = document.getElementById("titulo").value;
  var banner = document.getElementById("banner").value;
  var getTrailer = document.getElementById("trailer").value;
  
  var trailer = (getTrailer.substring(32,100));
  
  if((getTrailer.startsWith('https://www.youtube.com/')) && (banner.endsWith(".jpg"))){
    tituloFilmes.push(titulo);
    imgFilmes.push(banner);
    videoFilmes.push(trailer);

    listarFilmes(tituloFilmes, imgFilmes, videoFilmes);
  }
  else{
    alert("Informações inválidas. Tente novamente.");
  }
  
}
var i = 0;
function listarFilmes(tituloFilmes, imgFilmes, videoFilmes){
  var $wrapper = document.querySelector('.filmes'),

  HTMLNovo = "<div><li><a href=#" + i + "><img class=detalhes src=" + imgFilmes[i] + "><p class=titulo>" + tituloFilmes[i] + "</p></a></li></div><div id=" + i + " class=alinhar><div class=sinopse><a href=#filmes class=btn-close id=close><strong>x</strong></a><div><iframe width=560 height=315 src=https://www.youtube.com/embed/" + videoFilmes[i] + " title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe><h4>" + tituloFilmes[i] + "</h4></div></div></div>";

  $wrapper.insertAdjacentHTML('beforeend', HTMLNovo);
  i++;
}

function pesquisar(){
	var input, filtro, menu, menuItens, links;
	input = document.getElementById("busca");
	filtro = input.value.toUpperCase();
	menu = document.getElementById("filmes");
	menuItens = menu.getElementsByTagName("li");

	for (var i = 0; i < menuItens.length; i++) {
		links = menuItens[i].getElementsByTagName("a")[0];
		if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
			menuItens[i].style.display = "";
		}
		else{
			menuItens[i].style.display = "none";
		}
	}
}