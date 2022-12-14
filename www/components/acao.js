window.addEventListener("load", () => {
  document.body.classList.remove("preload");
})

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add("open");
  });

  document.querySelector(".overlay").addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.onload = function(){
var url = "https://repetecosbook.profrodolfo.com.br/livro.php";
fetch(url)
.then(resposta => {
    return resposta.json();
})
.then(function (json){
    var d = document.querySelector('.mangas');
    var texto = '';
    for(i = 0; i < json.length ; i++){
        texto += '<div class="cont-item">';
        texto += '<a href="anime.html"><img class="img-fluid" src="'+json[i].capa+'" id="img"></a>';
        texto += '<p> '+json[i].titulo+'</p>';
        texto += '</div>';    
    }
    d.innerHTML += texto})
.catch();
}