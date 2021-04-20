var imgFilmes = ["https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZGY2ZGFkYjctOWY2Ni00MGQ5LWE4OTItNjJhNzA5MWFmMjk1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_UY268_CR1,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTNjMTM1YWYtZWQ3Yy00OGI1LWEyZjUtYTk3OTk5NGIxMzIyXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZGUzZjRiMTYtZmNjYi00MWU4LWEzMTYtYTI0MWIxODE5YTUzXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjEzOTExOTEtZmEyZC00MGQ2LWFmMjQtZGY2MDg2ZGY4YWVmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTM3MjYwODA3MV5BMl5BanBnXkFtZTcwOTc5Nzc4Nw@@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYmFlMDZkMWItZjVkMi00MzhmLWFhMjUtYTRjNjE1ZjE5ZGMzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDAyNmRhZGUtMjAxYS00Y2VhLTllYzEtYzM4MjU2MzU3ZmZjXkEyXkFqcGdeQXVyNzg1MDQ1NzA@._V1_UY268_CR9,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTY2ZTAxNWUtYjVjYy00OWE1LWE0YTktNWU2MjFhZmRiMTAzXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_UY268_CR12,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTk2NzEyNTQtZTQ5MS00MjAyLTgzMDMtNDNkYTBkM2M2OTU3XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjdiZjEzZmEtZDc1Yi00NGRhLThmYWItODMyNWM1NGExMzViXkEyXkFqcGdeQXVyMTEwOTMwMjk0._V1_UY268_CR0,0,182,268_AL_.jpg"];

var tituloFilmes = ["Gravity Falls", "Hora de Aventura", "Phineas e Ferb", "Steven Universo", "The Loud House", "Kick Buttowski", "Apenas um Show", "Chowder", "Titio Avô", "Clarêncio - O Otimista", "Bob Esponja", "O Incrível Mundo de Gumball"];

// for(var i = 0; i < imgFilmes.length; i++){
//   document.write("<div class=filmes><img class=detalhes src=" + imgFilmes[i] + "/></div>");
// }

for(var i = 0; i < imgFilmes.length; i++){
  var $wrapper = document.querySelector('.filmes'),

  HTMLNovo = "<div><li><a href=#" + i + "><img class=detalhes src=" + imgFilmes[i] + "><p class=titulo>" + tituloFilmes[i] + "</p></a></li></div>";

  $wrapper.insertAdjacentHTML('beforeend', HTMLNovo);
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