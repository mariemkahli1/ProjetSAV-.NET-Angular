using MiniProjet.Models;
using MiniProjet.Repository.IRepository;
using OCRAppApi.Context;

namespace MiniProjet.Repository
{
    public class PieceRechangeRepository : IPieceRechangeRepository
    {
        private readonly ApplicationDbContext _context;
        public PieceRechangeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        PieceRechange IPieceRechangeRepository.AddPieceRechange(PieceRechange piece)
        {
            try
            {
                _context.Add(piece);
                _context.SaveChanges(); 
                return piece;   

            }
            catch {

                return null;
            }
        }
        public PieceRechange GetByIdPieceRechange(int id) // Implémentation
        {
            return _context.PiecesRechange.FirstOrDefault(p => p.Id == id);
        }

        List<PieceRechange> IPieceRechangeRepository.GetAll()
        {
            return _context.PiecesRechange.ToList();
        }
        public PieceRechange UpdatePieceRechange(PieceRechange piece)
        {
            var existingPiece = _context.PiecesRechange.FirstOrDefault(p => p.Id == piece.Id);
            if (existingPiece != null)
            {
                existingPiece.Nom = piece.Nom;
                //existingPiece.Description = piece.Description;
                existingPiece.Prix = piece.Prix;

                _context.SaveChanges();
                return existingPiece;
            }
            return null;
        }

        public bool DeletePieceRechange(int id)
        {
            var piece = _context.PiecesRechange.FirstOrDefault(p => p.Id == id);
            if (piece != null)
            {
                _context.PiecesRechange.Remove(piece);
                _context.SaveChanges();
                return true;
            }
            return false;
        }
    }
}

