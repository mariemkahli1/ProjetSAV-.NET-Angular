using Microsoft.EntityFrameworkCore;
using MiniProjet.Models;
using MiniProjet.Repository.IRepository;
using OCRAppApi.Context;

namespace MiniProjet.Repository
{
    public class ReclamationRepository : IReclamationRepository
    {
        private readonly ApplicationDbContext _context;
      public   ReclamationRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        Reclamation IReclamationRepository.AddReclamation(Reclamation reclamation)
        {
            try
            {
                _context.Reclamations.Add(reclamation);
                _context.SaveChanges();
                return reclamation;
            }
            catch
            {
                return null;
            }
        }

        List<Reclamation> IReclamationRepository.GetAll()
        {
            return _context.Reclamations.ToList();
        }
        public Reclamation GetById(int id)
        {
            return _context.Reclamations
                           .Include(r => r.article)   // Si vous avez des relations avec d'autres entités
                           .Include(r => r.Client)
                           .FirstOrDefault(r => r.Id == id);
        }

        // Supprimer une réclamation par son ID
        public void DeleteReclamation(int id)
        {
            var reclamation = _context.Reclamations.Find(id);
            if (reclamation != null)
            {
                _context.Reclamations.Remove(reclamation);
                _context.SaveChanges();
            }
        }
    }
}
