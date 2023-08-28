using ManagePlayer.Domain.Dto;
using ManagePlayer.Domain.Entities;
using ManagePlayer.Domain.Interfaces.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ManagePlayer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DecisoesController : ControllerBase
    {
        public IDecisoesService _decisoesService;

        public DecisoesController(
            IDecisoesService decisoesService
        )
        {
            _decisoesService = decisoesService;
        }

        // GET: api/<DecisoesController>
        [HttpGet]

        public IEnumerable<DecisoesDto> Get()
        {
            return _decisoesService.GetQuestions();
        }

        // POST api/<DecisoesController>
        [HttpPost]
        public void Post([FromBody] IEnumerable<Question> decisoes)
        {
            _decisoesService.AddQuestionsAsync(decisoes);
        }

    }
}
