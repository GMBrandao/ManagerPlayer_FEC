using AutoMapper;
using ManagePlayer.Domain.Dto;
using ManagePlayer.Domain.Entities;
using System.Text.Json;

namespace ManagePlayer.Domain.MapperProfiles
{
    public class DecisoesProfile : Profile
    {
        public DecisoesProfile()
        {
            CreateMap<DecisoesDto, Question>()
                .ForMember(dest => dest.Nome, opt => opt.MapFrom(src => src.Nome))
                .ForMember(dest => dest.Descricao, opt => opt.MapFrom(src => src.Descricao))
                .ForMember(dest => dest.OpcaoPositiva, opt => opt.MapFrom(src => src.OpcaoPositiva))
                .ForMember(dest => dest.RespostaPositiva, opt => opt.MapFrom(src => DeserializeResposta(src.RespostaPositiva)))
                .ForMember(dest => dest.OpcaoNegativa, opt => opt.MapFrom(src => src.OpcaoNegativa))
                .ForMember(dest => dest.RespostaNegativa, opt => opt.MapFrom(src => DeserializeResposta(src.RespostaNegativa)))
                ;

            CreateMap<Question, DecisoesDto>()
                .ForMember(dest => dest.Nome, opt => opt.MapFrom(src => src.Nome))
                .ForMember(dest => dest.Descricao, opt => opt.MapFrom(src => src.Descricao))
                .ForMember(dest => dest.OpcaoPositiva, opt => opt.MapFrom(src => src.OpcaoPositiva))
                .ForMember(dest => dest.RespostaPositiva, opt => opt.MapFrom(src => SerializeResposta(src.RespostaPositiva)))
                .ForMember(dest => dest.OpcaoNegativa, opt => opt.MapFrom(src => src.OpcaoNegativa))
                .ForMember(dest => dest.RespostaNegativa, opt => opt.MapFrom(src => SerializeResposta(src.RespostaNegativa)));
        }

        public Resposta DeserializeResposta(string jsonResposta)
        {
            return JsonSerializer.Deserialize<Resposta>(jsonResposta);
        }

        public string SerializeResposta(Resposta objResposta)
        {
            return JsonSerializer.Serialize(objResposta);
        }

    }
}
