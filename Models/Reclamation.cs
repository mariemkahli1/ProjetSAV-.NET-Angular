using System.ComponentModel.DataAnnotations.Schema;

namespace MiniProjet.Models
{
    public class Reclamation
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime DateReclamation { get; set; }
        public int idArticleReclamation { get; set; }

        [ForeignKey("idArticleReclamation")]
        public Article? article {  get; set; }   
        public int EtatId { get; set; }

        
        public int ClientId { get; set; }

        [ForeignKey("ClientId")]
        public Client? Client { get; set; }
        public int? InterventionId { get; set; }

        

    }

}
