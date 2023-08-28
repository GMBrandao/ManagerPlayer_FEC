let randomNumber;
let count = 0;
let RespostaPositiva;
let RespostaNegativa;
let renda = 500000;
let investidor = 50;
let cliente = 50;
let funcionario = 50;
let popularidade = 50;

function Onload(){
   callAPI();
   Aleatorio();
   barra_renda();
   barra_cliente();
   barra_investidor();
   barra_funcionario();
   barra_popularidade();
   info();
}

function CliqueBotao(){
   callAPI();
   Aleatorio();
}

const callAPI = () => {
   const url = "https://localhost:44307/api/Decisoes"

   fetch(url)
    .then(response =>response.json ())
    .then(cartas => {
       criarCarta(cartas[parseInt(Aleatorio(),10)])
    })
}
callAPI();

const barra_renda = () =>{
   const bar_renda = document.getElementById("barra-renda");
   const num_renda = document.getElementById("spanRenda");

   num_renda.innerHTML = ("R$ "+ parseFloat(renda)
      .toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }));
   
      bar_renda.style.heigth = `${(parseFloat(renda) / 10000.00)}%`;
}
barra_renda();

const barra_investidor = () =>{
   const bar_investidor = document.getElementById("barra-investidor");
   const num_investidor = document.getElementById("spanInvestidor");

   num_investidor.innerHTML = (investidor + "%");
   bar_investidor.style.heigth = `${investidor}%`;
}
barra_investidor();

const barra_cliente = () =>{
   const bar_cliente = document.getElementById("barra-cliente");
   const num_cliente = document.getElementById("spanCliente");

   num_cliente.innerHTML = (cliente + "%");
   bar_cliente.style.heigth = `${cliente}%`;
}
barra_cliente();

const barra_funcionario = () =>{
   const bar_cliente = document.getElementById("barra-funcionario");
   const num_cliente = document.getElementById("spanFuncionario");

   num_cliente.innerHTML = (funcionario + "%");
   bar_cliente.style.heigth = `${funcionario}%`;
}
barra_funcionario();

const barra_popularidade = () =>{
   const bar_cliente = document.getElementById("barra-popularidade");
   const num_cliente = document.getElementById("spanPopularidade");

   num_cliente.innerHTML = (popularidade + "%");
   bar_cliente.style.heigth = `${popularidade}%`;
}
barra_popularidade();

function Aleatorio(){
   randomNumber = Math.floor(Math.random()*51);
   console.log(parseInt(randomNumber));
   return randomNumber;
}

function criarCarta(cartas) {
   const nome = document.getElementById("nome");
   const descricao = document.getElementById("descricao");
   const positivo = document.getElementById("botaoSim");
   const negativo = document.getElementById("botaoNao");
   
   count += 1;

   nome.innerHTML = cartas.Nome;
   negativo.innerHTML = cartas.OpcaoNegativa;
   positivo.innerHTML = cartas.OpcaoPositiva;
   descricao.innerHTML = cartas.Descricao;
   
   RespostaPositiva = JSON.parse(cartas.RespostaPositiva);
   RespostaNegativa = JSON.parse(cartas.RespostaNegativa);
}

function cliqueSim(){
   renda += parseFloat(RespostaPositiva.Renda);
   investidor += parseFloat(RespostaPositiva.SatisfacaoInvestidor);
   funcionario += parseFloat(RespostaPositiva.SatisfacaoFuncionario);
   cliente += parseFloat(RespostaPositiva.SatisfacaoCliente);
   popularidade += parseFloat(RespostaPositiva.Popularidade);

   FinishGame(
      renda/10000,
      investidor,
      funcionario,
      cliente,
      popularidade
   );

   barra_renda();
   barra_cliente();
   barra_investidor();
   barra_funcionario();
   barra_popularidade();
}

function cliqueNao(){
   renda += parseFloat(RespostaNegativa.Renda);
   investidor += parseFloat(RespostaPositiva.satisfacaoInvestidor);
   funcionario += parseFloat(RespostaPositiva.satisfacaoFuncionario);
   cliente += parseFloat(RespostaPositiva.satisfacaoCliente);
   popularidade += parseFloat(RespostaPositiva.popularidade);

   FinishGame(
      renda/10000,
      investidor,
      funcionario,
      cliente,
      popularidade
   );

   barra_renda();
   barra_cliente();
   barra_investidor();
   barra_funcionario();
   barra_popularidade();
}

function FinishGame(
   renda,
   investidor,
   funcionario,
   cliente,
   popularidade
   ) 
{
   if(count > 14)
      popGanhou();
   else{
      if(renda > 99.99 || renda <= 0)
         popPerdeu();

      if(investidor > 99 || investidor < 1)
         popPerdeu();
        
      if(funcionario > 99 || funcionario < 1)
         popPerdeu();
        
      if(cliente > 99 || cliente < 1)
         popPerdeu();

      if(popularidade > 99 || popularidade < 1)
         popPerdeu();
   }
}

function popPerdeu(){
   Swal.fire({
      icon: 'error',
      title: 'Game Over',
      color: '#830303',
      text:'Não foi dessa vez',
      footer:'<a href="./Jogo.html">&#8635; Reiniciar</a>',
      footerColor: '#222222',
      background: '#ddd',
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showConfirmButton: false
   })
}

function popGanhou(){
   Swal.fire({
      icon: 'success',
      title: 'Parabéns',
      color: '#00bb00',
      footer:'<a href="./Jogo.html">&#8635; Reiniciar</a>',
      text: 'Você ganhou!',
      footerColor: '#222222',
      background: '#ddd',
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showConfirmButton: false
   })
}

setTimeout(function info(){
   Swal.fire({
      icon:'question',
      title: 'Como jogar',
      text: 'Jogue como o dono de uma empresa de jogos em situações aleatórias e com suas decisões você poderá ganhar ou perder.',
      background: '#ddd',
      confirmButtonColor: '#00bb00',
      confirmButtonText:'JOGAR'
   })
},200);