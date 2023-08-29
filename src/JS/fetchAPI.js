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
}

function CliqueBotao(){
   callAPI();
   Aleatorio();
}

const callAPI = () => {
   const url = "https://localhost:44307/api/Decisoes"
   let validCard;
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
   investidor += parseFloat(RespostaNegativa.SatisfacaoInvestidor);
   funcionario += parseFloat(RespostaNegativa.SatisfacaoFuncionario);
   cliente += parseFloat(RespostaNegativa.SatisfacaoCliente);
   popularidade += parseFloat(RespostaNegativa.Popularidade);

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
      if(renda >= 100) 
         popPerdeu('Você trabalhou tão excelentemente que outras empresas ficaram sabendo do nosso lucro, e todo mundo quer uma parte. Parece que daqui a pouco estaremos sob nova geração.');

      if(renda <= 0) 
         popPerdeu('Cara, você está tão pobre que não tem mais dinheiro para pagar o narrador.');

      if(investidor > 99) 
         popPerdeu('Parabéns, seus investidores estão super satisfeitos com as ações da empresa. Agora que não resta mais nada para você fazer por eles, você ganhou umas férias. Não se preocupe com a empresa, eles vão cuidar dela direitinho durante suas férias.');

      if(investidor < 1)
         popPerdeu('Seus investidores perderam a paciência. Nenhum deles liga para todo o resto que você fez. Do que adianta para eles se as ações estão baixas? Se quiser continuar na empresa, terá que começar do zero, limpando os banheiros dela.');
        
      if(funcionario > 99) 
         popPerdeu('Seus funcionários te amam, eles brilham com energia e criatividade. Já até colocaram seu nome em 14 bebês diferentes. Eles realmente te amam, menos quando você pede para eles trabalharem.');

      if(funcionario < 1)
         popPerdeu('Seus funcionários te odeiam, a maioria já saiu, e críticas em sites avaliativos da sua empresa são uma coisa diária. Aqueles que ficaram continuam fazendo greves e protestos, outros costumam colocar uma dose extra no seu café.');
        
      if(cliente > 99)
         popPerdeu('Todo o mundo te ama, e seu último projeto recebeu todos os prêmios Nobel. Parabéns! Agora que as expectativas para o seu próximo projeto não podem ser superadas, é só fazer de novo, fácil, certo?... Certo?');

      if(cliente < 1)
         popPerdeu('Ontem saiu uma matéria no jornal da sua empresa. Nela dizia: "Além da qualidade horripilante de seus projetos e da ética empresarial, o CEO desta empresa é um pedaço de lixo." Foi sua mãe que escreveu.');

      if(popularidade > 99)
         popPerdeu('Uau, o mundo inteiro conhece sua empresa, mas agora as avaliações dos seus jogos estão sempre baixas. Sua empresa está sendo cancelada e há uma câmera no seu banheiro. Parece que você falhou em agradar o mundo inteiro.');

      if(popularidade < 1)
         popPerdeu('Nem sequer uma única venda é possível. Seus trabalhadores acham que estão em um escritório de contabilidade. Sua família acha que você está fazendo estágio em vez de... Desculpe, o que você estava fazendo mesmo?');
   }
}

function popPerdeu(frase){
   Swal.fire({
      icon: 'error',
      title: 'Game Over',
      color: '#830303',
      text: frase,
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
      text: 'Você fez isso! Como o visionário dono da Manager Player, transformou um modesto início em um império global da diversão digital. A equipe agradece por sua incrível jornada de sucesso! O futuro nos reserva coisas incríveis!',
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
      text: 'Jogue como o dono de uma empresa de jogos em situações aleatórias, não deixe seus status abaixo de 0% ou acima de 100%.',
      background: '#ddd',
      confirmButtonColor: '#00bb00',
      confirmButtonText:'JOGAR'
   })
},200);