using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProjet.Models;
using MiniProjet.ModelsDto;
using MiniProjet.Repository.IRepository;

namespace MiniProjet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TechnicienController : ControllerBase
    {
        private readonly ITechnicienRepository _repo;
        public TechnicienController(ITechnicienRepository repo)
        {

            _repo = repo;
        }
        [HttpGet]
        public IActionResult GetAll()
        {

            return Ok(_repo.GetAll());
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var technicien = _repo.GetById(id);
            if (technicien != null)
            {
                return Ok(technicien);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpPut("{id}")]
        public IActionResult UpdateTechnicien(int id, Technicien technicien)
        {
            var result = _repo.UpdateTechnicien(id, technicien);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteTechnicien(int id)
        {
            var result = _repo.DeleteTechnicien(id);
            if (result)
            {
                return NoContent();  // Success, no content to return
            }
            else
            {
                return NotFound();
            }
        }
        [HttpPost]
        public IActionResult AddTechnicien(Technicien technicien)
        {

            var result = _repo.AddTechnicien(technicien);
            if (result != null)
            {

                return Ok(result);
            }
            else return BadRequest();
        }

    }
}
