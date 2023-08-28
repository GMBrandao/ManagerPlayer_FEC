const callAPI = () => {
    const url = "https://localhost:44307/api/Decisoes"

    fetch(url)
     .then(response =>response.json ())
     .then(cartas => {
        criarCarta(cartas)
     })
}
callAPI()

function criarCarta(cartas) {
   const nome = document.getElementById("nome");
   const respostapos = document.getElementById("respostapos");
   const respostaneg = document.getElementById("respostaneg");
   nome.innerHTML = cartas.Nome;
   respostapos.innerHTML = cartas.RespostaPositiva;
   respostaneg.innerHTML = cartas.RespostaNegativa;
}