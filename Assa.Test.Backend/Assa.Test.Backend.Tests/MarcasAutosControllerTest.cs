using Assa.Test.Backend.Configurations;
using Assa.Test.Backend.Context;
using Assa.Test.Backend.Controllers;
using Assa.Test.Backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moq;

namespace Assa.Test.Backend.Tests
{
    public class MarcasAutosControllerTest
    {
        private readonly AssaDbContext _dbContext;
        private readonly MarcasAutosController _controller;
        private readonly IOptions<SeedDataConfiguration> _options;
        public MarcasAutosControllerTest()
        {
            var options = new DbContextOptionsBuilder<AssaDbContext>()
              .UseNpgsql("Server=localhost; port=5432; Database=Assa; User Id=postgres;Password=root;")
              .Options;

            var configMock = new Mock<IOptions<SeedDataConfiguration>>();
            configMock.Setup(x => x.Value).Returns(() => new SeedDataConfiguration
            {
                SeedMarcas = new()
                {
                    new(){Id = 1, Nombre = "Porsche"},
                    new(){Id = 2, Nombre = "BMW"},
                    new(){Id = 3, Nombre = "Audi"},
                    new(){Id = 4, Nombre = "Mercedes Benz"},
                }
            });

            _options = configMock.Object;
            _dbContext = new AssaDbContext(options, _options);
            _controller = new MarcasAutosController(_dbContext);
        }

        [Fact]
        public async Task Get()
        {
            // Arrange
            var expectedData = _options.Value.SeedMarcas;

            // Act
            var result = await _controller.Get();

            // Assert
            Assert.NotEmpty(result);
            Assert.Equal(expectedData.Count, result.Count);

            result.ForEach(r =>
            {
                bool exist = expectedData.Any(x => x.Id == r.Id && x.Nombre == r.Nombre);
                Assert.True(exist);
            });
        }
    }
}