using MiniProjet.Models;
using MiniProjet.Repository.IRepository;
using OCRAppApi.Context;

namespace MiniProjet.Repository
{
    public class ClientRepository : IClientRepository
    {
        private readonly ApplicationDbContext _context;

        public ClientRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        Client IClientRepository.AddClient(Client client)
        {
            _context.Clients.Add(client);
            _context.SaveChanges();
            return client;
        }

        Client IClientRepository.GetClientById(int id)
        {
            return _context.Clients.First(c => c.Id == id);
        }

        List<Client> IClientRepository.GetClients()
        {
            return _context.Clients.ToList();
        }

        // Mettre à jour un client
        public Client UpdateClient(Client client)
        {
            try
            {
                var existingClient = _context.Clients.FirstOrDefault(c => c.Id == client.Id);
                if (existingClient != null)
                {
                    // Mettre à jour les propriétés du client
                    existingClient.FirstName = client.FirstName;
                    existingClient.LastName = client.LastName;
                    existingClient.USerName = client.USerName;
                    existingClient.Password = client.Password;

                    _context.SaveChanges();
                    return existingClient;
                }
                return null; // Si le client n'est pas trouvé
            }
            catch
            {
                return null;
            }
        }

    }
}
