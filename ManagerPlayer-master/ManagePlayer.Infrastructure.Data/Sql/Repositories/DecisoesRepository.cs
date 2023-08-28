using Dapper;
using ManagePlayer.Domain.Dto;
using ManagePlayer.Domain.Interfaces.Repositories;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace ManagePlayer.Infrastructure.Data.Sql.Repositories
{
    public class DecisoesRepository : IDecisoesRepository
    {
        //public SqlConnection _conn;
        public MySqlConnection _conn;
        public DecisoesRepository()
        {
            string connString = "Server=localhost;Database=FeiraProfissao;Uid=dev;Pwd=1234;";
            _conn = new MySqlConnection(connString);
            //string connString = "Data Source=DESKTOP-60EM0EN;Initial Catalog=FeiraProfissao;Persist Security Info=True;User ID=sa;Password=123456789";
            //_conn = new SqlConnection(connString);
        }

        public async Task<bool> AddQuestionAsync(DecisoesDto questao)
        {
            string sql = @"INSERT INTO Decisoes 
                         (Nome, Descricao, OpcaoPositiva, RespostaPositiva, OpcaoNegativa, RespostaNegativa, Status)
                         Values(@Nome, @Descricao, @OpcaoPositiva, @RespostaPositiva, @OpcaoNegativa, @RespostaNegativa, @Status)";

            _conn.Open();
            await _conn.ExecuteAsync(
                sql: sql,
                param: new
                {
                    Nome = questao.Nome,
                    Descricao = questao.Descricao,
                    OpcaoPositiva = questao.OpcaoPositiva,
                    RespostaPositiva = questao.RespostaPositiva,
                    OpcaoNegativa = questao.OpcaoNegativa,
                    RespostaNegativa = questao.RespostaNegativa,
                    Status = questao.Status
                }
            );
            _conn.Close();

            return true;
        }

        public IEnumerable<DecisoesDto> GetQuestions()
        {
            string sql = @"SELECT Id
                                 ,Nome
                                 ,Descricao
                                 ,OpcaoPositiva
                                 ,RespostaPositiva
                                 ,OpcaoNegativa
                                 ,RespostaNegativa
                                 ,Status
                           FROM Decisoes";

            _conn.Open();
            var query = _conn.Query<DecisoesDto>(sql);
            _conn.Close();

            return query;
        }
    }
}
