using ManagePlayer.Domain.Dto;
using ManagePlayer.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagePlayer.Domain.Interfaces.Service
{
    public interface IDecisoesService
    {
        IEnumerable<DecisoesDto> GetQuestions();
        Task<bool> AddQuestionsAsync(IEnumerable<Question> decisoesDto);
    }
}
