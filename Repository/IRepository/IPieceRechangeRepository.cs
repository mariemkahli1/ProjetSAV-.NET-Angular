using MiniProjet.Models;

namespace MiniProjet.Repository.IRepository
{
    public interface IPieceRechangeRepository
    {
        PieceRechange AddPieceRechange(PieceRechange piece);

        List<PieceRechange> GetAll();
        PieceRechange GetByIdPieceRechange(int id);
        PieceRechange UpdatePieceRechange(PieceRechange piece);
        bool DeletePieceRechange(int id);
    }
}
