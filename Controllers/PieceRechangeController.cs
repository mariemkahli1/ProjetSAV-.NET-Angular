using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProjet.Models;
using MiniProjet.Repository.IRepository;

namespace MiniProjet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PieceRechangeController : ControllerBase
    {
        private readonly IPieceRechangeRepository _repo;
        public PieceRechangeController(IPieceRechangeRepository repo)
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
            var piece = _repo.GetByIdPieceRechange(id);
            if (piece != null)
            {
                return Ok(piece);
            }
            else
            {
                return NotFound($"Aucune pièce trouvée avec l'ID {id}.");
            }
        }
        [HttpPost]
        public IActionResult Add(PieceRechange piece)
        {
            var result = _repo.AddPieceRechange(piece);
            if (result != null)
            {
                return Ok();

            }
            else
            {
                return BadRequest();
            }
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] PieceRechange piece)
        {
            if (id != piece.Id)
            {
                return BadRequest("L'ID de la pièce ne correspond pas.");
            }

            var result = _repo.UpdatePieceRechange(piece);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound($"Aucune pièce trouvée avec l'ID {id}.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var success = _repo.DeletePieceRechange(id);
            if (success)
            {
                return Ok($"Pièce avec l'ID {id} supprimée avec succès.");
            }
            else
            {
                return NotFound($"Aucune pièce trouvée avec l'ID {id}.");
            }
        }
    }
}
