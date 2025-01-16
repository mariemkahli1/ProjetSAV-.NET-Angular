using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MiniProjet.Migrations
{
    /// <inheritdoc />
    public partial class DbSav : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reclamations_Interventions_InterventionId",
                table: "Reclamations");

            migrationBuilder.DropIndex(
                name: "IX_Reclamations_InterventionId",
                table: "Reclamations");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Reclamations_InterventionId",
                table: "Reclamations",
                column: "InterventionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reclamations_Interventions_InterventionId",
                table: "Reclamations",
                column: "InterventionId",
                principalTable: "Interventions",
                principalColumn: "Id");
        }
    }
}
