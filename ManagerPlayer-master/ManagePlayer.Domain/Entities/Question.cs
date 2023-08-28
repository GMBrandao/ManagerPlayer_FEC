using System.Text.Json.Serialization;

namespace ManagePlayer.Domain.Entities
{
    public class Question
    {
        [JsonPropertyName("Nome")]
        public string Nome { get; set; }

        [JsonPropertyName("Descricao")]
        public string Descricao { get; set; }

        [JsonPropertyName("OpcaoPositiva")]
        public string OpcaoPositiva { get; set; }

        [JsonPropertyName("RespostaPositiva")]
        public Resposta RespostaPositiva { get; set; }

        [JsonPropertyName("OpcaoNegativa")]
        public string OpcaoNegativa { get; set; }

        [JsonPropertyName("RespostaNegativa")]
        public Resposta RespostaNegativa { get; set; }

        [JsonPropertyName("Status")]
        public bool Status { get; set; }
    }
}
