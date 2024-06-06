using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class PMSDbContext : DbContext
    {
        public PMSDbContext(DbContextOptions options) : base(options) {}

        public DbSet<Product> Products { get; set; }
    }
}