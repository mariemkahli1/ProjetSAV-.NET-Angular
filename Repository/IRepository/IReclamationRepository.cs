using MiniProjet.Models;

namespace MiniProjet.Repository.IRepository
{
    public interface IReclamationRepository
    {
        Reclamation AddReclamation(Reclamation reclamation);

        List<Reclamation> GetAll();
        Reclamation GetById(int id);  // Nouvelle méthode pour récupérer une réclamation par son ID
        void DeleteReclamation(int id);
    }

}
