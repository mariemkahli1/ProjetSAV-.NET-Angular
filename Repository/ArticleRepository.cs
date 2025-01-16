using MiniProjet.Models;
using MiniProjet.Repository.IRepository;
using OCRAppApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MiniProjet.Repository
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly ApplicationDbContext _context;

        public ArticleRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Article AddArticle(Article article)
        {
            try
            {
                _context.Articles.Add(article);
                _context.SaveChanges();
                return article;
            }
            catch (Exception ex)
            {
                // Log the error message for debugging
                Console.WriteLine($"Error adding article: {ex.Message}");
                return null;
            }
        }

        public List<Article> GetArticle()
        {
            try
            {
                return _context.Articles.ToList();
            }
            catch (Exception ex)
            {
                // Log the error message for debugging
                Console.WriteLine($"Error retrieving articles: {ex.Message}");
                return new List<Article>();
            }
        }

        public Article GetArticleById(int id)
        {
            try
            {
                return _context.Articles.FirstOrDefault(a => a.Id == id);
            }
            catch (Exception ex)
            {
                // Log the error message for debugging
                Console.WriteLine($"Error retrieving article by ID {id}: {ex.Message}");
                return null;
            }
        }

        public bool DeleteArticle(int id)
        {
            try
            {
                var article = _context.Articles.FirstOrDefault(a => a.Id == id);
                if (article != null)
                {
                    _context.Articles.Remove(article);
                    _context.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                // Log the error message for debugging
                Console.WriteLine($"Error deleting article with ID {id}: {ex.Message}");
                return false;
            }
        }

        public Article UpdateArticle(Article article)
        {
            try
            {
                var existingArticle = _context.Articles.FirstOrDefault(a => a.Id == article.Id);
                if (existingArticle != null)
                {
                    existingArticle.Libelle = article.Libelle;
                    existingArticle.EstSousGarantie = article.EstSousGarantie;
                    existingArticle.Prix = article.Prix;

                    _context.Articles.Update(existingArticle);
                    _context.SaveChanges();
                    return existingArticle;
                }
                return null;
            }
            catch (Exception ex)
            {
                // Log the error message for debugging
                Console.WriteLine($"Error updating article with ID {article.Id}: {ex.Message}");
                return null;
            }
        }
    }
}
