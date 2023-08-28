using Microsoft.EntityFrameworkCore;

namespace ManagePlayer.Domain.Entities
{
    [Keyless]
    public class Resposta
    {
        public int Popularidade { get; set; }
        public int SatisfacaoCliente { get; set; }
        public int SatisfacaoFuncionario { get; set; }
        public int SatisfacaoInvestidor { get; set; }
        public int Renda { get; set; }
    }
}
