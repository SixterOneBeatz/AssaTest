using Assa.Test.Backend.Configurations;
using Assa.Test.Backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Assa.Test.Backend.Context
{
    public class AssaDbContext(DbContextOptions<AssaDbContext> options, IOptions<SeedDataConfiguration> seedDataConfiguration) : DbContext(options)
    {
        private readonly IOptions<SeedDataConfiguration> _seedDataConfiguration = seedDataConfiguration;
        public DbSet<MarcaAuto> MarcasAutos { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder); 
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MarcaAuto>().Property(p => p.Id).UseIdentityColumn();
            modelBuilder.Entity<MarcaAuto>().HasData(_seedDataConfiguration.Value.SeedMarcas);
            base.OnModelCreating(modelBuilder);
        }
    }
}
