﻿// <auto-generated />
using Assa.Test.Backend.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Assa.Test.Backend.Migrations
{
    [DbContext(typeof(AssaDbContext))]
    partial class AssaDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Assa.Test.Backend.Entities.MarcaAuto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Nombre")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("MarcasAutos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Nombre = "Porsche"
                        },
                        new
                        {
                            Id = 2,
                            Nombre = "BMW"
                        },
                        new
                        {
                            Id = 3,
                            Nombre = "Audi"
                        },
                        new
                        {
                            Id = 4,
                            Nombre = "Mercedes Benz"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
