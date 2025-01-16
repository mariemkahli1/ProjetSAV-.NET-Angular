using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProjet.Models;
using MiniProjet.Repository.IRepository;

namespace MiniProjet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReclamationController : ControllerBase
    {
        private readonly IReclamationRepository _repo;
        public ReclamationController (IReclamationRepository repo)
        {
            _repo = repo;
        }
      
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repo.GetAll());
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var reclamation = _repo.GetById(id);
            if (reclamation == null)
            {
                return NotFound();
            }
            return Ok(reclamation);
        }
        [HttpPost]
        public IActionResult Add(Reclamation reclamation)
        {
            var result = _repo.AddReclamation(reclamation);
            if (result != null)
            {
                return Ok();

            }
            else
            {
                return BadRequest();
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var reclamation = _repo.GetById(id);
            if (reclamation == null)
            {
                return NotFound();
            }

            _repo.DeleteReclamation(id);
            return NoContent(); // 204 No Content
        }
    }
}

