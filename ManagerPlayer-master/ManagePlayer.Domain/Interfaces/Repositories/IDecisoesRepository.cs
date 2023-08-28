using ManagePlayer.Domain.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagePlayer.Domain.Interfaces.Repositories
{
    public interface IDecisoesRepository
    {
        IEnumerable<DecisoesDto> GetQuestions();
        Task<bool> AddQuestionAsync(DecisoesDto questao);
    }
}
