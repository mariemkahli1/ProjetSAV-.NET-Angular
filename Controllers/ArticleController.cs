using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProjet.Models;
using MiniProjet.Repository.IRepository;
using OCRAppApi.Context;

namespace MiniProjet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleRepository _repo;

        public ArticleController(IArticleRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IActionResult getAll()
        {
            return Ok(_repo.GetArticle());
        }
        [HttpPost]
        public IActionResult addArticle(Article article)
        {
            var result = _repo.AddArticle(article);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest();
            }

        }
        [HttpPut("{id}")]
        public IActionResult updateArticle(int id, Article updatedArticle)
        {
            if (id != updatedArticle.Id)
            {
                return BadRequest(new { message = "Article ID mismatch." });
            }

            var existingArticle = _repo.GetArticleById(id);
            if (existingArticle == null)
            {
                return NotFound(new { message = "Article not found." });
            }

            var result = _repo.UpdateArticle(updatedArticle);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(new { message = "Error updating the article." });
            }
        }
        [HttpDelete("{id}")]
        public IActionResult deleteArticle(int id)
        {
            var article = _repo.GetArticleById(id);
            if (article == null)
            {
                return NotFound(new { message = "Article not found." });
            }

            var isDeleted = _repo.DeleteArticle(id);
            if (isDeleted)
            {
                return Ok(new { message = "Article deleted successfully." });
            }
            else
            {
                return BadRequest(new { message = "Error deleting the article." });
            }
        }
       
    }
}