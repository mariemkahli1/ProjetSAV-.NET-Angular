﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiniProjet.Models;
using MiniProjet.Repository.IRepository;

namespace MiniProjet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;
        private object _context;

        public ClientController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_clientRepository.GetClients());
        }
        [HttpPost]
        public IActionResult AddClient(Client client)
        {
            var result = _clientRepository.AddClient(client);
            if (result != null)
            {
                return Ok();

            }
            else
            {
                return BadRequest();
            }
        }
        [HttpPut("{id}")]
        public IActionResult UpdateClient(int id, Client client)
        {
            if (id != client.Id)
            {
                return BadRequest(new { message = "Client ID mismatch." });
            }

            var updatedClient = _clientRepository.UpdateClient(client);
            if (updatedClient != null)
            {
                return Ok(updatedClient);
            }
            else
            {
                return NotFound(new { message = "Client not found." });
            }
        }
    }

}
