//Barra de atributos abre e fecha
const BarraStatus = document.querySelector('.stats-detalhado');

function abrirStats() {
    BarraStatus.style.display = 'grid';
}
function fecharStats() {
    BarraStatus.style.display = 'none';
}
//Fim barra de atributos

// adicionar à div de barra de stats se ela ficar funcional
//onmouseover="abrirStats()" onmouseleave="fecharStats()"