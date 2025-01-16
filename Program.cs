using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MiniProjet.Models;
using Scrutor;
using OCRAppApi.Context;
using System;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configurer DbContext avec MySQL (vous avez utilisé SQL Server, assurez-vous de la bonne chaîne de connexion si vous passez à MySQL)
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")), ServiceLifetime.Scoped);

// Configuration de CORS avec une origine spécifique (Angular)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", builder =>
    {
        builder.WithOrigins("http://localhost:4200")  // Remplacez ceci par l'URL de votre application Angular en développement
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Enregistrer les services avec Scrutor (ajout des classes Repository)
builder.Services.Scan(scan => scan
               .FromCallingAssembly()
               .AddClasses(classes => classes.Where(type => type.Name.EndsWith("Repository")))
               .UsingRegistrationStrategy(RegistrationStrategy.Skip)
               .AsImplementedInterfaces()
               .WithTransientLifetime());

// Configuration de l'authentification JWT
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});

// Configuration de Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Appliquer la politique CORS spécifique
app.UseCors("AllowAngular");

// Appliquer les migrations lors du démarrage de l'application (si nécessaire)
app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configuration de l'HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Authentification et autorisation
app.UseAuthentication(); // N'oubliez pas d'ajouter UseAuthentication() pour JWT
app.UseAuthorization();

// Définir les contrôleurs
app.MapControllers();

// Lancer l'application
app.Run();





