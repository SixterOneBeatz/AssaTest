using Assa.Test.Backend.Context;
using Assa.Test.Backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Assa.Test.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcasAutosController(AssaDbContext assaDbContext) : ControllerBase
    {
        private readonly AssaDbContext _assaDbContext = assaDbContext;

        [HttpGet]
        public async Task<List<MarcaAuto>> Get()
        {
            var result = await _assaDbContext.MarcasAutos.ToListAsync();

            return result;
        }
    }
}
