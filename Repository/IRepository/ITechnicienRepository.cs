using MiniProjet.Models;

namespace MiniProjet.Repository.IRepository
{
    public interface ITechnicienRepository
    {
        Technicien AddTechnicien(Technicien technicien);

        List<Technicien> GetAll();
        Technicien GetById(int id);  // Nouvelle méthode

        Technicien UpdateTechnicien(int id, Technicien technicien);  // Nouvelle méthode

        bool DeleteTechnicien(int id);
    }
}
