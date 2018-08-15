using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace defaultApi.Models
{
    public class defaultModel : DbContext
    {
        public defaultModel(DbContextOptions<defaultModel> options)
            : base(options)
        { }

        public DbSet<TodoItem> TodoItems { get; set;}
        public DbSet<Category> Categories { get; set;}
    }

    public class TodoItem
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public bool Status { get; set; }

        public string CategoryId { get; set; }
        public Category Category { get; set; }
    }

    public class Category
    {
        public string Id { get; set; }
        public string Title { get; set; }

        public List<TodoItem> TodoItems { get; set; }
    }
}
