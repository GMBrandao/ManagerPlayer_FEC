using AutoMapper;
using ManagePlayer.Domain.Dto;
using ManagePlayer.Domain.Entities;
using ManagePlayer.Domain.Interfaces.Repositories;
using ManagePlayer.Domain.Interfaces.Service;
using ManagePlayer.Domain.MapperProfiles;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagePlayer.Domain.Service
{
    public class DecisoesService : IDecisoesService
    {
        public IDecisoesRepository _decisoesRepository;
        private readonly IMapper _mapper;

        public DecisoesService(
            IDecisoesRepository decisoesRepository
        )
        {
            _decisoesRepository = decisoesRepository;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<DecisoesProfile>();
                cfg.CreateMap<DecisoesDto, Question>();
            });
            _mapper = config.CreateMapper();
        }

        public async Task<bool> AddQuestionsAsync(IEnumerable<Question> decisoesDto)
        {
            try
            {
                foreach (var decisao in decisoesDto)
                {
                    await _decisoesRepository.AddQuestionAsync(_mapper.Map<DecisoesDto>(decisao));
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public IEnumerable<DecisoesDto> GetQuestions()
        {
            try
            {
                return _decisoesRepository.GetQuestions();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
