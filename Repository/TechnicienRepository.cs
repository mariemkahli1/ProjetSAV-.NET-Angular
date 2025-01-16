using MiniProjet.Models;
using MiniProjet.Repository.IRepository;
using OCRAppApi.Context;

namespace MiniProjet.Repository
{
    public class TechnicienRepository : ITechnicienRepository
    {
        private readonly ApplicationDbContext _context;
        public TechnicienRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        Technicien ITechnicienRepository.AddTechnicien(Technicien technicien)
        {
            try
            {
                _context.Add(technicien);
                _context.SaveChanges();
                return technicien;
            }
            catch
            {
                return null;
            }
        }

        List<Technicien> ITechnicienRepository.GetAll()
        {
            return _context.Techniciens.ToList();   
        }
        public Technicien GetById(int id)
        {
            return _context.Techniciens.FirstOrDefault(t => t.Id == id);
        }

        // Update an existing technicien
        public Technicien UpdateTechnicien(int id, Technicien technicien)
        {
            var existingTechnicien = _context.Techniciens.FirstOrDefault(t => t.Id == id);
            if (existingTechnicien != null)
            {
                existingTechnicien.Nom = technicien.Nom;
                existingTechnicien.Email = technicien.Email;
                existingTechnicien.Telephone = technicien.Telephone;
                _context.SaveChanges();
                return existingTechnicien;
            }
            return null;  // Technicien not found
        }

        // Delete a technicien by ID
        public bool DeleteTechnicien(int id)
        {
            var technicien = _context.Techniciens.FirstOrDefault(t => t.Id == id);
            if (technicien != null)
            {
                _context.Techniciens.Remove(technicien);
                _context.SaveChanges();
                return true;
            }
            return false;  // Technicien not found
        }
    }
}
